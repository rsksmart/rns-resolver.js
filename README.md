<p align="middle">
  <img src="https://www.rifos.org/assets/img/logo.svg" alt="logo" height="100" >
</p>
<h3 align="middle"><code>@rsksmart/rns-resolver.js</code></h3>
<p align="middle">
    RNS Resolver
</p>
<p align="middle">
  <!--<a href="https://developers.rsk.co/rif/identity/specs/did-auth/">
    <img src="https://img.shields.io/badge/-specs-lightgrey" alt="specs" />
  </a>
  <a href="https://developers.rsk.co/rif/identity/rlogin/libraries/express-did-auth/">
    <img src="https://img.shields.io/badge/-docs-brightgreen" alt="docs" />
  </a>-->
  <a href="https://github.com/rsksmart/rns-resolver.js/actions?query=workflow%3Aci">
    <img src="https://github.com/rsksmart/rns-resolver.js/workflows/ci/badge.svg" />
  </a>
  <a href="https://lgtm.com/projects/g/rsksmart/rns-resolver.js/context:javascript">
    <img src="https://img.shields.io/lgtm/grade/javascript/github/rsksmart/rns-resolver.js" />
  </a>
  <a href='https://coveralls.io/github/rsksmart/rns-resolver.js?branch=main'>
    <img src='https://coveralls.io/repos/github/rsksmart/rns-resolver.js/badge.svg?branch=main' alt='Coverage Status' />
  </a>
  <a href="https://badge.fury.io/js/%40rsksmart%2Frns-resolver.js">
    <img src="https://badge.fury.io/js/%40rsksmart%2Frns-resolver.js.svg" alt="npm" />
  </a>
  <a href="https://hits.seeyoufarm.com">
    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Frsksmart%2Frns-resolver.js&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/>
  </a>
</p>

Use this library to resolver RNS domains.

```
npm i @rsksmart/rns-resolver.js
```

## Features

- Resolve RSK addresses
- Resolve other coins addresses

## Usage

```ts
import Resolver from '@rsksmart/rns-resolver.js'

const resolver = new Resolver.forRskMainnet()

resolver.addr('moneyonchain.rsk').then(console.log) // gets rsk address
// 0x135601C736ddB4C58a4b8fd3CD9F66dF244d28AA


resolver.addr('multichain.testing.rsk', 1).then(console.log) // gets btc address
// 1Ftu4C8VW18RkB8PZxXwwHocMLyEynLcrG
```

### Usage with other networks

For RSK Testnet:

```ts
const resolver = new Resolver.forRskTestnet()
```

For other networks:

```ts
const resolver = new Resolver({
  rpcUrl, // your custom network rpc url
  registryAddress: rnsRegistryContractAddress, // deployed on your custom network
  addrEncoder: (buff: Buffer) => `0x${buff.toString('hex')}`, // mock address encoder
})
```

To deploy RNS Registry contract in your local network you can either:
- Run the whole RNS Suite: https://github.com/rnsdomains/rns-suite
- Deploy just the RNS Registry: https://github.com/rnsdomains/rns-registry
- Deploy programatically as done in unit tests in this repo - see `test/resolver.test.ts`

### Usage in Node.js

This library uses `fetch` by default. To use the ibrary in Node.js please install [`node-fetch`](https://www.npmjs.com/package/node-fetch) and set it up this way:

```ts
import Resolver from '@rsksmart/rns-resolver.js'
import nodeFetch from 'node-fetch'

const resolver = new Resolver.forRskMainnet({
  fetch: nodeFetch
})
```

### Usage in React Native

The resolver uses some Node.js modules that are not implemented by React Native. You need to fill the globals.

1. Install the resolver

  ```
  yarn add @rsksmart/rns-resolver.js
  ```

2. It . Install them

  ```
  yarn add buffer big-integer
  ```

3. Add a `shim.js` file 

  ```js
  if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer
  if (typeof BigInt === 'undefined') global.BigInt = require('big-integer')
  ```

4. Import `shim.js` from `index.js`

  ```js
  import './shim'
  ```

## Develop

Install dependencies:

```
npm i
```

### Run tests

Start a `ganache-cli` in a spearate terminal with

```
npm run ganache
```

Then run:

```
npm run test
```

### Run linter

```
npm run lint
```
