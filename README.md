# Kata: Numbers as words

This kata is originally from [codingdojo.org](https://codingdojo.org/kata/NumbersInWords/):

>
> It occurs now and then in real life that people want to write about money,
> especially about a certain amount of money. If it comes to cheques or
> contracts for example some nations have laws that state that you should write
> out the amount in words additionally to the amount in numbers to avoid fraud
> and mistakes. So if you want to transfer 745 $ to someone via cheque you have
> to fill out two fields:
>
> 745.00 $ (amount in numbers)
>
> seven hundred and fourty five dollars (amount in words)
>

### Example assertion

```rust
#[test]
fn test_1_is_en() {
    assert_eq!("en", number_as_words(1));
}
```

## Getting started with a new project in Rust

Install Rust from https://www.rust-lang.org/learn/get-started

1. Create project: `cargo init`
2. Create a test file as `tests/numbers_as_words_test.rs`
3. Run tests `cargo watch -x test`
4. Create a Github Actions file which runs `cargo test`
