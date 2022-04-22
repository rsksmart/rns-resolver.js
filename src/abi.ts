import { stripHexPrefix } from './hex'

const GET_NAME_METHOD_SIG = '0x691f3431'
// data encoders
export const toResolverData = (node: string): string => '0x0178b8bf' + stripHexPrefix(node)
export const supportsAddrData = '0x01ffc9a73b3b57de00000000000000000000000000000000000000000000000000000000'
export const supportsCoinAddrData = '0x01ffc9a7f1cb7e0600000000000000000000000000000000000000000000000000000000'
export const supportsNameData = `0x01ffc9a7${stripHexPrefix(GET_NAME_METHOD_SIG)}00000000000000000000000000000000000000000000000000000000`
export const toAddrData = (node: string): string => '0x3b3b57de' + stripHexPrefix(node)
export const toCoinAddrData = (node: string, coinType: number): string => '0xf1cb7e06' + stripHexPrefix(node) + coinType.toString(16).padStart(64, '0')
export const toNameData = (node: string): string => GET_NAME_METHOD_SIG + stripHexPrefix(node)

// result decoders
export const toAddress = (result: string): string => '0x' + result.slice(-40)
export const toBoolean = (result: string): boolean => (result !== '0x' && result !== '0x0000000000000000000000000000000000000000000000000000000000000000')
export const toBytes = (result: string) => result.slice(130, 130 + parseInt(result.slice(66, 130), 16) * 2)
export const toString = (result: string) => {
  const hex = toBytes(result)
  let str = ''
  for(let i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex[i] + hex[i+1], 16));
  return str
}
