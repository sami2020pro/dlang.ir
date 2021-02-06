---
sidebar: auto
meta:
  keywords:
    - Dlang
    - D
  description:
    content: Article on TypeScript
---

# Library

[Phobos](https://dlang.org/phobos/index.html) Runtime Library
Phobos is the standard runtime library that comes with the D language compiler.

Generally, the std namespace is used for the main modules in the Phobos standard library. The etc namespace is used for external C/C++ library bindings. The core namespace is used for low-level D runtime functions.

The following table is a quick reference guide for which Phobos modules to use for a given category of functionality. Note that some modules may appear in more than one category, as some Phobos modules are quite generic and can be applied in a variety of situations.

| Modules       | Description          
| ------------- |:-------------:| 
| std.algorithm | this package implements generic algorithms oriented towards the processing of sequences. Sequences processed by these functions define range-based interfaces. See also Reference on ranges and tutorial on ranges. 
| std.range      | This module defines the notion of a range     |
| std.range.primitives | It defines the bidirectional and forward range primitives for arrays: empty, front, back, popFront, popBack and save.      |
| std.range.interfaces | The main std.range module provides template-based tools for working with ranges, but sometimes an object-based interface for ranges is needed, such as when runtime polymorphism is required.  |