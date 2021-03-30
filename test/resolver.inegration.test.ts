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

  test('valid RSK address', async () => {
    const addr = await this.resolver.addr('moneyonchain.rsk')

    expect(addr).toEqual('0x135601C736ddB4C58a4b8fd3CD9F66dF244d28AA')
  })

  test('valid RSK address with coin type and no coin addr resolver', async () => {
    const addr = await this.resolver.addr('riverplate.rsk', 137)

    expect(addr).toEqual('0x9D4969d06411D3B319f7204b71000cF874165Bb0')
  })
})

describe('testnet', function(this: {
  resolver: Resolver,
  testCoinAddr: (coinType: number, addr: string) => Promise<void>
}) {
  beforeAll(() => {
    this.resolver = Resolver.forRskTestnet({
      fetch: nodeFetch
    })

    this.testCoinAddr = async (coinType: number, expectedAddr: string) => {
      expect(await this.resolver.addr('testing2.rsk', coinType)).toEqual(expectedAddr)
    }
  })

  test('fails if domain has no resolver', () => expect(this.resolver.addr('noresolver.testing.rsk')).rejects.toThrowError(errors.ERROR_NO_RESOLVER))
  test('fails if domain has non addr resolver', () => expect(this.resolver.addr('noaddrresolver.testing.rsk')).rejects.toThrowError(errors.ERROR_NOT_ADDR))
  test('fails if domain has 0 address', () => expect(this.resolver.addr('noresolution.testing.rsk')).rejects.toThrowError(errors.ERROR_NO_ADDR_SET))
  test('returns domain address', async () => expect(await this.resolver.addr('june23.rsk')).toEqual('0x2824B21e348D520a50cDDfA77ba158822160DD94'))

  test('valid BTC address', () => this.testCoinAddr(0, '1GhX38QTj34iHjv9gMPpTbb1xUyge9xptQ'))
  test('valid NEM address', () => this.testCoinAddr(43, 'ND6ZPJL4HDASMJ72AZWRTUTOQLD7PFVFODZSBG6W'))
  test('valid ETH address', () => this.testCoinAddr(60, '0xb2a03e995C98981013fefc5e40fB5a9dA326C230'))
  test('valid RSK address', () => this.testCoinAddr(137, '0xC998abBE862fcd4f834d35D4b91C5ef2811951b4'))
})
