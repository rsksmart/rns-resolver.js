import nodeFetch, { Response as NodeFetchResponse } from 'node-fetch'

export type RpcUrl = string

export type Fetch = typeof nodeFetch | typeof fetch
export type FetchResponse = Response | NodeFetchResponse

export type EthCall = (to: string, data: string) => Promise<string>
