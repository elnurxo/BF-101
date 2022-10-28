using System;

namespace _28Oct
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Task 1
            //int num1 = -7;
            //int num2 = -3;
            //int num3 = -10;
            //int num4 = -3;
            //int sum = 0;
            //int count = 0;
            //int avg = 0;

            //if (num1 > 0)
            //{
            //    count++;
            //    sum += num1;
            //}
            //if (num2 > 0)
            //{
            //    count++;
            //    sum += num2;
            //}
            //if (num3 > 0)
            //{
            //    count++;
            //    sum += num3;
            //}
            //if (num4 > 0)
            //{
            //    count++;
            //    sum += num4;
            //}
            //if (num1<0 && num2 <0 && num3<0 && num4<0)
            //{
            //    Console.WriteLine("cannot divide by zero, all the numbers are negative!");
            //}
            //else
            //{
            //    avg = sum / count;
            //    Console.WriteLine($"Average of positive numbers are: {avg}");
            //}
            #endregion


            #region HomeWorks
            int  num2, num3, num4,num5;
            int num1 = 6789;
            num2 = num1 / 10;
            num3 = num2 / 10;
            num4 = num3 / 10;
            num5 = (num1 % 10) * 1000 + (num2 % 10) * 100 + (num3 % 10) * 10 + num4;
            Console.WriteLine(num5);
            #endregion
        }
    }
}
