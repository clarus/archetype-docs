import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry do_transfer(txs : list<transfer_arg>) {
  called by self_address
  effect {
    for tx in txs do
      const %from = tx.ta_from;
      const tds   = tx.ta_txs;
      for td in tds do begin
        const tokenid = td.token_id_dest;
        do_require(ledger.contains(tokenid), FA2_TOKEN_UNDEFINED);
        do_require(ledger[tokenid].lowner = %from, FA2_INSUFFICIENT_BALANCE);
        ledger.update(tokenid, { lowner = td.to_dest });
      end done
    done
  }
}
```