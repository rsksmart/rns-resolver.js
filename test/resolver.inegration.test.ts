import Resolver from '../src'
import nodeFetch from 'node-fetch'
import * as errors from '../src/errors'

describe('mainnet', function(this: {
  resolver: Resolver
}) {
  beforeAll(() => {
    this.resolver = new Resolver({
      registryAddress: '0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5',
      rpcUrl: 'https://public-node.rsk.co',
      fetch: nodeFetch
    })
  })

  test('valid rsk address', async () => {
    const addr = await this.resolver.addr('testing.rsk')

    expect(addr).toEqual('0x0000000000000000000000000000000001000006')
  })
})

describe('testnet', function(this: {
  resolver: Resolver
}) {
  beforeAll(() => {
    this.resolver = new Resolver({
      registryAddress: '0x7d284aaac6e925aad802a53c0c69efe3764597b8',
      rpcUrl: 'https://public-node.testnet.rsk.co',
      fetch: nodeFetch
    })
  })

  test('fails if domain has no resolver', () => expect(this.resolver.addr('noresolver.testing.rsk')).rejects.toThrowError(errors.ERROR_NO_RESOLVER))
  test('fails if domain has non addr resolver', () => expect(this.resolver.addr('noaddrresolver.testing.rsk')).rejects.toThrowError(errors.ERROR_NOT_ADDR))
  test('fails if domain has 0 address', () => expect(this.resolver.addr('noresolution.testing.rsk')).rejects.toThrowError(errors.ERROR_NO_ADDR_SET))
  test('returns domain address', async () => expect(await this.resolver.addr('june23.rsk')).toEqual('0x2824b21e348d520a50cddfa77ba158822160dd94'))
})
