var database = [
  {
    username: 'test',
    password: '12345'
  },
  {
    username: 'test2',
    password: '123456'
  },
  {
    username: 'test3',
    password: '1234567'
  }
];

var newsFeed = [
  {
    username: 'Bobby',
    timeline: 'Java is so cool'
  },
  {
    username: 'Sally',
    timeline: 'Come on you gunners !'
  }
];

// var userNamePrompt = prompt("What's you're user name ?");
// var passwordPrompt = prompt("What's your password ?");

function userValid (username, password){
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      return true;
    }
  }
  return false;
}

let signIn = (username, password) =>{
  if (userValid(username,password)) {
    console.log(newsFeed);
  }
  else{
    alert("Please check if your username or password matches");
  }
}

//signIn(userNamePrompt, passwordPrompt);

//adding event listener
let myButton = document.getElementsByTagName('button')[0];

myButton.addEventListener('click', ()=>{
  console.log('button was pressed !');
});

//adding items to a shopping list
let enterBtn = document.getElementById('enter');
let myInput = document.getElementById('addShopping');
let ul = document.querySelector('ul');

function inputLength() {
  return myInput.value.length;
}

function createListElement(){
    li.appendChild(document.createTextNode(myInput.value));
    ul.appendChild(li);
    myInput.value = '';
}

function addListAfterClick(){
  let li = document.createElement('li')
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event){
  let li = document.createElement('li')
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

enterBtn.addEventListener('click', addListAfterClick());

myInput.addEventListener('keypress', addListAfterKeypress());
