namespace Minesweeper.Tests;
using Minesweeper;
using FluentAssertions;

public class MinesweeperTest
{
    [Fact(Skip="Not ready for acceptance test yet")]
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
        var input = new string[]
        {
            "."
        };
        var output = new string[]
        {
            "0"
        };
        new Minefield(input).GetHints().Should().Equal(output);
    }
}