# Coding exercises for teaching programmering skills


## Number as words

Translate from integers to words in a chosen language. E.g.
`number_as_words(1028) => "one thousand and twenty eight"`

### C#

* [Instructions](https://github.com/jhannes/kata/tree/csharp/number-in-words/description)
* [Starting point](https://github.com/jhannes/kata/tree/csharp/number-in-words/start)
* [Example solution](https://github.com/jhannes/kata/tree/csharp/number-in-words/1) ([commit log](https://github.com/jhannes/kata/commits/csharp/number-in-words/1))

### Rust

* [Instructions](https://github.com/jhannes/kata/tree/rust/number-in-words/description)
* [Starting point](https://github.com/jhannes/kata/tree/rust/number-in-words/start)
* [Example solution](https://github.com/jhannes/kata/tree/rust/number-in-words/2) ([commit log](https://github.com/jhannes/kata/commits/rust/number-in-words/2))

## Translate messages

Translate messages with different arguments to different user languages.
E.g. `showMessage(english, { code: "illegalEmail", email: "foo-at-bar.com" })`
should return `"The email address foo-at-bar.com is formatted invalid"`

### Typescript

This exercise lends itself very well to Typescript with the concept of discriminated unions.

* [Instructions](https://github.com/jhannes/kata/tree/typescript/translate-messages/description)
* [Starting point](https://github.com/jhannes/kata/tree/typescript/translate-messages/start)
* [Example solution](https://github.com/jhannes/kata/tree/typescript/translate-messages/1) ([commit log](https://github.com/jhannes/kata/commits/typescript/translate-messages/1))

## Minesweeper

Based on the simple computer game minesweeper. Given a field with mines placed,
calculate the hints to show players.

This exercise requires some data structures, looping and conditional logic
without conceptual complexity.

### Java

* [Example solution](https://github.com/jhannes/kata/tree/java/minesweeper/1) ([commit log](https://github.com/jhannes/kata/commits/java/minesweeper/1))
* [Performance at Høyskolen Kristiania](https://github.com/jhannes/kata/commits/java/minesweeper/performance/2022M08-kristiania)

### C#

* [Starting point](https://github.com/jhannes/kata/tree/csharp/minesweeper/start)
* [Performance at Digitalkonferansen](https://github.com/jhannes/kata/tree/csharp/minesweeper/performance/2023-M03-digitalkonferansen)

