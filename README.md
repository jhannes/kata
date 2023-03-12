# Kata: Minesweeper minefield

The description of this kata is taken from [codingdojo.org](https://codingdojo.org/kata/Minesweeper/):

>
> Have you ever played Minesweeper? It’s a cute little game which comes within
> a certain Operating System whose name we can’t really remember. Well, the 
> goal of the game is to find all the mines within an MxN field. To help you, 
> the game shows a number in a square which tells you how many mines there are
> adjacent to that square. For instance, take the following 4x4 field with 2 
> mines (which are represented by an * character):
>
```
*...
....
.*..
....
```
>
> The same field including the hint numbers described above would look like this:
>

```
*100
2210
1*10
1110
```

You should take a program that takes as input a description of the field with mines
and that produces as output the mine field with the hint numbers.

## Getting started with a simple test driven project in C#

This instruction creates a solution which runs tests automatically from the command line
using [XUnit](https://xunit.net/) and [FluentAssertions](https://fluentassertions.com/)

Download [dotnet SDK](https://dotnet.microsoft.com/en-us/download) and [Visual Studio Code](https://code.visualstudio.com/).

1. `dotnet new sln`
2. `dotnet new classlib -o Minesweeper`
3. `dotnet sln add Minesweeper`
4. `dotnet new xunit -o Minesweeper.Tests`
5. `dotnet sln add Minesweeper.Tests`
6. `cd Minesweeper.Tests`
7. `dotnet add reference ../Minesweeper`
8. `dotnet add package FluentAssertions`
9. `dotnet watch test`

### Example initial test:

```csharp
namespace Minesweeper.Tests;
using FluentAssertions;

public class MinefieldTest
{
    [Fact]
    public void ShouldShowEmptyFields()
    {
        new Minefield(new [] { "." }).CalculateHints()
            .Should().Equal(new [] { "0" });
    }
}
```

