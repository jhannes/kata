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
                    result[row] += "0";
                }
            }
            return result;
        }
    }
}