const stripHexPrefix = (hex: string) => hex.slice(2)

// data encoders
export const toResolverData = (node: string) => '0x0178b8bf' + stripHexPrefix(node)
export const supportsAddrData = '0x01ffc9a73b3b57de00000000000000000000000000000000000000000000000000000000'
export const toAddrData = (node: string) => '0x3b3b57de' + stripHexPrefix(node)

// result decoders
export const toAddress = (result: string) => '0x' + result.slice(-40)
export const toBoolean = (result: string) => (result !== '0x' && result !== '0x0000000000000000000000000000000000000000000000000000000000000000')
