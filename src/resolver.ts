// eslint-disable-next-line
/// <reference path="index.d.ts"/>
import { hash as namehash } from 'eth-ens-namehash'
import nodeFetch, { Response as NodeFetchResponse } from 'node-fetch'
import { toChecksumAddress } from 'crypto-addr-codec'
import * as errors from './errors'

type RegistryAddress = string
type RpcUrl = string
type AddrEncoder = (buff: Buffer) => string
type Fetch = typeof nodeFetch | typeof fetch

interface ResolverOptions {
  registryAddress: RegistryAddress
  rpcUrl: RpcUrl
  addrEncoder: AddrEncoder
}

interface ResolverConfig {
  fetch?: typeof nodeFetch
}

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export class Resolver {
  registryAddress: RegistryAddress
  rpcUrl: RpcUrl
  addrEncoder: AddrEncoder
  fetch: Fetch

  constructor(config: ResolverOptions & ResolverConfig) {
    this.registryAddress = config.registryAddress
    this.rpcUrl = config.rpcUrl
    this.addrEncoder = config.addrEncoder
    this.fetch = config.fetch ?? fetch
  }

  private ethCall = (params: (string | { [key: string]: string })[]) => this.fetch(this.rpcUrl, {
    method: 'post',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_call',
      id: 666,
      params
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then((res: Response | NodeFetchResponse) => res.json())
    .then(({ result, error, id }) => {
      if (id !== 666) throw new Error('Invalid RPC response: id mismatch')
      if (error) throw new Error('RPC Call error: ' + JSON.stringify(error))
      return result
    })

  private getResolver = (node: string) => this.ethCall(
    [{ to: this.registryAddress, data: '0x0178b8bf' + node.slice(2) }, 'latest']
  ).then(result => '0x' + result.slice(-40))

  private supportsAddrInterface = (resolverAddress: string) => this.ethCall(
    [{ to: resolverAddress, data: '0x01ffc9a73b3b57de00000000000000000000000000000000000000000000000000000000' }, 'latest']
  ).then(result => (result !== '0x' && result !== '0x0000000000000000000000000000000000000000000000000000000000000000'))

  private getAddr = (resolverAddress: string, node: string) =>  this.ethCall(
    [{ to: resolverAddress, data: '0x3b3b57de' + node.slice(2) }, 'latest']
  ).then(result => '0x' + result.slice(-40))

  public async addr(domain: string): Promise<string> {
    const node = namehash(domain)

    const resolverAddress = await this.getResolver(node)
    if (resolverAddress === ZERO_ADDRESS) throw new Error(errors.ERROR_NO_RESOLVER)

    const supportsAddr = await this.supportsAddrInterface(resolverAddress)
    if(!supportsAddr) throw new Error(errors.ERROR_NOT_ADDR)

    const addr = await this.getAddr(resolverAddress, node)
    if(addr === ZERO_ADDRESS) throw new Error(errors.ERROR_NO_ADDR_SET)

    return this.addrEncoder(Buffer.from(addr.slice(2), 'hex'))
  }

  public static forRskMainnet = (config: ResolverConfig) => new Resolver({
    registryAddress: '0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5',
    rpcUrl: 'https://public-node.rsk.co',
    addrEncoder: (buff: Buffer) => toChecksumAddress(`0x${buff.toString('hex')}`, 30),
    ...config
  })

  public static forRskTestnet = (config: ResolverConfig) => new Resolver({
    registryAddress: '0x7d284aaac6e925aad802a53c0c69efe3764597b8',
    rpcUrl: 'https://public-node.testnet.rsk.co',
    addrEncoder: (buff: Buffer) => toChecksumAddress(`0x${buff.toString('hex')}`, 31),
    ...config
  })
}
