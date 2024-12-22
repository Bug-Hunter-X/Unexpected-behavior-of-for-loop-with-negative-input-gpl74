# TypeScript For Loop Bug

This repository demonstrates a subtle bug related to the behavior of a `for` loop in TypeScript when a negative number is provided as the upper bound.  The provided code intends to print numbers from 1 to `n`, but it fails to handle negative input correctly.

## Bug Description

The `printNumbers` function uses a `for` loop to iterate and print numbers. When a positive integer is passed, it functions as expected. However, when a negative integer is passed, the loop does not execute, resulting in no output. This is unexpected behavior; a more robust solution would handle negative inputs gracefully, perhaps by throwing an error or returning early.

## Bug Solution

The solution involves adding error handling to check for and address negative input values.