# Santi's Small Summation Library

[![Build Status](https://github.com/santi100a/average-lib/actions/workflows/ci.yml/badge.svg)](https://github.com/santi100a/average-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/average-lib)](https://npmjs.org/package/@santi100/average-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/average-lib.svg)](https://github.com/santi100a/average-lib)
[![License](https://img.shields.io/github/license/santi100a/average-lib.svg)](https://github.com/santi100a/average-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/average-lib)](https://bundlephobia.com/package/@santi100/average-lib@latest)

- 📘 Comes with built-in TypeScript definitions
- 🚀 Lightweight and fast
- 👴 Compliant with ECMAScript 3

## API

- `function average(array: number[]): number;` Finds the average of an array of numbers.

  | Name | Type | Description | Optional? |
  |------|------|-------------|-----------|
  | `array` | `number[]` | The array whose average is to be calculated. | No |

## Usage

```typescript
import sum from '@santi100/average-lib'; // ESM
const sum = require('@santi100/average-lib'); // CJS

// Example 1: Summing up numbers in an array
const arr = [1, 2, 3, 4, 5];
const result1 = sum(arr);
console.log(result1); // Output: 15

// Example 2: Summing up numbers in a range with a step
const fn = (n: number) => 1 / n;
const start = 1;
const end = 5;
const step = 2;
const result2 = sum(fn, start, end, step);
console.log(result2); // Output: 1.5333333333333332
```
