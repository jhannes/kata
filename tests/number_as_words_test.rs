use parameterized::parameterized;

#[parameterized(n = {
    1, 2, 3
}, expected={
    "en", "to", "tre"
})]
fn test_number_in_words(n: i32, expected: &str) {
    assert_eq!(expected, number_in_words(n));
}

fn number_in_words(n: i32) -> String {
    match n {
        1 => "en".to_string(),
        2 => "to".to_string(),
        2 => "tre".to_string(),
        _ => panic!("Unknown {}", n)
    }
}
