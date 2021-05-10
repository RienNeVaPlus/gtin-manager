GTIN / EAN Manager
===

[![npm version](https://img.shields.io/npm/v/gtin-manager.svg?style=flat-square)](https://npmjs.com/package/gtin-manager)
[![javascript standard style](https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square)](http://standardjs.com/)
[![travis build](https://img.shields.io/travis/riennevaplus/gtin-manager/master.svg?style=flat-square)](https://travis-ci.org/riennevaplus/gtin-manager)
[![david dependencies](https://david-dm.org/riennevaplus/gtin-manager.svg?style=flat-square)](https://david-dm.org/riennevaplus/gtin-manager)


Generates EANs / GTINs for a given Global Company Prefix (GPC).

```bash
npm install gtin-manager
// or
yarn add gtin-manager
```

### Usage
Create a generator instance using a GCP (Global Company Prefix) provided by GS1.

```ts
import { GTINManager } from 'gtin-manager'

const manager = new GTINManager('12345678')
```

<a id='manager-contingent'></a>
`manager.contingent`
---

Returns the amount of possible GTINs that can be created from the current GCP.

```ts
manager.contingent === 10000 // true
```

<a id='manager-index'></a>
`manager.index`
---

Returns GTIN / EAN for an index (which has to be inside the bounds of `manager.contingent`)

```ts
manager.index(0) === '1234567800004'    // true
manager.index(9999) === '1234567899992' // true
manager.index(10000)                    // Error: Index out of bounds
manager.index(-1)                       // Error: Index out of bounds
```

<a id='generator-all'></a>
`manager.all`
---

Returns an array of all possible GTINs / EANs for the GCP.


```ts
manager.all === ['1234567800011', '1234567800028', ... 9998 more items] // true
```

---

*🌻 Thanks to [xbpf/gtin](https://github.com/xbpf/gtin) for providing functions used in this repository.*
