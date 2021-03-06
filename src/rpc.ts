import { EthCall, Fetch, FetchResponse, RpcUrl } from './types'

export const ethCallFactory = (fetch: Fetch, rpcUrl: RpcUrl): EthCall => (to, data) => fetch(rpcUrl, {
  method: 'post',
  body: JSON.stringify({
    jsonrpc: '2.0',
    method: 'eth_call',
    id: 666,
    params: [{ to, data }, 'latest']
  }),
  headers: { 'Content-Type': 'application/json' },
}).then((res: FetchResponse) => res.json())
  .then(({ result, error, id }) => {
    if (id !== 666) throw new Error('Invalid RPC response: id mismatch')
    if (error) throw new Error('RPC Call error: ' + JSON.stringify(error))
    return result
  })
