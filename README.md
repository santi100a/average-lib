# Santi's Advanced Averaging Library

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
import average = require('@santi100/average-lib'); // TypeScript
import average from '@santi100/average-lib'; // ESM
const average = require('@santi100/average-lib'); // CJS

// Example usage of the average function
const numbers: number[] = [1, 2, 3, 4, 5];
const avg: number = average(numbers);

console.log(`The average of ${numbers} is: ${avg}`);
```
