use parameterized::parameterized;

#[parameterized(n = {
    1, 2, 3, 20
}, expected={
    "en", "to", "tre", "tjue"
})]
fn test_number_in_words(n: i32, expected: &str) {
    assert_eq!(expected, number_in_words(n));
}

fn number_in_words(n: i32) -> String {
    match n {
        1 => "en".to_string(),
        2 => "to".to_string(),
        3 => "tre".to_string(),
        20 => "tjue".to_string(),
        _ => panic!("Unknown {}", n)
    }
}

fn base_numbers(n: i32) -> Option<&'static str> {
    match n {
        1 => Some("en"),
        2 => Some("to"),
        3 => Some("tre"),
        20 => Some("tjue"),
        _ => None()
    }
}
