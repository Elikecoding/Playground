//Calling express
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//passing static files into express
app.use(express.static(__dirname + '/public'))


// app.get('/', (req, res)=> {
//   const user = {
//     name: 'Test',
//     email: 'Test@test.com'
//   }
//   res.send(user)
// });

// app.get('/profile', (req, res)=> {
//   res.send('Getting profile');
// })

// app.get('/', (req, res)=>{
//   // req.query Query string
//   // req.headers
//   // req.body
//   // req.params
//   res.status(200).send('Ok')
// })

// app.post('/profile', (req, res)=> {
//   console.log(req.body)
//   const user = {
//     name: 'Test',
//     email: 'Test@test.com'
//   }
//   res.send(user)
// })


app.listen(3001);