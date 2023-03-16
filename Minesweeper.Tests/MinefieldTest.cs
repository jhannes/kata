namespace Minefield.Test;
using FluentAssertions;
// using Minefield;

public class MinefieldTest
{

    [Fact]
    public void AcceptanceTest()
    {
        var input = new[]
        {
            "...*.",
            "...*.",
            "**...",
        };
        var hints = new[]
        {
            "002*2",
            "223*2",
            "**211",
        };

        new Minefield(input).CalculateHints()
            .Should().Equal(hints);
    }
    [Fact]
    public void ShouldDisplayEmtyMinefield()
    {
        new Minefield(new[] { "....", "....", "...." }).CalculateHints()
            .Should().Equal(new[] { "0000", "0000", "0000" });
    }
    [Fact]  
    public void ShouldDisplayMines()
    {
        new Minefield(new[] { "****" }).CalculateHints()
            .Should().Equal(new[] { "****" });
    }
    [Fact]  
    public void ShouldDisplayHintsOnRow()
    {
        new Minefield(new[] { ".*." }).CalculateHints()
            .Should().Equal(new[] { "1*1" });
    }
    [Fact]  
    public void ShouldDisplayHintsOnColumn()
    {
        new Minefield(new[] { ".", "*", "." }).CalculateHints()
            .Should().Equal(new[] { "1", "*", "1" });
    }
        [Fact]  
    public void ShouldDisplayHintsAroundMine()
    {
        new Minefield(new[] { "...", ".*.", "..." }).CalculateHints()
            .Should().Equal(new[] { "111", "1*1", "111" });
    }
}