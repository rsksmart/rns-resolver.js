declare module 'eth-ens-namehash' {
  export function hash(domain: string): string
}

declare module 'crypto-addr-codec' {
  export function toChecksumAddress(address: string, chainId: number | null): string
}
