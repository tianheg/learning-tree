import { parse } from 'romast'
import { dedent } from 'extra-tags'
import util from 'util'

const org = dedent`
* Romast
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.
`

const ast = parse(org)
console.log(util.inspect(ast, false, null))
