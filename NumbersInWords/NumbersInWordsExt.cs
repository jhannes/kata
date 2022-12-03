namespace NumbersInWords;
public static class NumbersInWordsExt
{
    private static Dictionary<int, string> numbers = new Dictionary<int, string>() {
        { 1, "en" },
        { 3, "tre" },
        { 4, "fire" },
        { 6, "seks" },
        { 7, "syv" },
        { 9, "ni" },
        { 11, "elleve" },
        { 20, "tjue" },
        { 50, "femti" },
        { 80, "åtti" },
        { 100, "et hundre" },
        { 1000, "et tusen" },
        { 1_000_000, "en million" },
    };

    public static string ToWords(this int n)
    {
        if (numbers.ContainsKey(n)) return numbers[n];

        if (n >= 1_000_000)
        {
            if (n % 1_000_000 == 0) return (n / 1_000_000).ToWords() + " millioner";
            return (n - n % 1_000_000).ToWords() + " " + (n % 1_000_000).ToWords();
        }

        if (n >= 1000)
        {
            if (n % 1000 == 0)
                return (n / 1000).ToWords() + " tusen";
            else if (n % 1000 < 100)
                return (n - n % 1000).ToWords() + " og " + (n % 1000).ToWords();
            else
                return (n - n % 1000).ToWords() + " " + (n % 1000).ToWords();
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

}
