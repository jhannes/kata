use parameterized::parameterized;

#[parameterized(n = {
    1, 2, 3, 20, 21, 34,
    100, 145
}, expected={
    "en", "to", "tre", "tjue", "tjueen", "trettifire",
    "et hundre", "et hundre og førtifem"
})]
fn test_number_in_words(n: i32, expected: &str) {
    assert_eq!(expected, number_in_words(n));
}

fn number_in_words(n: i32) -> String {
    match base_numbers(n) {
        Some(n) => n.to_string(),
        None => {
            if n > 20 && n % 10 != 0 {
                format!("{}{}", number_in_words(n - n%10), number_in_words(n%10))
            } else {
                panic!("Don't know how to translate number {}", n)
            }
        }
    }
}

fn base_numbers(n: i32) -> Option<&'static str> {
    match n {
        1 => Some("en"),
        2 => Some("to"),
        3 => Some("tre"),
        4 => Some("fire"),
        20 => Some("tjue"),
        30 => Some("tretti"),
        100 => Some("et hundre"),
        _ => None
    }
}
