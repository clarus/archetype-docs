[NEW] Extracts some value from optional value `o` and fails with `s` if `o` is none. It is equivalent to the following expression:
```archetype
match o with
| some(v) -> v
| none -> fail(s)
end
```