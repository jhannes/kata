namespace Minesweeper.Tests;
using Minesweeper;
using FluentAssertions;

public class MinesweeperTest
{
    [Fact]
    void AcceptanceTest()
    {
        var input = new string[]
        {
            "...*",
            "...*",
            "....",
            "***.",
            "....",
            "....",
        };
        var output = new string[]
        {
            "002*",
            "002*",
            "2332",
            "***1",
            "2321",
            "0000",
        };
        new Minefield(input).GetHints().Should().Equal(output);
    }

    [Fact]
    void ShouldDisplayEmptyBoard()
    {
        new Minefield(new string[] { "." }).GetHints()
            .Should().Equal(new string[] { "0" });
    }

    [Fact]
    void ShouldReturnCorrectMinefieldShape()
    {
        new Minefield(new string[] { "....", "....", "...." }).GetHints()
            .Should().Equal(new string[] { "0000", "0000", "0000" });
    }

    [Fact]
    void ShouldShowMines()
    {
        new Minefield(new string[] { "***" }).GetHints()
            .Should().Equal(new string[] { "***" });
    }

    [Fact]
    void ShouldShowHint()
    {
        new Minefield(new string[] { "...", ".*.", "..." }).GetHints()
            .Should().Equal(new string[] { "111", "1*1", "111" });
    }

    [Fact]
    void ShouldShowHintsOnSameColumn()
    {
        new Minefield(new string[] { ".", "*", "." }).GetHints()
            .Should().Equal(new string[] { "1","*", "1" });
    }
}