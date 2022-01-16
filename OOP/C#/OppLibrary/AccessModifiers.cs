using System;

//Access modifiers - used to specify the he accessibility of a field which helps with abstraction
//Other types of AMs are: protected, internal, protected Internal
//private code can only be accessed by the same class
//protected can be accessed by children of that class regardless of the assembley
//Internal cannot be access by other assemblies
//protected Internal can be accessed by other assemblies which inherit from the base class


//Contructors are automatically called when a class is created, its a method that creates a instance of the class in memory. Doesn't have a return type. Think default value of type.

namespace OppLibrary
{
  public class BaseClass
  {
    private string pvtVar = "private";
    protected string protVar = "protected";
    internal string intVar = "internal";
    protected internal string protIntVar = "protected internal";
    public string pubVar = "Public";

    public void TestAccess()
    {
      Console.WriteLine(pvtVar);
      Console.WriteLine(protVar);
      Console.WriteLine(intVar);
      Console.WriteLine(protIntVar);
      Console.WriteLine(pubVar);
    }
  }

  public class ChildClass : BaseClass
  {
    public void TestAccessInChild()
    {
      //Not Accessible
      //Console.WriteLine(pvtVar);
      Console.WriteLine(protVar);
      Console.WriteLine(intVar);
      Console.WriteLine(protIntVar);
      Console.WriteLine(pubVar);
    }
  }
}