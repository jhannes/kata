namespace NumbersInWords;
public static class NumbersInWordsExt
{
    private static Dictionary<int, string> numbers = new Dictionary<int, string>() {
        { 1, "en" },
        { 3, "tre" },
        { 4, "fire" },
        { 7, "syv" },
        { 20, "tjue" },
        { 56, "femtiseks" },
        { 89, "åttini" },
        { 100, "et hundre" },
    };

    public static string ToWords(this int n)
    {
        if (numbers.ContainsKey(n)) return numbers[n];

        if (n >= 1_000_000)
        {
            return (n / 1_000_000).ToWords() + " millioner " + (n % 1_000_000).ToWords();
        }

        if (n >= 1000)
        {
            return (n / 1000).ToWords() + " tusen " + (n % 1000).ToWords();
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
