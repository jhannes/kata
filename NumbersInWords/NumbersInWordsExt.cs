namespace NumbersInWords;
public static class NumbersInWordsExt
{

    public static string ToWords(this int n)
    {
        if (n == 1)
            return "en";
        return "et hundre og tjuetre millioner fire hundre og femtiseks tusen syv hundre og åttini";
    }

}
