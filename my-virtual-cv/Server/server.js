const express = require('express');
const cors = require('cors');

//Set up and Middleware
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
  res.send('hello')
})

app.listen(PORT, ()=>{
  console.log(`Server running on port: ${PORT}`)
})
