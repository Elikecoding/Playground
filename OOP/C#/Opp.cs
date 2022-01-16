// The goal of Opp is to use code to model real world objects and their behaviours

// Abstraction - Separtating code think login page
// Encapsulation - Binding the object state and behaviour in a single unit e.g classes
//Inheritance - aquiring the features and behaviours of class by parent class e.g Lion class : Cat class
//Polymorphism - A way to make an object behave in multiple ways. e.g static (overloading) and dynamic (overriding)

class Student{
//A class is a user defined data structure that contains data (fields and props) and functions(methods constructor and decontructor) think of it a template for an object


  //Fields
  public int StudentId { get; set; }
  public string Name { get; set; }
  public string Address { get; set; }

  public void ShowDetails(){
    Console.WriteLine();
  }
};

class Program{

  static void Main(string[] args){

  }
}