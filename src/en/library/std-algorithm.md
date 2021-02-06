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

This package implements generic algorithms oriented towards the processing of sequences. Sequences processed by these functions define range-based interfaces. See also Reference on ranges and tutorial on ranges.
Algorithms are categorized into the following submodules:

Many functions in this package are parameterized with a predicate. The predicate may be any suitable callable type (a function, a delegate, a functor, or a lambda), or a compile-time string. The string may consist of any legal D expression that uses the symbol a (for unary functions) or the symbols a and b (for binary functions). These names will NOT interfere with other homonym symbols in user code because they are evaluated in a different context. The default for all binary comparison predicates is "a == b" for unordered operations and "a < b" for ordered operations.

## Example

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