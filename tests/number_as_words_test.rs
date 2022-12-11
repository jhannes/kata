use parameterized::parameterized;

#[parameterized(n = {
    1, 2, 3, 20, 21, 34,
    100, 145, 610, 617,
    1000, 1711, 12813,
}, expected={
    "en", "to", "tre", "tjue", "tjueen", "trettifire",
    "et hundre", "et hundre og førtifem", "seks hundre og ti", "seks hundre og sytten",
    "et tusen", "et tusen syv hundre og elleve", "tolv tusen åtte hundre og tretten"
})]
fn test_number_in_words(n: i32, expected: &str) {
    assert_eq!(expected, number_in_words(n));
}

fn number_in_words(n: i32) -> String {
    match base_numbers(n) {
        Some(n) => n.to_string(),
        None => {
            if n > 1000 {
                if n % 1000 == 0 {
                    format!("{} tusen", number_in_words(n / 1000))
                } else {
                    format!("{} {}", number_in_words(n - n%1000), number_in_words(n%1000))
                }
            } else if n > 100 {
                if n % 100 == 0 {
                    format!("{} hundre", number_in_words(n / 100))                
                } else {
                    format!("{} og {}", number_in_words(n - n%100), number_in_words(n%100))
                }
            } else if n > 20 && n % 10 != 0 {
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
        5 => Some("fem"),
        6 => Some("seks"),
        7 => Some("syv"),
        8 => Some("åtte"),
        10 => Some("ti"),
        11 => Some("elleve"),
        12 => Some("tolv"),
        13 => Some("tretten"),
        17 => Some("sytten"),
        20 => Some("tjue"),
        30 => Some("tretti"),
        40 => Some("førti"),
        100 => Some("et hundre"),
        1000 => Some("et tusen"),
        1700 => Some("et tusen syv hundre"),
        _ => None
    }
}
