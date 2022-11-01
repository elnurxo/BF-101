using System;

namespace _1NovemberClassWork
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //string name = "";
            //do
            //{
            //    Console.Write("Enter your name: ");
            //    name = Console.ReadLine();
            //} while (name!="Elnur");
            //do
            //{
            //    Console.Write("Enter your name: ");
            //    name = Console.ReadLine();

            //    if (name=="Elnur")
            //    {
            //        Console.WriteLine("Welcome!");
            //    }
            //} while (name!="Elnur");


            //while (name!="Elnur")
            //{
            //    Console.Write("Enter your name: ");
            //    name = Console.ReadLine();

            //    if (name == "Elnur")
            //    {
            //        Console.WriteLine("Welcome!");
            //    }
            //}


            //string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };

            //string[] cars2 = { "BMW", "Volvo", "Ford", "Mazda" };

            //string temp = cars2[0];

            //cars2[0] = cars2[1];

            //cars2[1] = temp;

            //for (int i = 0; i < cars2.Length; i++)
            //{
            //    Console.WriteLine(cars2[i]);
            //}


            //if (cars==cars2)
            //{
            //    Console.WriteLine(true);
            //}
            //else
            //{
            //    Console.WriteLine(false);
            //}

            //if (cars.Length == cars2.Length)
            //{
            //    Console.WriteLine(true);
            //}
            //else
            //{
            //    Console.WriteLine(false);
            //}


            //int count = 0;
            //for (int i = 0; i < cars.Length; i++)
            //{
            //    for (int j = 0; j < cars2.Length; j++)
            //    {
            //        if (cars[i] == cars2[j])
            //        {
            //            count++;
            //        }
            //    }
            //}
            //Console.WriteLine("count: "+count);


            //int num4 = 134267, tekcem = 0, cutcem = 0, hasil, k, say = 0;

            //while (num4 > 0)
            //{

            //    k = num4 % 10;
            //    say++;
            //    if (say % 2 == 0)
            //    {
            //        cutcem += k;
            //     }
            //    else
            //    {
            //        tekcem += k;
            //     }
            //    num4 = (num4 - num4 % 10) / 10;
            //}
            //hasil = tekcem * cutcem;
            //Console.WriteLine("hasil: "+hasil);



            #region Weekdays - switch case
            //number daxil olunur. eger 1 olsa Monday ve saire kimi. Eger invalid input olsa
            //(meselen 8 olsa console-a invalid input yazdirsin)

            int weekDay = 1;


            switch (weekDay)
            {
                case 1:
                    Console.WriteLine("Monday");
                    break;
                default:
                    Console.WriteLine("invalid input");
                    break;
            }

            Console.WriteLine("invalid input");

            #endregion
        }
    }
}