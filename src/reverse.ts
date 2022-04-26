import { hash as namehash } from 'eth-ens-namehash'
import { stripHexPrefix } from './hex'

export const getReverseRecord = (address: string): string => namehash(`${stripHexPrefix(address)}.addr.reverse`)
