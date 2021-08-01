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

Class Reactangle extends Square(){
  super()
  consonstructor(height, width){
    this.width = width;
    this.height = height;
  }
}

let mySq = new Square(100,100);

let myRec = new 

Promises
------------

const promise = new Promise((resolve,reject)=>{
  if(true){
    resolve('All good');
  }else{
    reject('no bueno');
  }
})


promise.then(result => return result + '!')
.then(result2 =>{
  console.log(result2);
})
.catch(error => console.log(error))

const promise2 = new Promise((resolve,reject)=>{
  setTimeout(resolve, 100, 'We did it')
})

const promise3 = new Promise((resolve,reject)=>{
  setTimeout(resolve, 500, 'HOORaYY')
})

const promise4 = new Promise((resolve,reject)=>{
  setTimeout(resolve, 1000, 'YAAYYY')
})

promise.all([promise,promise2,promise3,promise4])
.then(values =>{
  console.log(values);
})

const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
  'https://jsonplaceholder.typicode.com/photos'
];

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results =>{
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
}).catch(err => console.log(err)) 

const getData = async function(){
  try{
    const [posts, albums, photos] = await promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
  ))
  console.log('posts', posts);
  console.log('albums', albums);
  console.log('photos', photos);
  }
  catch(err){
    console.log('oops something went wrong!', err);
  }

  const getData2 = async function(){
    const promArr = urls.map(url => fetch(url));
    for await (let request of promArr){
      const data = await request.json();
      console.log(data);
    }
  }
}

This is how fetch works 
--------------------------

*/


///REMEMBER JSON > STRING FOR RECIEVING STRING > JSON FOR SENDING
///Use this line to make a call to your api


const myHeaders = new Headers();

//Star Wars API 
const starWarsApi = new Request('https://swapi.dev/api/', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(starWarsApi)
//Once the call is successful you need to chage the response into Json so you can access the data
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
  
///The Api you are calling

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://reqres.in/api/users', { 
  name: 'Test',
  email: 'Test@test.com'
})
.then(data => {
  console.log(data); // JSON data parsed by `data.json()` call
})
.catch(error => console.log('Opps something went wrong', error.message))

