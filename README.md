# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sabrina.yw/lotide`

**Require it:**

`const _ = require('@sabrina.yw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns first element of given array, or undefined if empty array
* `tail(array)`: Returns all elements of array except first. Arrays with one element or an empty array return an empty array.
* `middle(array)`: Returns the middle value(s) of given array, returns empty array if given array of length 1 or 2
* `countLetters(string)`: Takes sentence as string, returns count of each of the letters in sentence (as object)
* `countOnly(array, object)`: Returns an object containing counts of everything that input object lists
* `findKey(object, callback)`: Returns first key in object for which callback returns a truthy value. Return undefined if no key found.
* `findKeyByValue(object, value)`: Takes object and value, scans object and returns first key which contains given value. Return undefined if no key with given value found.
* `flatten(array)`: Returns flattened single-level array
* `letterPositions(string)`: Returns all indices in string where each character is found (as object)
* `map(array, callback)`: Returns new array based on results of callback function
* `takeUntil(array, callback)`: Returns slice of given array with elements taken from beginning until callback returns truthy value
* `without(array, element)`: Returns subset of given array, removing unwanted elements
* `eqArrays(array1, array2)`: Returns true if arrays are the same
* `eqObjects(obj1, obj2)`: Returns true if objects are the same