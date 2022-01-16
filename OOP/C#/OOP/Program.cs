using System;
using OppLibrary;

namespace OOP
{
  // The goal of Opp is to use code to model real world objects and their behaviours

  // Abstraction - Separtating code think login page
  // Encapsulation - Binding the object state and behaviour in a single unit e.g classes
  //Inheritance - aquiring the features and behaviours of class by parent class e.g Lion class : Cat class
  //Polymorphism - A way to make an object behave in multiple ways. e.g static (overloading) and dynamic (overriding)
  class Program
  {
    static void Main(string[] args)
    {
      //Object
      Student st = new Student();
      st.StudentId = 1;
      st.Name = "Sally";
      st.Address = "Blueberry Road";
      st.ShowDetails();

      //   BaseClass obj = new ChildClass();
      //   obj.TestAccess();

      //Passing arguments to my student parameterized constructor
      Student pS = new Student(3, "Joe", "Salford Street");

      //Cannot create an instace here because its a private class
      //Example ex = new Example();
      Console.WriteLine("Counter: {0}", Example.GetCounter());

      Console.ReadKey();
    }
  }
}


