namespace NumbersInWords.Tests;

public class NumbersInWordsTest
{
    [Theory]
    [InlineData(1, "en")]
    [InlineData(1_001_011, "en million et tusen og elleve")]
    [InlineData(13_514_015, "tretten millioner fem hundre og fjorten tusen og femten")]
    [InlineData(2_010_812, "to millioner ti tusen åtte hundre og tolv")]
    [InlineData(123_456_789, "et hundre og tjuetre millioner fire hundre og femtiseks tusen syv hundre og åttini")]
    [InlineData(987_654_321, "ni hundre og åttisyv millioner seks hundre og femtifire tusen tre hundre og tjueen")]
    public void ShouldReturnEnForOne(int number, string expected)
    {
        Assert.Equal(expected, number.ToWords());
    }
}