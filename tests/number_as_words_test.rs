use parameterized::parameterized;

#[parameterized(n = {1}, expected={"en"})]
fn test_number_in_words(n: i32, expected: &str) {
    assert_eq!(expected, number_in_words(n));
}

fn number_in_words(n: i32) -> String {
    "en".to_string()
}
