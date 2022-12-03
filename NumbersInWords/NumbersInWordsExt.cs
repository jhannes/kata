namespace NumbersInWords;
public static class NumbersInWordsExt
{
    private static Dictionary<long, string> numbers = new Dictionary<long, string>() {
        { 1, "en" },
        { 2, "to" },
        { 3, "tre" },
        { 4, "fire" },
        { 5, "fem" },
        { 6, "seks" },
        { 7, "syv" },
        { 8, "åtte" },
        { 9, "ni" },
        { 10, "ti" },
        { 11, "elleve" },
        { 12, "tolv" },
        { 13, "tretten" },
        { 14, "fjorten" },
        { 15, "femten" },
        { 16, "seksten" },
        { 17, "sytten" },
        { 18, "atten" },
        { 19, "nitten" },
        { 20, "tjue" },
        { 30, "tretti" },
        { 40, "førti" },
        { 50, "femti" },
        { 60, "seksti" },
        { 70, "sytti" },
        { 80, "åtti" },
        { 90, "nitti" },
        { 100, "et hundre" },
        { 1000, "et tusen" },
        { 1_000_000, "en million" },
        { 1_000_000_000, "en milliard" },
    };

    public static string ToWords(this long n)
    {
        if (numbers.ContainsKey(n)) return numbers[n];

        if (n >= 1_000_000_000)
        {
            if (n % 1_000_000_000 == 0) return (n / 1_000_000_000).ToWords() + " milliarder";
            else if (n % 1_000_000_000 < 100)
                return (n - n % 1_000_000_000).ToWords() + " og " + (n % 1_000_000_000).ToWords();
            return (n - n % 1_000_000_000).ToWords() + " " + (n % 1_000_000_000).ToWords();
        }

        if (n >= 1_000_000)
        {
            if (n % 1_000_000 == 0) return (n / 1_000_000).ToWords() + " millioner";
            return (n - n % 1_000_000).ToWords() + " " + (n % 1_000_000).ToWords();
        }

        if (n >= 1000)
        {
            return SplitLargeNumber(n, 1000, "tusen");
        }

        if (n >= 100)
        {
            if (n % 100 == 0) return (n / 100).ToWords() + " hundre";
            return (n - n % 100).ToWords() + " og " + (n % 100).ToWords();
        }
        if (n >= 20)
        {
            return numbers[(n - n % 10)] + numbers[(n % 10)];
        }

        throw new Exception("Don't know what to do with " + n);
    }

    private static string SplitLargeNumber(long n, long value, string name)
    {
        if (n % value == 0)
            return (n/value).ToWords() + " " + name;
        if (n % value < 100)
            return (n - n % value).ToWords() + " og " + (n % value).ToWords();
        else
            return (n - n % value).ToWords() + " " + (n % value).ToWords();
    }
}
