namespace NumbersInWords.Tests;

public class NumbersInWordsTest
{
    [Theory]
    [InlineData(1, "en")]
    public void ShouldReturnEnForOne(int number, string expected)
    {
        Assert.Equal(expected, number.ToWords());
    }
}