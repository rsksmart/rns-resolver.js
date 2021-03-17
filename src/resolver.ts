// eslint-disable-next-line
/// <reference path="index.d.ts"/>
import { hash as namehash } from 'eth-ens-namehash'
import nodeFetch, { Response as NodeFetchResponse } from 'node-fetch'

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

  private rpcRequest = (params: (string | { [key: string]: string })[]) => this.fetch(this.rpcUrl, {
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
      if (error) throw new Error('RPC Call error: ' + error)
      return result
    })

  async addr(domain: string): Promise<string> {
    const node = namehash(domain)

    const resolverAddress = await this.rpcRequest(
      [{ to: this.registryAddress, data: '0x0178b8bf' + node.slice(2) }]
    ).then(result => '0x' + result.slice(-40))

    if (resolverAddress === ZERO_ADDRESS) throw new Error('Domain has no resolver')

    const supportsAddr = await this.rpcRequest(
      [{ to: resolverAddress, data: '0x01ffc9a73b3b57de00000000000000000000000000000000000000000000000000000000' }]
    ).then(result => result !== '0x')

    if(!supportsAddr) throw new Error('Domain has no addr resolver')

    const addr = await this.rpcRequest(
      [{ to: resolverAddress, data: '0x3b3b57de' + node.slice(2) }]
    ).then(result => '0x' + result.slice(-40))

    if(addr === ZERO_ADDRESS) throw new Error('Domain has no address set')

    return addr
  }
}
