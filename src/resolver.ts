// eslint-disable-next-line
/// <reference path="index.d.ts"/>
import { hash as namehash } from 'eth-ens-namehash'
import nodeFetch, { Response as NodeFetchResponse } from 'node-fetch'
import { toChecksumAddress } from 'crypto-addr-codec'
import { ethCallFactory } from './rpc'
import * as errors from './errors'
import { RpcUrl } from './types'
import { toAddress, toResolverData, supportsAddrData, toAddrData } from './abi'

type RegistryAddress = string
type AddrEncoder = (buff: Buffer) => string

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
  addrEncoder: AddrEncoder

  ethCall: (params: (string | { [key: string]: string })[]) => Promise<string>

  constructor(config: ResolverOptions & ResolverConfig) {
    this.registryAddress = config.registryAddress
    this.addrEncoder = config.addrEncoder

    this.ethCall = ethCallFactory(config.fetch ?? fetch, config.rpcUrl)
  }

  private getResolver = (node: string) => this.ethCall(
    [{ to: this.registryAddress, data: toResolverData(node) }, 'latest']
  ).then(toAddress)

  private supportsAddrInterface = (resolverAddress: string) => this.ethCall(
    [{ to: resolverAddress, data: supportsAddrData }, 'latest']
  ).then(result => (result !== '0x' && result !== '0x0000000000000000000000000000000000000000000000000000000000000000'))

  private getAddr = (resolverAddress: string, node: string) =>  this.ethCall(
    [{ to: resolverAddress, data: toAddrData(node) }, 'latest']
  ).then(toAddress)

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
