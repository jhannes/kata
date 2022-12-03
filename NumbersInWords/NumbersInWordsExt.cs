namespace NumbersInWords;
public static class NumbersInWordsExt
{
    private static Dictionary<int, string> numbers = new Dictionary<int, string>() {
        { 1, "en" },
        { 123_456_789, "et hundre og tjuetre millioner fire hundre og femtiseks tusen syv hundre og åttini" }
    };

    public static string ToWords(this int n)
    {
        if (numbers.ContainsKey(n)) return numbers[n];

        throw new Exception("Don't know what to do with " + n);
    }

}
