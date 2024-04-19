# Coding exercises for practicing programming skills


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

## Starting points

### C# with dotnet core

Download [dotnet SDK](https://dotnet.microsoft.com/en-us/download) and [Visual Studio Code](https://code.visualstudio.com/).

<details>

1. `dotnet new sln` (In a new empty directory)
2. `dotnet new classlib -o <project>`
3. `dotnet sln add <project>`
4. `dotnet new xunit -o <project>.Tests`
5. `dotnet sln add <project>.Tests`
6. `cd <project>.Tests`
7. `dotnet add reference ../<project>`
8. `dotnet watch test`

</details>

### Jest with Typescript

Install [NodeJs](https://nodejs.org/)

<details>

1. `npm init -y` (In a new empty directory)
2. `npm install --save-dev typescript jest ts-jest @types/jest prettier`
3. `npx tsc --init`
4. `npx ts-jest config:init`
5. `npm pkg set scripts.test="jest"`
6. `npm pkg set scripts.test:watch="jest --watchAll"`
7. Create `__tests__/<...>.test.ts` with `describe("...", () => { it("...", () => {})})`
8. `npm run test:watch`

</details>

### Jest with JavaScript

Install [NodeJs](https://nodejs.org/)

<details>

1. `npm init -y` (In a new empty directory)
2. `npm install --save-dev jest @types/jest prettier`
3. `npm pkg set scripts.test="jest"`
4. Create `__tests__/<...>.test.js` with `describe("...", () => { it("...", () => {})})`
5. `npm run test -- --watch`

</details>

### Rust

Install Rust from https://www.rust-lang.org/learn/get-started

<details>

1. Create project: `cargo init` (In a new empty directory)
2. Create a test file as tests/..._test.rs
3. Run tests `cargo watch -x test`

</details>
