# Kata: Numbers as words

This kata is originally from [codingdojo.org](https://codingdojo.org/kata/NumbersInWords/):

>
> It occurs now and then in real life that people want to write about money,
> especially about a certain amount of money. If it comes to cheques or
> contracts for example some nations have laws that state that you should write
> out the amount in words additionally to the amount in numbers to avoid fraud
> and mistakes. So if you want to transfer 745 $ to someone via cheque you have
> to fill out two fields:
>
> 745.00 $ (amount in numbers)
>
> seven hundred and fourty five dollars (amount in words)
>

### Example assertion (using extension methods)

```csharp
    public void ShouldTranslateOne()
    {
        Assert.Equal("en", 1.ToWords());
    }
```

## Getting started with a new project

Download [dotnet SDK](https://dotnet.microsoft.com/en-us/download) and [Visual Studio Code](https://code.visualstudio.com/).

1. `dotnet new sln`
2. `dotnet new classlib -o NumbersInWords`
3. `dotnet sln add NumbersInWords`
4. `dotnet new xunit -o NumbersInWords.Tests`
5. `dotnet sln add NumbersInWords.Tests`
6. `cd NumbersInWords.Tests`
7. `dotnet add reference ../NumbersInWords`
8. `dotnet watch test`


