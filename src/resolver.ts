// eslint-disable-next-line
/// <reference path="index.d.ts"/>
import { hash as namehash } from 'eth-ens-namehash'
import nodeFetch from 'node-fetch'
import { toChecksumAddress } from 'crypto-addr-codec'
import { formatsByCoinType } from '@ensdomains/address-encoder'
import { ethCallFactory } from './rpc'
import * as errors from './errors'
import { RpcUrl, Address } from './types'
import { RegistryContract, AddrResolverContract, CoinAddrResolverContract } from './contracts'
import { ZERO_ADDRESS, ZERO_BYTES } from './constants'

type AddrEncoder = (buff: Buffer) => string

interface ResolverOptions {
  registryAddress: Address
  rpcUrl: RpcUrl
  addrEncoder: AddrEncoder
  defaultCoinType: number
}

interface ResolverConfig {
  fetch?: typeof nodeFetch
}

export class Resolver {
  registry: RegistryContract
  addrResolverContractFactory: (address: Address) => AddrResolverContract
  coinAddrResolverContractFactory: (address: Address) => CoinAddrResolverContract
  defaultCoinType: number

  addrEncoder: AddrEncoder

  constructor(config: ResolverOptions & ResolverConfig) {
    const ethCall = ethCallFactory(config.fetch ?? fetch, config.rpcUrl)
    this.registry = new RegistryContract(config.registryAddress, ethCall)
    this.addrResolverContractFactory = (address: Address) => new AddrResolverContract(address, ethCall)
    this.coinAddrResolverContractFactory = (address: Address) => new CoinAddrResolverContract(address, ethCall)

    this.defaultCoinType = config.defaultCoinType
    this.addrEncoder = config.addrEncoder
  }

  private async _addr(resolverAddress: string, node: string): Promise<string> {
    const addrResolverContract = this.addrResolverContractFactory(resolverAddress)

    const supportsAddr = await addrResolverContract.supportsAddrInterface(resolverAddress)
    if(!supportsAddr) throw new Error(errors.ERROR_NOT_ADDR)

    const addr = await addrResolverContract.getAddr(resolverAddress, node)
    if(addr === ZERO_ADDRESS) throw new Error(errors.ERROR_NO_ADDR_SET)

    return this.addrEncoder(Buffer.from(addr.slice(2), 'hex'))
  }

  private async _coinAddr(resolverAddress: string, node: string, coinType: number): Promise<string> {
    const coinAddrResolverContract = this.coinAddrResolverContractFactory(resolverAddress)

    const supportsCoinAddr = await coinAddrResolverContract.supportsCoinAddrInterface(resolverAddress)
    if(!supportsCoinAddr) throw new Error(errors.ERROR_NOT_COIN_ADDR)

    const addr = await coinAddrResolverContract.getCoinAddr(resolverAddress, node, coinType)
    if(addr === ZERO_BYTES) throw new Error(errors.ERROR_NO_COIN_ADDR_SET)

    return formatsByCoinType[coinType].encoder(Buffer.from(addr, 'hex'))
  }

  public async addr(domain: string, coinType?: number): Promise<string> {
    const node = namehash(domain)

    const resolverAddress = await this.registry.getResolver(node)
    if (resolverAddress === ZERO_ADDRESS) throw new Error(errors.ERROR_NO_RESOLVER)

    if (!coinType && coinType !== 0 || coinType === this.defaultCoinType) return await this._addr(resolverAddress, node)
    return await this._coinAddr(resolverAddress, node, coinType)
  }

  public static forRskMainnet = (config: ResolverConfig): Resolver => new Resolver({
    registryAddress: '0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5',
    rpcUrl: 'https://public-node.rsk.co',
    addrEncoder: (buff: Buffer) => toChecksumAddress(`0x${buff.toString('hex')}`, 30),
    defaultCoinType: 137,
    ...config
  })

  public static forRskTestnet = (config: ResolverConfig): Resolver => new Resolver({
    registryAddress: '0x7d284aaac6e925aad802a53c0c69efe3764597b8',
    rpcUrl: 'https://public-node.testnet.rsk.co',
    addrEncoder: (buff: Buffer) => toChecksumAddress(`0x${buff.toString('hex')}`, 31),
    defaultCoinType: 137,
    ...config
  })
}
