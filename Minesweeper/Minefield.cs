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
            for (int i = 0; i < result.Length; i++)
            {
                result[i] = "0";
            }
            return result;
        }
    }
}