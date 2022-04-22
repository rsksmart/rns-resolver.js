import { Address, EthCall } from './types'
import { toResolverData, toAddress, supportsAddrData, supportsCoinAddrData, toBoolean, toBytes, toAddrData, toCoinAddrData, supportsNameData } from './abi'

class BaseContract {
  address: Address
  ethCall: EthCall

  constructor(address: Address, ethCall: EthCall) {
    this.address = address
    this.ethCall = ethCall
  }
}

export class RegistryContract extends BaseContract {
  public getResolver = (node: string): Promise<string> => this.ethCall(
    this.address,
    toResolverData(node)
  ).then(toAddress)
}

export class AddrResolverContract extends BaseContract {
  public supportsAddrInterface = (resolverAddress: string): Promise<boolean> => this.ethCall(
    resolverAddress,
    supportsAddrData
  ).then(toBoolean)

  public getAddr = (resolverAddress: string, node: string): Promise<string> =>  this.ethCall(
    resolverAddress,
    toAddrData(node)
  ).then(toAddress)
}

export class CoinAddrResolverContract extends BaseContract {
  public supportsCoinAddrInterface = (resolverAddress: string): Promise<boolean> => this.ethCall(
    resolverAddress,
    supportsCoinAddrData
  ).then(toBoolean)

  public getCoinAddr = (resolverAddress: string, node: string, coinType: number): Promise<string> =>  this.ethCall(
    resolverAddress,
    toCoinAddrData(node, coinType)
  ).then(toBytes)
}

export class NameResolverContract extends BaseContract {
  public supportsNameResolverInterface = (): Promise<boolean> => this.ethCall(
    this.address,
    supportsNameData
  ).then(toBoolean)
}
