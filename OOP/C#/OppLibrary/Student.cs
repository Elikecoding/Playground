using System;

namespace OppLibrary
{
  //Class
  public class Student
  {
    //Fields
    public int StudentId { get; set; }

    public string Name { get; set; }

    public string Address { get; set; }

    //Methods
    public void ShowDetails()
    {
      Console.WriteLine("This students information is...");
      Console.WriteLine("StudentId : {0}, Name:{1}, Address{2}", StudentId, Name, Address);
    }

    //Default Contructor
    public Student()
    {
      Address = "One Tree Hill";
    }

    //parameterized constructor
    public Student(int StudentId, string name, string address)
    {
      //Names matching can be optional
      this.StudentId = StudentId;
      this.Name = name;
      this.Address = address;
    }
  }
}