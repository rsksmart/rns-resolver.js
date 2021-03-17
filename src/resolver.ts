// eslint-disable-next-line
/// <reference path="index.d.ts"/>
import { hash as namehash } from 'eth-ens-namehash'
import nodeFetch from 'node-fetch'
import { toChecksumAddress } from 'crypto-addr-codec'
import { ethCallFactory } from './rpc'
import * as errors from './errors'
import { RpcUrl, Address } from './types'
import { AddrResolverContract, RegistryContract } from './contracts'
import { ZERO_ADDRESS } from './constants'

type AddrEncoder = (buff: Buffer) => string

interface ResolverOptions {
  registryAddress: Address
  rpcUrl: RpcUrl
  addrEncoder: AddrEncoder
}

interface ResolverConfig {
  fetch?: typeof nodeFetch
}

export class Resolver {
  registry: RegistryContract
  resolverContractFactory: (address: Address) => AddrResolverContract

  addrEncoder: AddrEncoder

  constructor(config: ResolverOptions & ResolverConfig) {
    const ethCall = ethCallFactory(config.fetch ?? fetch, config.rpcUrl)
    this.registry = new RegistryContract(config.registryAddress, ethCall)
    this.resolverContractFactory = (address: Address) => new AddrResolverContract(address, ethCall)

    this.addrEncoder = config.addrEncoder
  }

  public async addr(domain: string): Promise<string> {
    const node = namehash(domain)

    const resolverAddress = await this.registry.getResolver(node)
    if (resolverAddress === ZERO_ADDRESS) throw new Error(errors.ERROR_NO_RESOLVER)

    const addrResolverContract = this.resolverContractFactory(resolverAddress)

    const supportsAddr = await addrResolverContract.supportsAddrInterface(resolverAddress)
    if(!supportsAddr) throw new Error(errors.ERROR_NOT_ADDR)

    const addr = await addrResolverContract.getAddr(resolverAddress, node)
    if(addr === ZERO_ADDRESS) throw new Error(errors.ERROR_NO_ADDR_SET)

    return this.addrEncoder(Buffer.from(addr.slice(2), 'hex'))
  }

  public static forRskMainnet = (config: ResolverConfig): Resolver => new Resolver({
    registryAddress: '0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5',
    rpcUrl: 'https://public-node.rsk.co',
    addrEncoder: (buff: Buffer) => toChecksumAddress(`0x${buff.toString('hex')}`, 30),
    ...config
  })

  public static forRskTestnet = (config: ResolverConfig): Resolver => new Resolver({
    registryAddress: '0x7d284aaac6e925aad802a53c0c69efe3764597b8',
    rpcUrl: 'https://public-node.testnet.rsk.co',
    addrEncoder: (buff: Buffer) => toChecksumAddress(`0x${buff.toString('hex')}`, 31),
    ...config
  })
}
