namespace Minefield;

public class Minefield
{
    private string[] input;

    public Minefield(string[] input)
    {
        this.input = input;
    }

    public string[] CalculateHints()
    {
        var result = new string[input.Length];
        for (int row = 0; row < input.Length; row++)
        {
            result[row] = "";
            for (int col = 0; col < input[row].Length; col++)
            {
                if (CellHasMine(row, col))
                {
                    result[row] += "*";
                }
                else
                {
                    result[row] += CountMines(row, col);
                }
            }
        }
        return result;
    }

    private int CountMines(int row, int col)
    {
        var mines = 0;

        if (CellHasMine(row - 1, col - 1)) mines += 1;
        if (CellHasMine(row - 1, col)) mines += 1;
        if (CellHasMine(row - 1, col + 1)) mines += 1;
        if (CellHasMine(row, col + 1)) mines += 1;
        if (CellHasMine(row, col - 1)) mines += 1;
        if (CellHasMine(row + 1, col - 1)) mines += 1;
        if (CellHasMine(row + 1, col)) mines += 1;
        if (CellHasMine(row + 1, col + 1)) mines += 1;
        return mines;
    }

    private bool CellHasMine(int row, int col)
    {
        if (row < 0 || input.Length <= row) return false;
        if (col < 0 || input[row].Length <= col) return false;
        return input[row][col] == '*';
    }
}