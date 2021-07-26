/* 

user debugger keyword to set up debuging
console.log('My description', mysteryThing);

Javascript types 
-----------------------

Number 
String
Boolean
undefined
null
symbol
object 


Comparisons
-------------------

!==
===
>=
<=
>
<

Variables
------------

var
let 
const

Conditionals 
-------------

if 
else 
esle if 
terniary operator

let isValid = (bool) =>{
  return bool;
}
var autoAns = "The answer is" + isValid ? "True" : "False";
console.log(autoAns);

case switch

function myDir (direction){
  var whatHappens;

  switch(direction){

    case "forward":
      whatHappens = "You went forward";
      break;

      case "backwards":
        whatHappens = "You went backwards";
        break;

      case "left":
      whatHappens = "You went left";
      break;

      case "right":
        whatHappens = "You went right";
        break;

    default:
      whatHappens = "Please enter a valid direction";
  }
  return whatHappens;
}

Logic 
------

&&
||
!

Functions
----------

var a = function fName( params here ) { code here  }
function fName( ) { }
return
()=>{}

make sure you are always returning something to keep function purity, research side effects

Data Structures
----------------

Arrays - map, filter, reduce

const array = [1, 2, 4, 8, 16, 32];

const mapArray = array.map( num => return num *2 );

map > foreach because map always returns something


Objects

Looping
--------

For
while
do
for each
for of - iterating - strings, arrays 
for in - enumerating | properties - objects, arrays are like objects but nor vice versa

-----------
Dom Selectors
-------------

document.getElementById
document.getElementsByTagName
document.getElementsByClassName

document.querySelector('li,h1')
document.querySelectorAll
document.querySelectorAll(p)[2].parentElement

document.querySelector('h2,li').getAttribute
document.querySelector('p').setAttribute


Changing styles
----------------

document.querySelector('p').style.

let myH1 = document.querySelector('h1');

myH1.className
myH1.classList

Classes
---------

class Square{
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
}

let mySq = new Square(100,100);



*/