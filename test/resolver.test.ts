import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { AbiItem } from 'web3-utils'
import RNS from '../build/contracts/RNS.json'
import AddrResolver from '../build/contracts/ResolverV1.json'
import Resolver from '../src'

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

describe('resolver', () => {
  beforeEach(async () => {
    const web3 = new Web3('http://localhost:8545') // ganache
    const [from] = await web3.eth.getAccounts()
    web3.eth.defaultAccount = from

    const rnsContract = (await deployRNS(web3))
    const resolverContract = (await deployResolver(web3))

    await resolverContract.methods.initialize(rnsContract.options.address).send({ from })

    expect(await resolverContract.methods.rns().call()).toEqual(rnsContract.options.address)
  })

  test('fails if domain has no resolver', () => {
    const resolver = new Resolver()

    expect(resolver.addr('noresolver.testing2.rsk'))
  })
})
