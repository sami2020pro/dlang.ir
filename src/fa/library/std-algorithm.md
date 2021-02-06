---
sidebar: auto
meta:
  keywords:
    - Dlang
    - D
  description:
    content: Article on TypeScript
---

# std.algorithm

این پکیج خوبی هست.

## مثال

```
int[] a = ...;
static bool greater(int a, int b)
{
    return a > b;
}
sort!greater(a);           // predicate as alias
sort!((a, b) => a > b)(a); // predicate as a lambda.
sort!"a > b"(a);           // predicate as string
                           // (no ambiguity with array name)
sort(a);                   // no predicate, "a < b" is implicit
```