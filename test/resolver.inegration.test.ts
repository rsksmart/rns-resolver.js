import Resolver from '../src'
import nodeFetch from 'node-fetch'
import * as errors from '../src/errors'

describe('mainnet', function(this: {
  resolver: Resolver
}) {
  beforeAll(() => {
    this.resolver = Resolver.forRskMainnet({
      fetch: nodeFetch
    })
  })

  test('valid rsk address', async () => {
    const addr = await this.resolver.addr('moneyonchain.rsk')

    expect(addr).toEqual('0x135601C736ddB4C58a4b8fd3CD9F66dF244d28AA')
  })
})

describe('testnet', function(this: {
  resolver: Resolver
}) {
  beforeAll(() => {
    this.resolver = Resolver.forRskTestnet({
      fetch: nodeFetch
    })
  })

  test('fails if domain has no resolver', () => expect(this.resolver.addr('noresolver.testing.rsk')).rejects.toThrowError(errors.ERROR_NO_RESOLVER))
  test('fails if domain has non addr resolver', () => expect(this.resolver.addr('noaddrresolver.testing.rsk')).rejects.toThrowError(errors.ERROR_NOT_ADDR))
  test('fails if domain has 0 address', () => expect(this.resolver.addr('noresolution.testing.rsk')).rejects.toThrowError(errors.ERROR_NO_ADDR_SET))
  test('returns domain address', async () => expect(await this.resolver.addr('june23.rsk')).toEqual('0x2824B21e348D520a50cDDfA77ba158822160DD94'))
})
