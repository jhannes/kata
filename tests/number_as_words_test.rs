use parameterized::parameterized;

#[parameterized(n = {
    1, 2, 3, 20, 21, 34,
    100, 145, 610, 617,
    1000, 1711, 12813,
    14015,
}, expected={
    "en", "to", "tre", "tjue", "tjueen", "trettifire",
    "et hundre", "et hundre og førtifem", "seks hundre og ti", "seks hundre og sytten",
    "et tusen", "et tusen syv hundre og elleve", "tolv tusen åtte hundre og tretten",
    "fjorten tusen og femten"
})]
fn test_number_in_words(n: i32, expected: &str) {
    assert_eq!(expected, numbers::number_in_words(n));
}

