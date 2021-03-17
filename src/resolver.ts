// eslint-disable-next-line
/// <reference path="index.d.ts"/>
import { hash as namehash } from 'eth-ens-namehash'
import nodeFetch, { Response as NodeFetchResponse } from 'node-fetch'
import * as errors from './errors'

interface ResolverOptions {
  registryAddress: string
  rpcUrl: string
  fetch?: typeof nodeFetch
}

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export class Resolver {
  registryAddress: string
  rpcUrl: string
  fetch: typeof nodeFetch | typeof fetch

  constructor(options: ResolverOptions) {
    this.registryAddress = options.registryAddress
    this.rpcUrl = options.rpcUrl
    this.fetch = options.fetch ?? fetch
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

  async addr(domain: string): Promise<string> {
    const node = namehash(domain)

    const resolverAddress = await this.getResolver(node)
    if (resolverAddress === ZERO_ADDRESS) throw new Error(errors.ERROR_NO_RESOLVER)

    const supportsAddr = await this.supportsAddrInterface(resolverAddress)
    if(!supportsAddr) throw new Error(errors.ERROR_NOT_ADDR)

    const addr = await this.getAddr(resolverAddress, node)
    if(addr === ZERO_ADDRESS) throw new Error(errors.ERROR_NO_ADDR_SET)

    return addr
  }
}
