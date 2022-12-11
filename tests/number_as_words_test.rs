use parameterized::parameterized;

#[parameterized(n = {
    1, 2, 3, 20, 21
}, expected={
    "en", "to", "tre", "tjue", "tjueen"
})]
fn test_number_in_words(n: i32, expected: &str) {
    assert_eq!(expected, number_in_words(n));
}

fn number_in_words(n: i32) -> String {
    match base_numbers(n) {
        Some(n) => n.to_string(),
        None => {
            if n > 20 {
                format!("{}{}", number_in_words(n - n%10), number_in_words(n%10))
            } else {
                panic!("Unknown {}", n)
            }
        }
    }
}

fn base_numbers(n: i32) -> Option<&'static str> {
    match n {
        1 => Some("en"),
        2 => Some("to"),
        3 => Some("tre"),
        20 => Some("tjue"),
        _ => None
    }
}
