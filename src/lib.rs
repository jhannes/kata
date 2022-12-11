pub fn number_in_words(n: i64) -> String {
    match base_numbers(n) {
        Some(n) => n.to_string(),
        None => {
            if n > 1_000_000_000 {
                larger_numbers(n, 1_000_000_000, "milliarder")
            } else if n > 1_000_000 {
                larger_numbers(n, 1_000_000, "millioner")
            } else if n > 1000 {
                larger_numbers(n, 1000, "tusen")
            } else if n > 100 {
                larger_numbers(n, 100, "hundre")
            } else if n > 20 && n % 10 != 0 {
                format!("{}{}", number_in_words(n - n%10), number_in_words(n%10))
            } else {
                panic!("Don't know how to translate number {}", n)
            }
        }
    }
}

fn larger_numbers(n: i64, divisor: i64, s: &str) -> String {
    let rest = n % divisor;
    if rest == 0 {
        format!("{} {}", number_in_words(n / divisor), s)
    } else if rest < 100 {
        format!("{} og {}", number_in_words(n - rest), number_in_words(rest))
    } else {
        format!("{} {}", number_in_words(n - rest), number_in_words(rest))
    }
}

fn base_numbers(n: i64) -> Option<&'static str> {
    match n {
        1 => Some("en"),
        2 => Some("to"),
        3 => Some("tre"),
        4 => Some("fire"),
        5 => Some("fem"),
        6 => Some("seks"),
        7 => Some("syv"),
        8 => Some("åtte"),
        9 => Some("ni"),
        10 => Some("ti"),
        11 => Some("elleve"),
        12 => Some("tolv"),
        13 => Some("tretten"),
        14 => Some("fjorten"),
        15 => Some("femten"),
        16 => Some("seksten"),
        17 => Some("sytten"),
        18 => Some("atten"),
        19 => Some("nitten"),
        20 => Some("tjue"),
        30 => Some("tretti"),
        40 => Some("førti"),
        50 => Some("femti"),
        60 => Some("seksti"),
        70 => Some("sytti"),
        80 => Some("åtti"),
        90 => Some("nitti"),
        100 => Some("et hundre"),
        1000 => Some("et tusen"),
        1700 => Some("et tusen syv hundre"),
        1_000_000 => Some("en million"),
        1_000_000_000 => Some("en milliard"),
        _ => None
    }
}