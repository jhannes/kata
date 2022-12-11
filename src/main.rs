fn main() {
    if std::env::args().count() < 2 {
        panic!("Must provide numbers to convert to words");
    }
    for argument in std::env::args().skip(1) {
        println!("{}", kata::number_in_words(argument.parse::<i64>().unwrap()));
    }
}
