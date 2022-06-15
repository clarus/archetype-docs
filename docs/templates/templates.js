import React from "react"
import Link from '@docusaurus/Link';

import Fa12Transfer from '@site/src/components/desc/fa12_transfer.md'
import Fa12Approve from '@site/src/components/desc/fa12_approve.md'
import Fa12Gettotalsupply from '@site/src/components/desc/fa12_gettotalsupply.md'
import Fa12Getbalance from '@site/src/components/desc/fa12_getbalance.md'
import Fa12Getallowance from '@site/src/components/desc/fa12_getallowance.md'
import Fa12Ledger from '@site/src/components/desc/fa12_ledger.md'
import Fa12Allowance from '@site/src/components/desc/fa12_allowance.md'
import OwnershipOwner from '@site/src/components/desc/ownership_owner.md'
import OwnershipCandidate from '@site/src/components/desc/ownership_candidate.md'
import OwnershipDeclare from '@site/src/components/desc/ownership_declare.md'
import OwnershipClaim from '@site/src/components/desc/ownership_claim.md'
import PausablePaused from '@site/src/components/desc/pausable_paused.md'
import PausablePause from '@site/src/components/desc/pausable_pause.md'
import PausableUnpause from '@site/src/components/desc/pausable_unpause.md'
import PausableIsnotpaused from '@site/src/components/desc/pausable_isnotpaused.md'
import SetMetadata from '@site/src/components/desc/metadata_set.md'

const link_prefix = '/docs/templates/'

export const templates = {
  list: [
    { label : 'FA 1.2', link : link_prefix + 'fa12', desc : <div>Implements <Link to="https://tzip.tezosagora.org/proposal/tzip-7/">TZIP-7</Link> norm for fungible Token</div> },
    { label : 'FA 2', link : link_prefix + 'fa2', desc : <div>Implements <Link to="https://tzip.tezosagora.org/proposal/tzip-12/">TZIP-12</Link> norm for tokens (Non Fungible, Fongible, Multi)</div> },
    { label : 'A 2', link : link_prefix + 'a2', desc : <div>Implements <Link to="https://tzip.tezosagora.org/proposal/tzip-15/">TZIP-15</Link> norm for whitelisting process</div> },
    { label : 'Metadata', link : link_prefix + 'metadata', desc : <div>Implements <Link to="https://tzip.tezosagora.org/proposal/tzip-16/">TZIP-16</Link> norm for contract's metadata</div> },
    { label : 'MultiSig', link : link_prefix + 'multisig', desc : 'Execute operations signed by a required number of managers' },
    { label : 'Pausable', link : link_prefix + 'pausable', desc : "Pausable entrypoints" },
    { label : 'Ownership', link : link_prefix + 'ownership', desc : 'Transferrable contract owner' },
  ],
  fa12: {
    info: {
      repo: 'https://github.com/completium/archetype-fa1',
      author: 'Completium',
      authorurl: 'https://completium.com/',
      norms: [
        { label : 'TZIP4', url: 'https://tzip.tezosagora.org/proposal/tzip-4/' },
        { label : 'TZIP7', url: 'https://tzip.tezosagora.org/proposal/tzip-7/' },
      ]
    },
    transfer: {
      desc: <Fa12Transfer />,
      sig: 'transfer(from, to, value)',
      parameters: [
        {
          type: 'address',
          alias: 'from',
          desc: <div>Sending tokens address</div>
        },
        {
          type: 'address',
          alias: 'to',
          desc: <div>Receiving tokens address</div>
        },
        {
          type: 'nat',
          alias: 'value',
          desc: <div>Number of tokens to transfer</div>
        },
      ],
      fails: [
        {
          keyword: '("ASSET_NOT_FOUND", "ledger")',
          desc: <div>When address <code>from</code> is not found in <Link to="/docs/templates/fa12#ledger"><code>ledger</code></Link></div>
        },
        {
          keyword: 'NotEnoughBalance',
          desc: <div>When number of tokens owned by <code>from</code> is less than <code>value</code></div>
        },
        {
          keyword: '("ASSET_NOT_FOUND", "allowance")',
          desc: <div>When <code>caller</code> is not allowed by <code>from</code> to transfer tokens</div>
        },
        {
          keyword: 'NotEnoughAllowance',
          desc: <div>When <code>caller</code>'s allowed transfer is less than <code>value</code></div>
        }
      ],
      related: [
        { keyword: 'transfer', link: '/docs/reference/instructions/operation#transfer' },
        { keyword: 'ledger', link: '/docs/templates/fa12#ledger' },
        { keyword: 'allowance', link: '/docs/templates/fa12#allowance' },
      ]
    },
    approve: {
      desc: <Fa12Approve />,
      sig: 'approve',
      parameters: [
        {
          type: 'address',
          alias: 'spender',
          desc: <div>Approved address to transfer tokens from <Link to="/docs/reference/expressions/constants#caller"><code>caller</code></Link></div>
        },
        {
          type: 'nat',
          alias: 'value',
          desc: <div>Number of tokens approved for transfer</div>
        },
      ],
      fails: [
        {
          keyword: '("UnsafeAllowanceChange", previous)',
          desc: <div>When <code>spender</code> is already approved a non-zero amount of tokens (<code>previous</code>)</div>
        },
      ],
      related: [
        { keyword: 'allowance', link: '/docs/templates/fa12#allowance' },
      ]
    },
    getallowance: {
      desc: <Fa12Getallowance />,
      sig: 'getallowance',
      parameters: [
        {
          type: 'address',
          alias: 'owner',
          desc: <div>Tokens owner</div>
        },
        {
          type: 'address',
          alias: 'spender',
          desc: <div>Approved address to transfer tokens from <code>owner</code></div>
        },
      ],
      returns: {
        type: 'nat',
        desc: <div>Number of tokens <code>spender</code> can transfer on behalf of <code>owner</code></div>
      }
    },
    getbalance: {
      desc: <Fa12Getbalance />,
      sig: 'getbalance',
      parameters: [
        {
          type: 'address',
          alias: 'owner',
          desc: <div>Tokens owner</div>
        },
      ],
      returns: {
        type: 'nat',
        desc: <div>Number of tokens owned by <code>owner</code></div>
      }
    },
    gettotalsupply: {
      desc: <Fa12Gettotalsupply />,
      sig: 'gettotalsupply',
      returns: {
        type: 'nat',
        desc: <div>Value of <Link to="/docs/templates/fa12#total_supply"><code>total_supply</code></Link></div>
      }
    },
    initialholder: {
      desc: <div>Initial owner of the total supply of tokens</div>,
      type: 'address',
      related: [
        { keyword: 'total_supply', link: '/docs/templates/fa12#total_supply' },
      ],
    },
    totalsupply: {
      desc: <div>Total number of tokens. Note that this value is a constant since there is no <i>mint</i> or <i>burn</i> mechanism in this version.</div>,
      type: 'nat',
      related: [
        { keyword: 'getTotalSupply', link: '/docs/templates/fa12#gettotalsupply' },
      ],
    },
    ledger: {
      desc: <Fa12Ledger />,
      type: 'big_map<address, nat>',
      typeUrl : 'big_map<K,%20V>',
      related: [
        { keyword: 'transfer', link: '/docs/templates/fa12#transferfrom-to-value' },
      ],
    },
    allowance: {
      desc: <Fa12Allowance />,
      type: 'big_map<address * address, nat>',
      typeUrl : 'big_map<K,%20V>',
      related: [
        { keyword: 'transfer', link: '/docs/templates/fa12#transferfrom-to-value' },
        { keyword: 'approve', link: '/docs/templates/fa12#approvespender-value' },
      ],
    }
  },
  fa2: {
    info: {
      repo: 'https://github.com/completium/archetype-fa2',
      author: 'Completium',
      authorurl: 'https://completium.com/',
      norms: [
        { label : 'TZIP-12', url: 'https://tzip.tezosagora.org/proposal/tzip-12/' },
        { label : 'TZIP-16', url: 'https://tzip.tezosagora.org/proposal/tzip-16/' },
        { label : 'TZIP-17', url: 'https://tzip.tezosagora.org/proposal/tzip-17/' },
      ],
      templates: [
        { label : 'Ownership', url: '/docs/templates/ownership' },
        { label : 'Metadata', url: '/docs/templates/metadata' },
        { label : 'Pausable', url: '/docs/templates/pausable' },
      ]
    },
  },
  a2: {
    info: {
      repo: 'https://gitlab.com/tezos-paris-hub/whitelist-smart-contract-archetype',
      author: 'Completium',
      authorurl: 'https://completium.com/',
      norms: [
        { label : 'TZIP-15', url: 'https://tzip.tezosagora.org/proposal/tzip-15/' },
        { label : 'TZIP-16', url: 'https://tzip.tezosagora.org/proposal/tzip-16/' },
      ],
    }
  },
  multisig: {
    info: {
      repo: 'https://github.com/completium/archetype-multisig',
      author: 'Completium',
      authorurl: 'https://completium.com/',
      norms: [
        { label : 'TZIP-16', url: 'https://tzip.tezosagora.org/proposal/tzip-16/' },
      ],
    }
  },
  ownership: {
    info: {
      repo: 'https://github.com/completium/archetype-ownership',
      author: 'Completium',
      authorurl: 'https://completium.com/',
    },
    owner: {
      desc: <OwnershipOwner />,
      type: 'address',
      related: [
        { keyword: 'owner_candidate', link: '/docs/templates/ownership#owner_candidate' },
      ],
    },
    candidate: {
      desc: <OwnershipCandidate />,
      type: 'option<address>',
      typeUrl: 'option<T>',
      related: [
        { keyword: 'owner', link: '/docs/templates/ownership#owner' },
      ],
    },
    declare : {
      desc: <OwnershipDeclare />,
      sig: 'declare_ownership(candidate)',
      parameters: [
        {
          type: 'address',
          alias: 'candidate',
          desc: <div>Candidate address for next contract's owner</div>
        },
      ],
      fails: [
        {
          keyword: '"INVALID_CALLER"',
          desc: <div>When <code>caller</code> is not <code>owner</code></div>
        },
      ],
      related: [
        { keyword: 'owner_candidate', link: '/docs/templates/ownership#owner_candidate' },
      ]
    },
    claim : {
      desc: <OwnershipClaim />,
      sig: 'claim_ownership()',
      parameters: [
      ],
      fails: [
        {
          keyword: '"INVALID_CALLER"',
          desc: <div>When <code>caller</code> is not <code>owner_candidate</code></div>
        },
      ],
      related: [
        { keyword: 'owner_candidate', link: '/docs/templates/ownership#owner_candidate' },
      ]
    }
  },
  pausable: {
    info: {
      repo: 'https://github.com/completium/archetype-pausable',
      author: 'Completium',
      authorurl: 'https://completium.com/',
      templates: [
        { label : 'Ownership', url: '/docs/templates/ownership' },
      ]
    },
    paused: {
      desc: <PausablePaused />,
      type: 'bool',
      related: [
      ],
    },
    pause: {
      desc: <PausablePause />,
      sig: 'pause()',
      parameters: [
      ],
      fails: [
        {
          keyword: '"INVALID_CALLER"',
          desc: <div>When <code>caller</code> is not <code>owner</code></div>
        },
        {
          keyword: '"CONTRACT_PAUSED"',
          desc: <div>When contract is already paused.</div>
        },
      ],
      related: [
        { keyword: 'is_not_paused', link: '/docs/templates/pausable#is_not_paused' },
      ]
    },
    unpause: {
      desc: <PausableUnpause />,
      sig: 'unpause()',
      parameters: [
      ],
      fails: [
        {
          keyword: '"INVALID_CALLER"',
          desc: <div>When <code>caller</code> is not <code>owner</code></div>
        },
        {
          keyword: '"CONTRACT_NOT_PAUSED"',
          desc: <div>When contract is not paused.</div>
        },
      ],
      related: [
        { keyword: 'paused', link: '/docs/templates/pausable#paused' },
      ]
    },
    is_not_paused: {
      desc: <PausableIsnotpaused />,
      sig: 'is_not_paused()',
      parameters: [
      ],
      fails: [
        {
          keyword: '"CONTRACT_PAUSED"',
          desc: <div>When contract is already paused.</div>
        },
      ],
      returns: {
        type: 'bool',
        desc: <div><code>true</code> if contract is not paused</div>
      },
      related: [
        { keyword: 'paused', link: '/docs/templates/pausable#paused' },
      ]
    }
  },
  metadata: {
    info: {
      repo: 'https://github.com/completium/archetype-metadata',
      author: 'Completium',
      authorurl: 'https://completium.com/',
      norms: [
        { label: 'TZIP-16', link: 'https://tzip.tezosagora.org/proposal/tzip-16/' }
      ],
      templates: [
        { label : 'Ownership', url: '/docs/templates/ownership' },
        { label : 'Pausable', url: '/docs/templates/pausable' },
      ]
    },
    set_metadata: {
      desc: <SetMetadata />,
      sig: 'set_metadata(k, v)',
      parameters: [
        {
          type: 'string',
          alias: 'k',
          desc: <div>Medata entry name</div>
        },
        {
          type: 'option<bytes>',
          withLink: false,
          alias: 'v',
          desc: <div>Medata value option:<ul>
            <li><code>some(v)</code> associates <code>v</code> to <code>k</code></li>
            <li><code>none</code> removes entry <code>k</code></li>
          </ul></div>
        },
      ],
      fails: [
        {
          keyword: '"INVALID_CALLER"',
          desc: <div>When <code>caller</code> is not <code>owner</code></div>
        },
        {
          keyword: '"CONTRACT_PAUSED"',
          desc: <div>When contract is already paused.</div>
        },
      ],
      related: [
        { keyword: 'Archetype contract', link: '/docs/reference/declarations/contract#metadata' }
      ]
    },
  },
}