namespace NumbersInWords.Tests;

public class NumbersInWordsTest
{
    [Theory]
    [InlineData(1, "en")]
    [InlineData(123_456_789, "et hundre og tjuetre millioner fire hundre og femtiseks tusen syv hundre og åttini")]
    public void ShouldReturnEnForOne(int number, string expected)
    {
        Assert.Equal(expected, number.ToWords());
    }
}