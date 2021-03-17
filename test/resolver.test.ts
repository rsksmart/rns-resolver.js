import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { AbiItem, sha3 } from 'web3-utils'
import RNS from '../build/contracts/RNS.json'
import AddrResolver from '../build/contracts/ResolverV1.json'
import Resolver from '../src'
import { hash as namehash } from 'eth-ens-namehash'
import nodeFetch from 'node-fetch'

const deployRNS = async (web3: Web3): Promise<Contract> => {
  const contract = new web3.eth.Contract(RNS.abi as AbiItem[])
  const deployer = contract.deploy({ data: RNS.bytecode })

  const from = web3.eth.defaultAccount as string

  const gas = await deployer.estimateGas({ from })

  return new Promise((resolve, reject) => deployer.send({ from, gas })
    .on('error', (error: Error) => reject(error))
    .then((newContractInstance: Contract) => resolve(newContractInstance))
  )
}

const deployResolver = async (web3: Web3): Promise<Contract> => {
  const contract = new web3.eth.Contract(AddrResolver.abi as AbiItem[])
  const deployer = contract.deploy({ data: AddrResolver.bytecode })

  const from = web3.eth.defaultAccount as string

  const gas = await deployer.estimateGas({ from })

  return new Promise((resolve, reject) => deployer.send({ from, gas })
    .on('error', (error: Error) => reject(error))
    .then((newContractInstance: Contract) => resolve(newContractInstance))
  )
}

describe('resolver', function (this: {
  rnsContract: Contract,
  resolverContract: Contract,
  txOptions: { from: string },
  resolver: Resolver
}) {
  beforeEach(async () => {
    const rpcUrl = 'http://localhost:8545'
    const web3 = new Web3(rpcUrl) // ganache
    const [from] = await web3.eth.getAccounts()
    this.txOptions = { from }
    web3.eth.defaultAccount = from

    this.rnsContract = (await deployRNS(web3))
    this.resolverContract = (await deployResolver(web3))

    await this.resolverContract.methods.initialize(this.rnsContract.options.address).send(this.txOptions)

    expect(await this.resolverContract.methods.rns().call()).toEqual(this.rnsContract.options.address)

    this.resolver = new Resolver({
      registryAddress: this.rnsContract.options.address,
      rpcUrl,
      fetch: nodeFetch
    })
  })

  test('fails if domain has no resolver', async () => {
    await expect(this.resolver.addr('test.rsk')).rejects.toThrowError('Domain has no resolver')
  })

  test('fails if domain has non addr resolver', async () => {
    await this.rnsContract.methods.setSubnodeOwner('0x00', sha3('rsk'), this.txOptions.from).send(this.txOptions)
    await this.rnsContract.methods.setSubnodeOwner(namehash('rsk'), sha3('test'), this.txOptions.from).send(this.txOptions)
    await this.rnsContract.methods.setResolver(namehash('test.rsk'), '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').send(this.txOptions)

    await expect(this.resolver.addr('test.rsk')).rejects.toThrowError('Domain has no addr resolver')
  })
})
