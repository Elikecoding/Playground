const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config()

//Set up and Middleware
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/submitForm', (req,res)=>{
  console.log(req.body)
  const {name, email, findType, businessType, subject, message} = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
      user: 'etestacc150@gmail.com',
      pass: '9182736450tA!'
    },
    tls: {
      rejectUnauthorized: false
  }
  });

  try {
    const info = transporter.sendMail({
      from: email,
      to: 'Elikescoding@outlook.com',
      subject: subject,
      html: `<p>You have a new contact submission from</p><br>
      <p><strong>Name: </strong>${name}</p><br>
      <p><strong>email: </strong>${email}</p><br>
      <p><strong>Found via: </strong>${findType}</p><br>
      <p><strong>Business type: </strong>${businessType}</p><br>
      <p><strong>message: </strong>${message}</p><br>
      `,
    })
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error)
  }

  res.status(200).json(req.body);
}) 

app.get('/', (req,res)=>{
  res.send('hello')
})

app.listen(PORT, ()=>{
  console.log(`Server running on port: ${PORT}`)
})
