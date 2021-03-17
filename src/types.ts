import nodeFetch, { Response as NodeFetchResponse } from 'node-fetch'

export type Fetch = typeof nodeFetch | typeof fetch
export type FetchResponse = Response | NodeFetchResponse

export type RpcUrl = string
