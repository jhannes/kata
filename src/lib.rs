
pub fn number_in_words(n: i64) -> String {
    match basic_number(n) {
        Some(s) => s.to_string(),
        None => {
            if n > 1_000_000_00 {
                large_number(n, 1_000_000_000, "milliarder")
            } else if n > 1_000_000 {
                large_number(n, 1_000_000, "millioner")
            } else if n > 1000 {
                large_number(n, 1000, "tusen")
            } else if n > 100 {
                large_number(n, 100, "hundre")
            } else if n > 20 && n % 10 != 0 {
                format!("{}{}", number_in_words(n - (n % 10)), number_in_words(n % 10))
            } else {
                panic!("Don't know what to do with {}", n)
            }
        }
    }
}

fn large_number(n: i64, limit: i64, s: &str) -> String {
    if n % limit == 0 {
        format!("{} {}", number_in_words(n / limit), s)
    } else if n % limit < 100 {
        format!("{} og {}", number_in_words(n - (n % limit)), number_in_words(n % limit))
    } else {
        format!("{} {}", number_in_words(n - (n % limit)), number_in_words(n % limit))
    }
}

fn basic_number(n: i64) -> Option<&'static str> {
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
        100 => Some("et hundre"),
        1000 => Some("et tusen"),
        1_000_000 => Some("en million"),
        1_000_000_000 => Some("en milliard"),
        _ => None,
    }
}