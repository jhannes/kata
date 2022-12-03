namespace NumbersInWords;
public static class NumbersInWordsExt
{
    private static Dictionary<int, string> numbers = new Dictionary<int, string>() {
        { 1, "en" },
        { 4, "fire" },
        { 56, "femtiseks" },
        { 123, "et hundre og tjuetre" },
        { 789, "syv hundre og åttini" },
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
            return (n / 100).ToWords() + " hundre og " + (n % 100).ToWords();
        }

        throw new Exception("Don't know what to do with " + n);
    }

}
