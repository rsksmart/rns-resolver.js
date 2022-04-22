import { hash as namehash } from 'eth-ens-namehash'

export const getReverseRecord = (address: string): string => namehash(`${address.slice(2)}.addr.reverse`)
