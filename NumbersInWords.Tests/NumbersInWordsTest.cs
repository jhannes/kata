namespace NumbersInWords.Tests;

public class NumbersInWordsTest
{
    [Theory]
    [InlineData(1, "en")]
    [InlineData(1_001_011, "en million et tusen og elleve")]
    [InlineData(13_514_015, "tretten millioner fem hundre og fjorten tusen og femten")]
    [InlineData(2_010_812, "to millioner ti tusen åtte hundre og tolv")]
    [InlineData(16_017_018_019, "seksten milliarder sytten millioner atten tusen og nitten")]
    [InlineData(40_060_070_090, "førti milliarder seksti millioner sytti tusen og nitti")]
    [InlineData(1_030_000_000, "en milliard tretti millioner")]
    [InlineData(123_456_789, "et hundre og tjuetre millioner fire hundre og femtiseks tusen syv hundre og åttini")]
    [InlineData(987_654_321, "ni hundre og åttisyv millioner seks hundre og femtifire tusen tre hundre og tjueen")]
    public void ShouldReturnEnForOne(long number, string expected)
    {
        Assert.Equal(expected, number.ToWords());
    }
}