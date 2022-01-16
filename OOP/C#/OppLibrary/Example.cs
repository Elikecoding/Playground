using System;
namespace OppLibrary
{

  //Use private contructors for classes that will only have 1 instance
  public class Example
  {
    private static int Counter;
    private Example()
    {
      Counter = 0;
    }
    //Static contructor
    static Example()
    {
      Counter = 100;
    }
    //Public constructor of external instanciation
    public Example(int counter)
    {
      Counter = Counter + counter;
    }
    public static int GetCounter()
    {
      return ++Counter;
    }
    public class Nested
    {
      public void Test()
      {
        //This example is to show how I can instanciate a new member of the example class and access its members
        // Example ex = new Example();
        // ex.
      }
    }

    //This is an example of a destructor, its job is to clean up unmanaged memory at the end of runtime there is no access modifier for destructors
    ~Example()
    {
      System.Console.WriteLine("Clean up your code !");
    }
  }
}