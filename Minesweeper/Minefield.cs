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
            return new string[]
            {
                "0"
            };
        }
    }
}