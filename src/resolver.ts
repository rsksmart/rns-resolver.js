// eslint-disable-next-line
/// <reference path="index.d.ts"/>
import { hash as namehash } from 'eth-ens-namehash'
import nodeFetch, { Response as NodeFetchResponse } from 'node-fetch'

interface ResolverOptions {
  registryAddress: string
  rpcUrl: string
  fetch?: typeof nodeFetch
}

export class Resolver {
  registryAddress: string
  rpcUrl: string
  fetch: typeof nodeFetch | typeof fetch

  constructor(options: ResolverOptions) {
    this.registryAddress = options.registryAddress
    this.rpcUrl = options.rpcUrl
    this.fetch = options.fetch ?? fetch
  }

  async addr(domain: string): Promise<string> {
    const node = namehash(domain)

    const resolverAddress = await this.fetch(this.rpcUrl, {
      method: 'post',
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_call',
        id: 666,
        params: [{ to: this.registryAddress, data: '0x0178b8bf' + node.slice(2) }]
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res: Response | NodeFetchResponse) => res.json())
      .then(({ result, error, id }) => {
        if (id !== 666) throw new Error('Invalid RPC response: id mismatch')
        if (error) throw new Error('RPC Call error: ' + error)
        return result
      })
      .then(result => '0x' + result.slice(-40))

    if (resolverAddress === '0x0000000000000000000000000000000000000000') throw new Error('Domain has no resolver')


    const supportsAddr = await this.fetch(this.rpcUrl, {
      method: 'post',
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_call',
        id: 666,
        params: [{ to: resolverAddress, data: '0x01ffc9a73b3b57de00000000000000000000000000000000000000000000000000000000' }]
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res: Response | NodeFetchResponse) => res.json())
      .then(({ result, error, id }) => {
        if (id !== 666) throw new Error('Invalid RPC response: id mismatch')
        if (error) throw new Error('RPC Call error: ' + error)
        return result
      })
      .then(result => result !== '0x')

    if(!supportsAddr) throw new Error('Domain has no addr resolver')

    throw new Error('Domain has no address set')
  }
}
