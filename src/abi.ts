const stripHexPrefix = (hex: string): string => hex.slice(2)

// data encoders
export const toResolverData = (node: string): string => '0x0178b8bf' + stripHexPrefix(node)
export const supportsAddrData = '0x01ffc9a73b3b57de00000000000000000000000000000000000000000000000000000000'
export const supportsCoinAddrData = '0x01ffc9a7f1cb7e0600000000000000000000000000000000000000000000000000000000'
export const supportsNameData = '0x01ffc9a7691f343100000000000000000000000000000000000000000000000000000000'
export const toAddrData = (node: string): string => '0x3b3b57de' + stripHexPrefix(node)
export const toCoinAddrData = (node: string, coinType: number): string => '0xf1cb7e06' + stripHexPrefix(node) + coinType.toString(16).padStart(64, '0')

// result decoders
export const toAddress = (result: string): string => '0x' + result.slice(-40)
export const toBoolean = (result: string): boolean => (result !== '0x' && result !== '0x0000000000000000000000000000000000000000000000000000000000000000')
export const toBytes = (result: string) => result.slice(130, 130 + parseInt(result.slice(66, 130), 16) * 2)
