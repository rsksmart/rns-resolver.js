import { stripHexPrefix } from './hex'

// eip-165
export const supportsInterface = (interfaceId: string): string => `0x01ffc9a7${stripHexPrefix(interfaceId)}00000000000000000000000000000000000000000000000000000000`
export const toBoolean = (result: string): boolean => (result !== '0x' && result !== '0x0000000000000000000000000000000000000000000000000000000000000000')

// registry
export const toResolverData = (node: string): string => '0x0178b8bf' + stripHexPrefix(node)

// addr
const ADDR_METHOD_SIG = '0x3b3b57de'
export const supportsAddrData = supportsInterface(ADDR_METHOD_SIG)
export const toAddrData = (node: string): string => ADDR_METHOD_SIG + stripHexPrefix(node)
export const toAddress = (result: string): string => '0x' + result.slice(-40)

// coin addr
const COIN_ADDR_METHOD_SIG = '0xf1cb7e06'
export const supportsCoinAddrData = supportsInterface(COIN_ADDR_METHOD_SIG)
export const toCoinAddrData = (node: string, coinType: number): string => COIN_ADDR_METHOD_SIG + stripHexPrefix(node) + coinType.toString(16).padStart(64, '0')
export const toBytes = (result: string): string => result.slice(130, 130 + parseInt(result.slice(66, 130), 16) * 2)

// name
const NAME_METHOD_SIG = '0x691f3431'
export const supportsNameData = supportsInterface(NAME_METHOD_SIG)
export const toNameData = (node: string): string => NAME_METHOD_SIG + stripHexPrefix(node)
export const toString = (result: string): string => {
  const hex = toBytes(result)
  let str = ''
  for(let i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex[i] + hex[i+1], 16));
  return str
}
