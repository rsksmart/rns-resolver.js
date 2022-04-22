import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { AbiItem, sha3 } from 'web3-utils'
import { hash as namehash } from 'eth-ens-namehash'
import nodeFetch from 'node-fetch'
import { formatsByCoinType } from '@ensdomains/address-encoder'
import { toChecksumAddress } from 'crypto-addr-codec'

import RNS from '../build/contracts/RNS.json'

import AddrResolver from '../build/contracts/ResolverV1.json'

import PublicResolver from '../build/contracts/PublicResolver.json'
import ReverseRegistrar from '../build/contracts/ReverseRegistrar.json'

import NameResolver from '../build/contracts/NameResolver.json'
import Resolver from '../src'

import * as errors from '../src/errors'

const deployContract = async (web3: Web3, abi: AbiItem[], bytecode: string, args?: any[]): Promise<Contract> => {
  const contract = new web3.eth.Contract(abi)
  const deployer = contract.deploy({ data: bytecode, arguments: args })

  const from = web3.eth.defaultAccount as string

  const gas = await deployer.estimateGas({ from })

  return new Promise((resolve, reject) => deployer.send({ from, gas })
    .on('error', (error: Error) => reject(error))
    .then((newContractInstance: Contract) => resolve(newContractInstance))
  )
}

const deployRNS = async (web3: Web3): Promise<Contract> => deployContract(web3, RNS.abi as AbiItem[], RNS.bytecode)

const deployResolver = async (web3: Web3): Promise<Contract> => deployContract(web3, AddrResolver.abi as AbiItem[], AddrResolver.bytecode)
const deployLegacyResolver = async (web3: Web3, registryAddress: string): Promise<Contract> => deployContract(web3, PublicResolver.abi as AbiItem[], PublicResolver.bytecode, [registryAddress])

const deployReverseRegistrar = async (web3: Web3, registryAddress: string): Promise<Contract> => deployContract(web3, ReverseRegistrar.abi as AbiItem[], ReverseRegistrar.bytecode, [registryAddress])
const deployNameResolver = async (web3: Web3, registryAddress: string): Promise<Contract> => deployContract(web3, NameResolver.abi as AbiItem[], NameResolver.bytecode, [registryAddress])

describe('resolver', function (this: {
  web3: Web3,
  rnsContract: Contract,
  resolverContract: Contract,
  reverseRegistrarContract: Contract,
  txOptions: { from: string },
  resolver: Resolver,
  testCoinAddr: (coinType: number, addr: string) => Promise<void>
}) {
  beforeEach(async () => {
    const rpcUrl = 'http://localhost:8545'
    this.web3 = new Web3(rpcUrl) // ganache
    const [from] = await this.web3.eth.getAccounts()
    this.txOptions = { from }
    this.web3.eth.defaultAccount = from

    this.rnsContract = (await deployRNS(this.web3))
    this.resolverContract = (await deployResolver(this.web3))

    await this.resolverContract.methods.initialize(this.rnsContract.options.address).send(this.txOptions)

    expect(await this.resolverContract.methods.rns().call()).toEqual(this.rnsContract.options.address)

    this.reverseRegistrarContract = await deployReverseRegistrar(this.web3, this.rnsContract.options.address)
    const nameResolverContract = await deployNameResolver(this.web3, this.rnsContract.options.address)

    await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('reverse'), this.txOptions.from).send(this.txOptions)
    await this.rnsContract.methods.setSubnodeOwner(namehash('reverse'), sha3('addr'), this.txOptions.from).send(this.txOptions)
    await this.rnsContract.methods.setResolver(namehash('addr.reverse'), nameResolverContract.options.address)
    await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('addr'), this.reverseRegistrarContract.options.address).send(this.txOptions)

    this.resolver = new Resolver({
      registryAddress: this.rnsContract.options.address,
      rpcUrl,
      defaultCoinType: 137,
      addrEncoder: (buff: Buffer) => toChecksumAddress(`0x${buff.toString('hex')}`, 30),
      fetch: nodeFetch
    })

    this.testCoinAddr = async (coinType: number, addr: string) => {
      const buff = formatsByCoinType[coinType].decoder(addr)

      await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('rsk'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setSubnodeOwner(namehash('rsk'), sha3('test'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setResolver(namehash('test.rsk'), this.resolverContract.options.address).send(this.txOptions)
      await this.resolverContract.methods.setAddr(namehash('test.rsk'), coinType, `0x${buff.toString('hex')}`).send(this.txOptions)

      expect(await this.resolver.addr('test.rsk', coinType)).toEqual(addr)
    }
  })

  describe('addr', () => {
    test('fails if domain has no resolver', async () => {
      await expect(this.resolver.addr('test.rsk')).rejects.toThrowError(errors.ERROR_NO_RESOLVER)
    })

    test('fails if domain has non addr resolver', async () => {
      await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('rsk'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setSubnodeOwner(namehash('rsk'), sha3('test'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setResolver(namehash('test.rsk'), '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').send(this.txOptions)

      await expect(this.resolver.addr('test.rsk')).rejects.toThrowError(errors.ERROR_NOT_ADDR)
    })

    test('fails if domain has 0 address', async () => {
      await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('rsk'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setSubnodeOwner(namehash('rsk'), sha3('test'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setResolver(namehash('test.rsk'), this.resolverContract.options.address).send(this.txOptions)

      await expect(this.resolver.addr('test.rsk')).rejects.toThrowError(errors.ERROR_NO_ADDR_SET)
    })

    test('returns domain address', async () => {
      const addr = '0xBbBbbbBbBBBBBBbBbbbbBbbBbBBbBBBbbBBbBBBb'

      await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('rsk'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setSubnodeOwner(namehash('rsk'), sha3('test'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setResolver(namehash('test.rsk'), this.resolverContract.options.address).send(this.txOptions)
      await this.resolverContract.methods.setAddr(namehash('test.rsk'), addr.toLowerCase()).send(this.txOptions)

      expect(await this.resolver.addr('test.rsk')).toEqual(addr)
    })
  })

  describe('coin addr', () => {
    test('fails if domain has no resolver', async () => {
      await expect(this.resolver.addr('test.rsk', 0)).rejects.toThrowError(errors.ERROR_NO_RESOLVER)
    })

    test('fails if domain has non coin addr resolver', async () => {
      const publicResolver = await deployLegacyResolver(this.web3, this.rnsContract.options.address) // has addr but no coin addr

      await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('rsk'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setSubnodeOwner(namehash('rsk'), sha3('test'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setResolver(namehash('test.rsk'), publicResolver.options.address).send(this.txOptions)

      await expect(this.resolver.addr('test.rsk', 0)).rejects.toThrowError(errors.ERROR_NOT_COIN_ADDR)
    })

    test('fails if domain has 0 address', async () => {
      await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('rsk'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setSubnodeOwner(namehash('rsk'), sha3('test'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setResolver(namehash('test.rsk'), this.resolverContract.options.address).send(this.txOptions)

      await expect(this.resolver.addr('test.rsk', 0)).rejects.toThrowError(errors.ERROR_NO_COIN_ADDR_SET)
    })

    test('returns domain BTC address', () => this.testCoinAddr(0, '1Bkt1omwhiT6T2RejiLaSFh8ScyT81eN87'))
    test('returns domain LTC address', () => this.testCoinAddr(2, 'LaJfmTU7ZYiCUjcNEbnn6DzkwNtpARkonA'))
    test('returns domain NEM address', () => this.testCoinAddr(43, 'ND6ZPJL4HDASMJ72AZWRTUTOQLD7PFVFODZSBG6W'))
    test('returns domain ETH address', () => this.testCoinAddr(60, '0xE72F79190BC8f92067C6A62008656c6a9077F6AA'))
    test('returns domain RSK address', () => this.testCoinAddr(137, '0xC2a41f76CaCFa933c3496977f2160944EF8c2de3'))

    test('domain has addr and no coin addr, but default coin addr is requested', async () => {
      const publicResolver = await deployLegacyResolver(this.web3, this.rnsContract.options.address) // has addr but no coin addr

      const addr = '0xBbBbbbBbBBBBBBbBbbbbBbbBbBBbBBBbbBBbBBBb'

      await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('rsk'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setSubnodeOwner(namehash('rsk'), sha3('test'), this.txOptions.from).send(this.txOptions)
      await this.rnsContract.methods.setResolver(namehash('test.rsk'), publicResolver.options.address).send(this.txOptions)
      await publicResolver.methods.setAddr(namehash('test.rsk'), addr.toLowerCase()).send(this.txOptions)

      await expect(await this.resolver.addr('test.rsk', 137)).toEqual(addr)
    })
  })

  describe('reverse', () => {

    test('fails if address has no reverse record', async () => {
      await expect(this.resolver.reverse(this.txOptions.from)).rejects.toThrow(errors.ERROR_NO_REVERSE_RECORD)
    })

    test('fails if address has no name resolver in reverse record', async () => {
      expect(false).toBeTruthy()
    })

    test('returns domain for an address', async () => {
      expect(false).toBeTruthy()
    })
  })
})
