namespace NumbersInWords.Tests;

public class NumbersInWordsTest
{
    [Fact]
    public void ShouldReturnEnForOne()
    {
        Assert.Equal("en", 1.ToWords());
    }
}