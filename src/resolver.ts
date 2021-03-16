export class Resolver {
  // eslint-disable-next-line
  async addr(domain: string) {
    throw new Error('Domain has no resolver')
  }
}
