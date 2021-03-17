const stripHexPrefix = (hex: string): string => hex.slice(2)

// data encoders
export const toResolverData = (node: string): string => '0x0178b8bf' + stripHexPrefix(node)
export const supportsAddrData = '0x01ffc9a73b3b57de00000000000000000000000000000000000000000000000000000000'
export const toAddrData = (node: string): string => '0x3b3b57de' + stripHexPrefix(node)

// result decoders
export const toAddress = (result: string): string => '0x' + result.slice(-40)
export const toBoolean = (result: string): boolean => (result !== '0x' && result !== '0x0000000000000000000000000000000000000000000000000000000000000000')
