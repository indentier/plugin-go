<div align="center">

  <img src="./icon.png" width="256" height="256" alt="Indentier">

# @indentier/plugin-go

</div>

[![npm version](https://img.shields.io/npm/v/@indentier/plugin-go.svg?color=cb3837&logo=npm)](https://www.npmjs.com/package/@indentier/plugin-go)
[![CI](https://github.com/indentier/plugin-go/actions/workflows/ci.yml/badge.svg)](https://github.com/indentier/plugin-go/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

> Go support for [Indentier](https://github.com/indentier/indentier).

Full documentation: **[indentier.github.io](https://indentier.github.io)**

## Install

```sh
npm i -D indentier @indentier/plugin-go
```

## Setup

```jsonc
// .indentierrc.json
{
  "plugins": ["@indentier/plugin-go"]
}
```

<!-- prettier-ignore -->
| | |
|-|-|
| Language | Go |
| Extensions | `.go` |
| Ruby mode | Yes — injects `var end any=nil`; end statement: `_ = end` |

## License

[MIT](./LICENSE) © otoneko.
