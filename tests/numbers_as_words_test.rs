#[cfg(test)]
mod tests {
    use kata::number_in_words;
    use parameterized::parameterized;

    #[parameterized(
        x = { 1, 2, 3 },
        y = { 4, 5, 6 },
        case_name = { "add_one", "add_two", "add_three" }
    )]
    fn test_add(x: i32, y: i32) {
        assert_eq!(x + y, x + y);
    }
    
    #[parameterized(
        number =   {
            1,   2,   3, 20, 21, 30, 34,
            10, 11, 16,
            100, 144, 255,
            1667, 2014,
            1_000_017, 12_013_015,
            1_000_000_070, 8_009_018_019
        },
        expected = {
            "en", "to", "tre", "tjue", "tjueen", "tretti", "trettifire",
            "ti", "elleve", "seksten",
            "et hundre", "et hundre og førtifire", "to hundre og femtifem",
            "et tusen seks hundre og sekstisyv", "to tusen og fjorten",
            "en million og sytten", "tolv millioner tretten tusen og femten",
            "en milliard og sytti", "åtte milliarder ni millioner atten tusen og nitten"
        },
    )]
    fn test_function(number: i64, expected: &str) {
        assert_eq!(number_in_words(number), expected);
    }    
}
