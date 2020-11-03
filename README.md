# is-emojis

A Node.js library to identify strings containing one or multiple emojis only.

## Installation

To use `is-emojis` in your Node.js project, run the following command.

```
npm install is-emojis
```

## Usage

To use `is-emojis` in a file, import it as such:

```
const { isOneEmoji, isMultipleEmoji } = require('is-emojis');
```

If your JavaScript file is part of a module, you can also import it this way:

```
import { isOneEmoji, isMultipleEmoji } from 'is-emojis';
```

`isOneEmoji` and `isMultipleEmoji` are now available as functions. For API details, see the section below.

## API

This library provides two functions to check if a given string is one or multiple emojis.

| Function Name     | Parameters | Return value | Description                                                                                                              |
| ----------------- | ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `isOneEmoji`      | `string`   | `boolean`    | Returns `true` if the provided string is an emoji and no other text, ignoring leading and trailing whitespace.           |
| `isMultipleEmoji` | `string`   | `boolean`    | Returns `true` if the provided string is at least one emoji and no other text, ignoring leading and trailing whitespace. |

## Example

```
isOneEmoji('Hello'); // returns false
isOneEmoji('Hello World'); // returns false
isOneEmoji(''); // returns false
isOneEmoji(1); // returns false
isOneEmoji(null); // returns false
isOneEmoji('😂'); // returns true
isOneEmoji('Hi 😂'); // returns false
isOneEmoji('👩‍👩‍👧‍👧'); // returns true
isOneEmoji('👩‍👩‍👧‍👧👩‍👩‍👧‍👧'); // returns false
isOneEmoji('👩‍👩‍👧‍👧 '); // returns true
isOneEmoji('     👩‍👩‍👧‍👧'); // returns true

isMultipleEmoji('Hello'); // returns false
isMultipleEmoji('Hello World'); // returns false
isMultipleEmoji(''); // returns false
isMultipleEmoji(1); // returns false
isMultipleEmoji(null); // returns false
isMultipleEmoji('😂'); // returns true
isMultipleEmoji('Hi 😂'); // returns false
isMultipleEmoji('👩‍👩‍👧‍👧'); // returns true
isMultipleEmoji('👩‍👩‍👧‍👧👩‍👩‍👧‍👧'); // returns true
isMultipleEmoji('👩‍👩‍👧‍👧 '); // returns true
isMultipleEmoji('     👩‍👩‍👧‍👧'); // returns true
isMultipleEmoji(' 👩‍👩‍👧‍👧    👩‍👩‍👧‍👧'); // returns false
```
