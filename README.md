<h3 align="center">║█║▌║█║▌│║▌║▌█║</h3>

<h1 align="center">🏷️ GTIN Manager</h1>

<p align="center">
  Generates <b>G</b>lobal <b>T</b>rade <b>I</b>tem <b>N</b>umbers (formerly known as <b>EAN</b>s) for a given <b>G</b>lobal <b>C</b>ompany <b>P</b>refix.
</p>

<p align="center">
  <a href="https://github.com/RienNeVaPlus/gtin-manager/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/gtin-manager.svg" alt="license"/></a>
  <a href="https://github.com/RienNeVaPlus/gtin-manager/commits/master"><img src="https://img.shields.io/github/last-commit/riennevaplus/gtin-manager.svg" alt="last-commit"/></a>
  <a href="https://github.com/RienNeVaPlus/gtin-manager/blob/master/package.json"><img src="https://img.shields.io/github/package-json/v/riennevaplus/gtin-manager.svg" alt="version"/></a>
  <a href="https://github.com/RienNeVaPlus/gtin-manager"><img src="https://img.shields.io/github/repo-size/riennevaplus/gtin-manager.svg" alt="version"/></a>
</p>


<h6 align="center">║▌║█║║▌▌│║▌║║▌▌║</h6>

### Setup

```ts
npm install gtin-manager
// or
yarn add gtin-manager
```

<h6 align="center">║▌║█║║▌▌║▌║█║▌║</h6>

### Usage
Create a generator instance using a GCP ([Global Company Prefix](https://www.gs1ie.org/standards/identification/global-company-prefix-gcp/)) provided by [GS1](https://www.gs1-germany.de/).

```ts
import Manager from 'gtin-manager'

const manager = new Manager('12345678')
```

<a id='manager-contingent'></a>
`manager.contingent`
---

Returns the amount of possible GTINs that can be created from the current GCP.

```ts
manager.contingent === 10000 // true
```

<a id='manager-index'></a>
`manager.index(number)`
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


<h6 align="center">▌║║█║║▌█║▌║║▌║▌</h6>

---

*🌻 Thanks to [xbpf/gtin](https://github.com/xbpf/gtin) for providing functions used in this repository.*
