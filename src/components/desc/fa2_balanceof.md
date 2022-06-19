import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record balance_of_request {
  bo_owner : address;
  btoken_id : nat;
} as ((owner, token_id))

record balance_of_response {
  request : balance_of_request;
  balance_ : nat;
} as ((request, balance))

getter balance_of (requests : list<balance_of_request>) : list<balance_of_response> {
  return map(requests, br -> {
    request = br;
    balance_ = (ledger[br.btoken_id] ? (the.lowner = br.bo_owner ? 1 : 0) : 0)
  })
}
```