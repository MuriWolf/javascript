using System;

namespace ConsoleApplication1
{
    class Program
    {
        static void pain(int p)
        {
            Console.WriteLine("funcionou"+p);
        }

        static void Main(string[] args)
        {
            pain(10);
            int num = 2;
            Console.WriteLine(num);
            Console.ReadKey();
        }
    }
}