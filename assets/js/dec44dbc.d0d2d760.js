"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[4133],{1433:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"v13","metadata":{"permalink":"/archetype-docs/blog/v13","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-16-v1.3.0.md","source":"@site/blog/2022-06-16-v1.3.0.md","title":"Version 1.3.0","description":"We present new version 1.3.0 of Archetype language.","date":"2022-06-16T00:00:00.000Z","formattedDate":"June 16, 2022","tags":[{"label":"version","permalink":"/archetype-docs/blog/tags/version"}],"readingTime":1.935,"truncated":true,"authors":[{"name":"Benoit Rognier","title":"CEO Completium","url":"https://www.linkedin.com/in/benoitrognier/","imageURL":"https://media-exp1.licdn.com/dms/image/C4E03AQF04rtSnCch5A/profile-displayphoto-shrink_400_400/0/1517720007405?e=1658966400&v=beta&t=MkbCyKfZt4yuEkvDxxBk_nMUHtDFJsS42zfhcLlHVX4","key":"br"},{"name":"Guillaume Duhamel","title":"CTO Completium","url":"https://www.linkedin.com/in/guillaumeduhamel/","imageURL":"https://media-exp1.licdn.com/dms/image/C4D03AQGxFFOLb-0sew/profile-displayphoto-shrink_400_400/0/1516528565176?e=1658966400&v=beta&t=w8NwuTiiP--EwNxQK57UHYvBGFvcTccj8NTFav5unVo","key":"gd"}],"frontMatter":{"slug":"v13","title":"Version 1.3.0","authors":["br","gd"],"tags":["version"]},"nextItem":{"title":"Shortcut evaluation","permalink":"/archetype-docs/blog/shortcut-evaluation"}},"content":"import { Grid } from \'@mui/material\';\\nimport ThemedDivider from \'@site/src/components/Divider.js\'\\n\\nimport { renamings } from \'./renamings.js\';\\nimport Api from \'@site/src/components/Api.js\';\\n\\n\\nWe present new version [`1.3.0`](/docs/install) of Archetype language.\\n\\n:::caution\\nThis version introduces breaking changes in the [naming](/blog/v13#renamings) of some builtins.\\n:::\\n\x3c!--truncate--\x3e\\n\\n### Added\\n\\n<Grid container>\\n<Grid xs={12} sm={12} md={3}>\\n\\n#### Asset access\\n\\n</Grid>\\n\\n<Grid xs={12} sm={12} md={9}>\\n\\nPresentation in this blog [entry](/blog/asset-access).\\n\\n</Grid>\\n</Grid>\\n\\n<ThemedDivider />\\n\\n<Grid container style={{ marginTop: \'18px\' }}>\\n<Grid xs={12} sm={12} md={3}>\\n\\n#### `otherwise`\\n\\n</Grid>\\n\\n<Grid xs={12} sm={12} md={9}>\\n\\n`otherwise` command is now available in *all* [sections](/docs/reference/declarations/entrypoint#sections) to define a specific error message.\\n\\nFor example:\\n```archetype\\nentry set_owner_candidate(oc : address) {\\n  called by owner otherwise \\"CALLER_NOT_OWNER\\"\\n  /* ... other sections ... */\\n}\\n```\\n\\n</Grid>\\n</Grid>\\n\\n<ThemedDivider />\\n\\n<Grid container style={{ marginTop: \'18px\' }}>\\n<Grid xs={12} sm={12} md={3}>\\n\\n#### `/` `%`\\n\\n</Grid>\\n\\n<Grid xs={12} sm={12} md={9}>\\n\\nIt is now possible to divide and apply modulo between [`tez`](/docs/reference/types#tez) values:\\n```archetype\\nconst a : rational = 5tz / 3tz;\\nconst b : tez = 5tz % 2tz\\n```\\n\\n</Grid>\\n</Grid>\\n\\n### Changed\\n\\n<Grid container style={{ marginTop: \'18px\' }}>\\n<Grid xs={12} sm={12} md={3}>\\n\\n#### `and` `or`\\n\\n</Grid>\\n\\n<Grid xs={12} sm={12} md={9}>\\n\\nPresentation in this blog [entry](/blog/shortcut-evaluation).\\n\\n</Grid>\\n</Grid>\\n\\n<ThemedDivider />\\n\\n<Grid container style={{ marginTop: \'18px\' }}>\\n<Grid xs={12} sm={12} md={3}>\\n\\n#### `add_update`\\n\\n</Grid>\\n\\n<Grid xs={12} sm={12} md={9}>\\n\\nWhen [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-) is used to update all asset fields it is now optimized and compiled in Michelson as a [`UPDATE`](https://tezos.gitlab.io/michelson-reference/#instr-UPDATE) instruction.\\n\\n</Grid>\\n</Grid>\\n\\n<ThemedDivider />\\n\\n<Grid container style={{ marginTop: \'18px\' }}>\\n<Grid xs={12} sm={12} md={3}>\\n\\n#### `reverse`\\n\\n</Grid>\\n\\n\\n<Grid xs={12} sm={12} md={9}>\\n\\n[`reverse`](/docs/reference/expressions/builtins#reverse(l%20:%20list<T>)) \'s Michelson code is now optimized with:\\n```js\\nNIL string ;\\nPUSH (list string) {\\"i0\\"; \\"i1\\"; \\"i2\\"};\\nITER { CONS };\\n```\\n\\n</Grid>\\n</Grid>\\n\\n## Fixed\\n\\nMultiplication between [`rational`](/docs/reference/types#rational) and big amount of [`tez`](/docs/reference/types#tez) could fail with an overflow; the following now works:\\n```archetype\\nconst a = (2 / 3) * 9223372036854775807utz;\\n```\\n\\n## Renamings\\n\\nSome builtins\' have been renamed (for ex. snake-cased) to be more consistent, and error values have been capitalised.\\n\\nBelow is the list of renamings. *New* names are on the left, *previous* on the right:\\n\\n<Api title=\\"Sections\\" data={renamings.sections} xs={4}/>\\n<br/>\\n\\n<Api title=\\"Types\\" data={renamings.types} xs={4}/>\\n<br/>\\n\\n<Api title=\\"Instructions\\" data={renamings.instructions} xs={4}/>\\n<br/>\\n\\n<Api title=\\"Constants\\" data={renamings.constants} xs={4}/>\\n<br/>\\n\\n<Api title=\\"Builtins\\" data={renamings.builtins} xs={4}/>\\n<br/>\\n\\n<Api title=\\"Assets\\" data={renamings.assets} xs={4}/>\\n<br/>\\n\\n<Api title=\\"Error messages\\" data={renamings.errors} xs={5}/>\\n<br/>"},{"id":"shortcut-evaluation","metadata":{"permalink":"/archetype-docs/blog/shortcut-evaluation","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-04-shortcut-evaluation.md","source":"@site/blog/2022-06-04-shortcut-evaluation.md","title":"Shortcut evaluation","description":"We present a change in version 1.3.0 of the evaluation process of boolean operators and and or in test expression of the if instruction and expression.","date":"2022-06-04T00:00:00.000Z","formattedDate":"June 4, 2022","tags":[{"label":"and","permalink":"/archetype-docs/blog/tags/and"},{"label":"or","permalink":"/archetype-docs/blog/tags/or"},{"label":"if","permalink":"/archetype-docs/blog/tags/if"},{"label":"new feature","permalink":"/archetype-docs/blog/tags/new-feature"}],"readingTime":0.645,"truncated":true,"authors":[{"name":"Guillaume Duhamel","title":"CTO Completium","url":"https://www.linkedin.com/in/guillaumeduhamel/","imageURL":"https://media-exp1.licdn.com/dms/image/C4D03AQGxFFOLb-0sew/profile-displayphoto-shrink_400_400/0/1516528565176?e=1658966400&v=beta&t=w8NwuTiiP--EwNxQK57UHYvBGFvcTccj8NTFav5unVo","key":"gd"}],"frontMatter":{"slug":"shortcut-evaluation","title":"Shortcut evaluation","authors":["gd"],"tags":["and","or","if","new feature"]},"prevItem":{"title":"Version 1.3.0","permalink":"/archetype-docs/blog/v13"},"nextItem":{"title":"Accessing assets","permalink":"/archetype-docs/blog/asset-access"}},"content":"We present a change in version `1.3.0` of the evaluation process of boolean operators [`and`](/docs/reference/expressions/operators/arithmetic#a-and-b) and [`or`](/docs/reference/expressions/operators/arithmetic#a-or-b) in test expression of the [`if`](/docs/reference/instructions/control#if) instruction and expression.\\n\\nConsider the following `if` instruction:\\n```archetype\\nif a and b then\\n /* */\\nend\\n```\\n\x3c!--truncate--\x3e\\n\\nBefore version `1.3.0`, both expressions `a` and `b` were evaluated, meaning that if `b` is a [failing](/docs/reference/instructions/divergent#faile) expression, the evaluation fails even if `a` is true.\\n\\nSince version `1.3.0`, `a and b` is replaced by [conditional](/docs/reference/expressions/controls#if) expression:\\n```archetype\\nif a then b else false\\n```\\n\\nEquivalently, expression `a or b` is replaced by:\\n```archetype\\nif a then true else b\\n```\\n\\nSuch that expression `b` is evaluated only when necessary.\\n\\n### Greedy evaluation\\n\\nThe previous *greedy evaluation*  mechanism is still  available with the [`greedy_and`](/docs/reference/expressions/builtins#greedy_and(a%20:%20bool,%20b%20:%20bool)) and [`greedy_or`](/docs/reference/expressions/builtins#greedy_or(a%20:%20bool,%20b%20:%20bool)) builtins."},{"id":"asset-access","metadata":{"permalink":"/archetype-docs/blog/asset-access","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-25-asset-access.md","source":"@site/blog/2022-05-25-asset-access.md","title":"Accessing assets","description":"We present an improvement in the way assets data are accessed since version 1.3.0 of Archetype.","date":"2022-05-25T00:00:00.000Z","formattedDate":"May 25, 2022","tags":[{"label":"asset","permalink":"/archetype-docs/blog/tags/asset"},{"label":"new feature","permalink":"/archetype-docs/blog/tags/new-feature"}],"readingTime":1.665,"truncated":true,"authors":[{"name":"Guillaume Duhamel","title":"CTO Completium","url":"https://www.linkedin.com/in/guillaumeduhamel/","imageURL":"https://media-exp1.licdn.com/dms/image/C4D03AQGxFFOLb-0sew/profile-displayphoto-shrink_400_400/0/1516528565176?e=1658966400&v=beta&t=w8NwuTiiP--EwNxQK57UHYvBGFvcTccj8NTFav5unVo","key":"gd"}],"frontMatter":{"slug":"asset-access","title":"Accessing assets","authors":["gd"],"tags":["asset","new feature"]},"prevItem":{"title":"Shortcut evaluation","permalink":"/archetype-docs/blog/shortcut-evaluation"},"nextItem":{"title":"Iterable big map","permalink":"/archetype-docs/blog/iterable-big-map"}},"content":"We present an improvement in the way [assets](/docs/asset) data are accessed since version [`1.3.0`](https://github.com/edukera/archetype-lang/releases/tag/1.3.0) of Archetype.\\n\\n### Problems\\n\\nUntil this version, the only way to access an asset data was the field accessor operator of the form `A[k].f`, where `A` is the asset collection, `k` the asset key and `f` the asset field.\\n\\n\x3c!--truncate--\x3e\\n\\nThe first problem was the access to multiple fields; for example, consider the following asset declaration:\\n```archetype\\nasset vehicle {\\n  vin          : string;\\n  manufacturer : string;\\n  year         : nat;\\n  nbdoors      : nat\\n}\\n```\\n\\nAccessing several fields would end up with accessing the underlying map several times:\\n\\n```archetype\\nconst m = vehicle[\\"1G1AF1F57A7192174\\"].manufacturer;\\nconst y = vehicle[\\"1G1AF1F57A7192174\\"].year;\\nconst n = vehicle[\\"1G1AF1F57A7192174\\"].nbdoors\\n```\\n\\nHere the test and fail instructions were repeated three times.\\n\\nThe second problem was the *implicit* fail of the `[]` operator when the asset was not found.\\n\\n### Solution\\n\\nThe [`[]`](/docs/reference/expressions/asset#ak--asset_keya) operator does *not* fail anymore and now returns an [`option`](/docs/reference/types#option<T>) of [asset value](/docs/reference/types#asset_value<A>).\\n\\nCombined with the new [`?= :`](/docs/reference/instructions/localvariable#-) declaration instruction, the proper way to retrieve all vehicle data presented above, is now as follows:\\n\\n```archetype\\nconst v ?= vehicle[\\"1G1AF1F57A7192174\\"] : \\"VEHICLE_NOT_FOUND\\";\\nconst m = v.manufacturer;\\nconst y = v.year;\\nconst n = v.nbdoors\\n```\\n\\n### Single field access\\n\\nSituations where a single asset field is accessed is very common though.\\n\\nVersion [`1.3.0`](/docs/install) provides a new operator [`[]?.`](/docs/reference/expressions/asset#ak--asset_keyaf) that returns an [`option`](/docs/reference/types#option<T>) of field value, so that the non existence case may be *explicitely* treated.\\n\\nFor example, the following retrieves an option of [`nat`](/docs/reference/types#nat) to treat more specifically the case when the asset is not found:\\n```archetype\\nconst on = vehicle[\\"1G1AF1F57A7192174\\"]?.nbdoors;\\n/* treat case when on is none ... */\\n```\\n\\n`on` is typed `option<nat>` and is `none` if the vehicle is not found.\\n\\nOperator [`[].`](/docs/reference/expressions/asset#ak--asset_keyaf) is still available: it fails when asset is not found, which is syntactically convenient when there is an *implicit* existence invariant on the asset:\\n```archetype\\nconst n = vehicle[\\"1G1AF1F57A7192174\\"].nbdoors;\\n```\\n\\nIt implictely fails with `(\\"ASSET_NOT_FOUND\\", \\"vehicle\\")` if `\\"1G1AF1F57A7192174\\"` is not found."},{"id":"iterable-big-map","metadata":{"permalink":"/archetype-docs/blog/iterable-big-map","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-24-iterable-big-map.md","source":"@site/blog/2022-04-24-iterable-big-map.md","title":"Iterable big map","description":"We present a new type of map called iterablebigmap, which has the scalability property of a bigmap, and which can be iterated like a basic map.","date":"2022-04-24T00:00:00.000Z","formattedDate":"April 24, 2022","tags":[{"label":"big map","permalink":"/archetype-docs/blog/tags/big-map"},{"label":"new feature","permalink":"/archetype-docs/blog/tags/new-feature"}],"readingTime":2.875,"truncated":true,"authors":[{"name":"Benoit Rognier","title":"CEO Completium","url":"https://www.linkedin.com/in/benoitrognier/","imageURL":"https://media-exp1.licdn.com/dms/image/C4E03AQF04rtSnCch5A/profile-displayphoto-shrink_400_400/0/1517720007405?e=1658966400&v=beta&t=MkbCyKfZt4yuEkvDxxBk_nMUHtDFJsS42zfhcLlHVX4","key":"br"}],"frontMatter":{"slug":"iterable-big-map","title":"Iterable big map","authors":["br"],"tags":["big map","new feature"]},"prevItem":{"title":"Accessing assets","permalink":"/archetype-docs/blog/asset-access"},"nextItem":{"title":"Events","permalink":"/archetype-docs/blog/events"}},"content":"import useBaseUrl from \'@docusaurus/useBaseUrl\';\\nimport ThemedImage from \'@theme/ThemedImage\';\\n\\nWe present a new type of map called [`iterable_big_map`](/docs/reference/types#iterable_big_map<K,%20V>), which has the scalability property of a [`big_map`](/docs/reference/types#big_map<K,%20V>), and which can be [iterated](/docs/reference/instructions/containers#map) like a basic [`map`](/docs/reference/types#map<K,%20V>).\\n\\nThis feature was suggested by [Nomadic Labs](https://www.nomadic-labs.com/). Thank you to [Lucas Feli](https://www.linkedin.com/in/lucas-felli-815653111/) and [Charles Delhinger](https://www.linkedin.com/in/charles-dehlinger-a34699166/) for the algorithm.\\n\\n## Example\\n\\nConsider the following declaration of an iterable big map between a `nat` key and a `bytes` value:\\n```archetype\\nvariable ibm : iterable_big_map<nat, bytes> = []\\n```\\n\x3c!--truncate--\x3e\\n\\nWhile `ibm` has the scalability of a big map (in terms of number of entries), it can also be iterated with the `for` control instruction:\\n```archetype\\nfor (k,v) in ibm do\\n  /* k is the key, v is the value */\\ndone\\n```\\n\\n:::info\\nNote that:\\n* the natural order of the key values is not garanteed (unlike basic [`map`](/docs/reference/types#map<K,%20V>))\\n* the cost of operations increases compared to a [`big_map`](/docs/reference/types#big_map<K,%20V>)\\n:::\\n\\nAn Archetype [asset](/docs/asset) may now be compiled as an iterable big map; it then benefits from the *whole* asset [API](/docs/asset#api). For example:\\n```archetype\\nasset car to iterable_big_map {\\n  vin       : string;\\n  nbdoors   : nat;\\n  nbrepairs : nat;\\n  owner     : address;\\n}\\n```\\n\\n## Principle\\n\\nSince it is always possible to iterate from `1` to `n`, the idea is to create a big map that associates the iteration integer value to the map\'s key value. It is also necessary to associate the map key back to this iteration integer (see *remove* operation below).\\n\\nThe following example illustrates the design of two big maps called *Keys* and *Values* derived from the original map:\\n<center>\\n<ThemedImage style={{ width: \'80%\' }}\\n  alt=\\"IBM1\\"\\n  sources={{\\n    light: useBaseUrl(\'/img/blog/ibm1-light.svg\'),\\n    dark: useBaseUrl(\'/img/blog/ibm1-dark.svg\'),\\n  }}\\n/>\\n</center>\\n\\n* *Keys* associates the iteration integer with the map key\\n* *Values* is the original map where the value is augmented with the iteration integer\\n\\n### Add\\n\\nThe *add* operation consists in:\\n* associating the next iteration value (`Size + 1`) with the new key in the *Keys* map\\n* associating the new key to the pair of next iteration value and new value in the *Values* map\\n* incrementing the *Size* value\\n\\nThe operation is illustrated below with the addition of the key `131` with value `e5`:\\n<center>\\n<ThemedImage style={{ width: \'80%\' }}\\n  alt=\\"IBM1\\"\\n  sources={{\\n    light: useBaseUrl(\'/img/blog/ibm2-light.svg\'),\\n    dark: useBaseUrl(\'/img/blog/ibm2-dark.svg\'),\\n  }}\\n/>\\n</center>\\n\\n### Update\\n\\nThe *update* operation is straightforward and consists in updating the *Values* map with the new value.\\n\\n### Remove\\n\\nThe *remove* operation is a step-wise process:\\n- the iteration index of the removed key is retrieved from the *Values* map and used to remove the entry in the *Keys* map\\n- the entry is then removed from the *Values* map\\n\\nAt this stage, the iteration values are not consistent since one iteration value has been removed.\\n\\nIt is then necessary to associate the last added element with the removed iteration integer by:\\n- removing the last iteration integer and associate back the removed iteration integer with the last added key in the *Keys* mpa\\n- updating the iteration integer of last added key in the *Values* map\\n\\nThe process is illustrated below with the removal of the entry `29` (associated with iteration value `2`):\\n<center>\\n<ThemedImage style={{ width: \'80%\' }}\\n  alt=\\"IBM1\\"\\n  sources={{\\n    light: useBaseUrl(\'/img/blog/ibm3-light.svg\'),\\n    dark: useBaseUrl(\'/img/blog/ibm3-dark.svg\'),\\n  }}\\n/>\\n</center>\\n\\n## Implementation\\n\\nAn iterable big map is implemented as a triplet of two big maps (*Keys* and *Values*) and one *Size* integer.\\n\\nThe screenshot below of [Better Call Dev](https://better-call.dev/) shows the resulting triplet:\\n\\n![ibm4](/img/blog/ibm4.png)"},{"id":"events","metadata":{"permalink":"/archetype-docs/blog/events","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-03-21-events.md","source":"@site/blog/2022-03-21-events.md","title":"Events","description":"We present the new instruction emit to emit an event, in a similar an event is emitted in languages like solidity.","date":"2022-03-21T00:00:00.000Z","formattedDate":"March 21, 2022","tags":[{"label":"events","permalink":"/archetype-docs/blog/tags/events"},{"label":"new feature","permalink":"/archetype-docs/blog/tags/new-feature"}],"readingTime":2.33,"truncated":true,"authors":[{"name":"Benoit Rognier","title":"CEO Completium","url":"https://www.linkedin.com/in/benoitrognier/","imageURL":"https://media-exp1.licdn.com/dms/image/C4E03AQF04rtSnCch5A/profile-displayphoto-shrink_400_400/0/1517720007405?e=1658966400&v=beta&t=MkbCyKfZt4yuEkvDxxBk_nMUHtDFJsS42zfhcLlHVX4","key":"br"}],"frontMatter":{"slug":"events","title":"Events","authors":["br"],"tags":["events","new feature"]},"prevItem":{"title":"Iterable big map","permalink":"/archetype-docs/blog/iterable-big-map"},"nextItem":{"title":"Welcome","permalink":"/archetype-docs/blog/welcome"}},"content":"We present the new instruction `emit` to emit an event, in a similar an event is emitted in languages like solidity.\\n\\nThis feater was suggested by [Nomadic Labs](https://www.nomadic-labs.com/). Thank you to [Bruno Bernardo](https://www.linkedin.com/in/brunobernardo/) for the event well mechanism.\\n\\nAn event is declared with the `event` keyword, similarly to a record:\\n```archetype\\nevent HighestBidIncreased {\\n  bidder : address;\\n  amount : tez\\n}\\n```\\n\x3c!--truncate--\x3e\\n\\nThe `emit` instruction is then used in an entrypoint as illustrated below:\\n```archetype\\nentry bid() {\\n  /* ... */\\n  if transferred > highestbid then begin\\n    highestbid := transferred;\\n    emit<HighestBidIncreased>({ source; transferred })\\n  end\\n}\\n```\\n\\n### Event well\\n\\nThe emition of an event generates a call to a contract called *event well*. This contract provides a single entrypoint named *event* which takes an argument typed [`bytes`](/docs/reference/types#bytes).\\n\\nThe code of the event well contract is then:\\n```archetype\\narchetype event_well\\n\\nentry %event(arg : bytes) {}\\n```\\n\\nThe event well is deployed at the address [`KT1AHVF5m8XaWPQCGgfAsZ9eSJJZ7WVGV2hE`](https://better-call.dev/ithacanet/KT1AHVF5m8XaWPQCGgfAsZ9eSJJZ7WVGV2hE/operations) on the mainnet, and at [`KT1ReVgfaUqHzWWiNRfPXQxf7TaBLVbxrztw`](https://better-call.dev/ithacanet/KT1ReVgfaUqHzWWiNRfPXQxf7TaBLVbxrztw/operations)on Ithacanet.\\n\\n### Event\\n\\nThe `emit` instruction builds the event argument as a triplet of:\\n* the event name\\n* the event annotated Michelson type\\n* packed value of the event data\\n\\nIn the example of the *HighestBidIncreased* presented above, the following `emit` instruction:\\n```archetype\\nemit<HighestBidIncreased>({ source; transferred })\\n```\\n\\nis equivalent to:\\n```archetype\\nconst e = pack((\\n  \\"HighestBidIncreased\\",\\n  \\"pair (address %bidder) (tez %amount)\\",\\n  pack({\\n    bidder = source;\\n    amount = transferred\\n  })\\n});\\nconst event_well = KT1AHVF5m8XaWPQCGgfAsZ9eSJJZ7WVGV2hE;\\ntransfer 0tz to event_well call event<bytes>(e)\\n```\\n\\n### Retrieve events\\n\\nA Typescript library, called the [*crank*](https://www.npmjs.com/package/@completium/event-well-crank), is available to retrieve event data from a Dapp.\\n\\nThe *crank* receives events from contracts and executes event handler functions.\\n\\nFor example, the `handleHBI` function below is executed when a `HighestBidIncreased` event is emitted by the contract:\\n\\n```js\\nimport { startCrank } from \'@completium/event-well-crank\'\\nimport {\\n  HighestBidIncreased,\\n  register_HighestBidIncreased } from \'./bid-bindings.ts\'\\n\\nconst contract = \\"KT1...\\" // address of the emitter contract\\n\\nconst handleHBI = (hbi : HighestBidIncreased) => {\\n  // ...\\n  console.log(`${hbi.bidder} is now the highest bid bidder.`)\\n}\\n\\n// register Handler\\nregister_HighestBidIncreased(contract, handleHBI);\\n\\n// Start crank\\nawait startCrank();\\n```\\nThe HighestBidIncreased type and register_HighestBidIncreased function are bindings code generated by completium CLI:\\n\\n```\\n$ completium-cli generate bindings-ts bid.arl > bid-bindings.ts\\n```\\n\\n### Dapp example\\n\\nThe *Bulb* Dapp example is available [here](https://github.com/completium/bulb-event-demo).\\n\\nThe bulb is switched on/off by receiving events from the bulb contract. The contract is designed as a simplistic state machine with On and Off states. Two events `SwitchedOn` and `SwitchedOff` are defined and emitted respectively by `switchOn` and `switchOff` entrypoints:\\n\\n```archetype\\narchetype bulb\\n\\nstates = | On | Off\\n\\nevent SwitchedOn {}\\n\\nevent SwitchedOff {}\\n\\ntransition switchOn() {\\n  from Off to On\\n  with effect { emit<SwitchedOn>({}) }\\n}\\n\\ntransition switchOff() {\\n  from On to Off\\n  with effect { emit<SwitchedOff>({}) }\\n}\\n```\\n\\nA live bulb demo is available [here](https://completium.github.io/bulb-event-demo/)."},{"id":"welcome","metadata":{"permalink":"/archetype-docs/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"We are delighted to present this new documentation for the Archetype language.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"hello","permalink":"/archetype-docs/blog/tags/hello"},{"label":"docusaurus","permalink":"/archetype-docs/blog/tags/docusaurus"}],"readingTime":0.06,"truncated":false,"authors":[{"name":"Benoit Rognier","title":"CEO Completium","url":"https://www.linkedin.com/in/benoitrognier/","imageURL":"https://media-exp1.licdn.com/dms/image/C4E03AQF04rtSnCch5A/profile-displayphoto-shrink_400_400/0/1517720007405?e=1658966400&v=beta&t=MkbCyKfZt4yuEkvDxxBk_nMUHtDFJsS42zfhcLlHVX4","key":"br"},{"name":"Guillaume Duhamel","title":"CTO Completium","url":"https://www.linkedin.com/in/guillaumeduhamel/","imageURL":"https://media-exp1.licdn.com/dms/image/C4D03AQGxFFOLb-0sew/profile-displayphoto-shrink_400_400/0/1516528565176?e=1658966400&v=beta&t=w8NwuTiiP--EwNxQK57UHYvBGFvcTccj8NTFav5unVo","key":"gd"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["br","gd"],"tags":["hello","docusaurus"]},"prevItem":{"title":"Events","permalink":"/archetype-docs/blog/events"}},"content":"We are delighted to present this new documentation for the [Archetype](https://archetype-lang.org/) language."}]}')}}]);