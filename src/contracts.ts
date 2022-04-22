import { Address, EthCall } from './types'
import { toResolverData, toAddress, supportsAddrData, supportsCoinAddrData, toBoolean, toBytes, toAddrData, toCoinAddrData, supportsNameData, toNameData, toString } from './abi'

class BaseContract {
  address: Address
  ethCall: EthCall

  constructor(address: Address, ethCall: EthCall) {
    this.address = address
    this.ethCall = ethCall
  }
}

class EIP165Contract extends BaseContract {
  interfaceId: string

  constructor(address: Address, ethCall: EthCall, interfaceId: string) {
    super(address, ethCall)
    this.interfaceId = interfaceId
  }

  public isInterfaceSupported = (): Promise<boolean> => this.ethCall(
    this.address,
    this.interfaceId
  ).then(toBoolean)
}

export class RegistryContract extends BaseContract {
  public getResolver = (node: string): Promise<string> => this.ethCall(
    this.address,
    toResolverData(node)
  ).then(toAddress)
}

export class AddrResolverContract extends EIP165Contract {
  constructor(address: Address, ethCall: EthCall) {
    super(address, ethCall, supportsAddrData)
  }

  public getAddr = (node: string): Promise<string> =>  this.ethCall(
    this.address,
    toAddrData(node)
  ).then(toAddress)
}

export class CoinAddrResolverContract extends EIP165Contract {
  constructor(address: Address, ethCall: EthCall) {
    super(address, ethCall, supportsCoinAddrData)
  }

  public getCoinAddr = (node: string, coinType: number): Promise<string> =>  this.ethCall(
    this.address,
    toCoinAddrData(node, coinType)
  ).then(toBytes)
}

export class NameResolverContract extends EIP165Contract {
  constructor(address: Address, ethCall: EthCall) {
    super(address, ethCall, supportsNameData)
  }

  public getName = (node: string): Promise<string> => this.ethCall(
    this.address,
    toNameData(node)
  ).then(toString)
}
