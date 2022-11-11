namespace test
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            Console.WriteLine("\t\t\t\tCalculator");

            Console.Write("Enter your first number - ");
            string numStrOne = Console.ReadLine();
            double numOne;
            while (!double.TryParse(numStrOne, out numOne))
            {
                Console.Write("Try Again: ");
                numStrOne = Console.ReadLine();
            }
            Console.WriteLine($"number one is: {numOne}");
            Console.WriteLine("----------------------------");
            Console.Write("Enter your second number - ");
            string numStrTwo = Console.ReadLine();
            double numTwo;
            while (!double.TryParse(numStrTwo, out numTwo))
            {
                Console.Write("Try Again: ");
                numStrTwo = Console.ReadLine();
            }

            Console.WriteLine($"number two is: {numTwo}");
            Console.WriteLine("----------------------------");

            Console.WriteLine("1. Plus +");
            Console.WriteLine("2. Minus -");
            Console.WriteLine("3. Multiply *");
            Console.WriteLine("4. Divide /");

        tryagain:
            Console.Write("Enter the operation you want to run - ");
            string operation = Console.ReadLine();

            switch (operation)
            {
                case "1":
                    Console.WriteLine(numOne + numTwo);
                    break;
                case "2":
                    Console.WriteLine(numOne - numTwo);
                    break;
                case "3":
                    Console.WriteLine(numOne * numTwo);
                    break;
                case "4":
                    Console.WriteLine(numOne / numTwo);
                    break;
                default:
                    Console.WriteLine("something went wrong!");
                    goto tryagain;
                    break;
            }

        }
    }
}