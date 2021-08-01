//Calling express
const express = require('express');
const bcrypt = require('bcrypt');

const saltRounds = 10;


const app = express();
app.use(express.json())

const Db = {
  users: [
    {
      id: '1',
      name: 'mrtest',
      email: 'test@test.co.uk',
      entries: 0,
      joined: new Date()
    },
    {
      id: '2',
      name: 'sally',
      email: 'sas@test.co.uk',
      entries: 0,
      joined: new Date()    
    }
  ],
  login: [
    {
      id: '1',
      hash: '',
      email: 'test@test.co.uk'
    }
  ]
}

// app.use(bodyParser.urlencoded({extended: false}))


// //passing static files into express
// app.use(express.static(__dirname + '/public'))


app.get('/', (req, res)=> {
  // const user = {
  //   name: 'Mr Anderson',
  //   email: 'Matrixt@test.com'
  // }
return(
  res ? res.status(200).json(Db.users) : console.log('Error',res.status)
)
});

app.post('/signin', (req, res)=> {
  let found = false;

  if(req.body.email === Db.users[0].email &&
    req.body.name === Db.users[0].name){
      found = true;
    return res.json('User has been added');
    }
    else{
      res.status(400).json('Error login in...');
    }
})

//Bug here atm replace code later
app.use('/register', (req,res)=>{
  const {name, email, password} = req.body;
  
bcrypt.hash(password, saltRounds, (err, hash)=>{
  if (!err) {
    // Store hash in your password DB.
    console.log(hash);
  }else{
    console.log(err)
  }
})

    Db.users.push({
      id: '14',
      name,
      email,
      password,
      entries: 0,
      joined: new Date()
    })
    res.send(Db.users[Db.users.lastIndexOf]);
  })


  app.get('/profile/:id', (req,res)=>{
    const {id} = req.params;
    let found = false;

    Db.users.forEach(user =>{
      if (user.id === id) {
        found = true;
      return res.json(user);
      }
      if (!found) {
        return res.status(404).json('user not found')
      }
    })
  })

  app.post('/image', (req,res)=>{
    const {id} = req.body;
    let found = false;

    Db.users.forEach(user =>{
      if (user.id === id) {
        found = true;
        user.entries++
      return res.json(user.entries);
      }
      if (!found) {
        return res.status(404).json('user not found')
      }
    })
  })


// bcrypt.compare(password, hash).then((err, result)=>{
//   // result == true
// })

// bcrypt.compare(password, hash).then((err, result)=>{
//   // result == false
// })

app.listen(3001);

/* 
routes

/ --> res = this is working 
/sigin --> post = success or fail
/register ----> post = user
/profile/: userID --> Get = user
/image ---> put ---> user

*/