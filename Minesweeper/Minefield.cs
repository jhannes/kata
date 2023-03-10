namespace Minesweeper
{
    public class Minefield
    {
        private string[] input;

        public Minefield(string[] input)
        {
            this.input = input;
        }

        public string[] GetHints()
        {
            var result = new String[input.Length];
            for (int row = 0; row < result.Length; row++)
            {
                result[row] = "";
                for (int column = 0; column < input[row].Length; column++)
                {
                    if (CellIsMine(row, column))
                    {
                        result[row] += "*";
                    }
                    else
                    {
                        var hint = 0;
                        if (CellIsMine(row, column+1)) hint++;
                        if (CellIsMine(row, column-1)) hint++;
                        result[row] += hint;
                    }
                }
            }
            return result;
        }

        private bool CellIsMine(int row, int column)
        {
            if (column < 0 || input[row].Length <= column) return false;
            return input[row][column] == '*';
        }
    }
}