import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneSquareAlt,faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import './Contact.scss';


const Contact =()=>{

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [findType, setFindType] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('Sending')
  }

  let data = {
    name,
    email,
    subject,
    message,
    findType,
    businessType
  }

  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res =>{
    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
      setSubmitted(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setFindType('')
      setBusinessType('')
    }
  })

  return(
    <div className='contactPg'>
      <h1>Contact Us</h1>
      <div id='contact-container'>
        <div className='contact-info'>
          <h4>Contact Information</h4>

          <p>Fill in the form and I'll try to get back to you ASAP</p>
          <div className='icon-text'>
          <FontAwesomeIcon icon={faPhoneSquareAlt} className='fa'/>
            <span>07754220707</span>
          </div>
          <div className='icon-text'>
          <FontAwesomeIcon icon={faEnvelope} className='fa'/>
            <span>Elikescoding@outlook.com</span>
          </div>
          <div className='icon-text'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='fa'/>
            <span>London or remotely</span>
          </div>

          <div className='social-media'>
            <div className='icon-circle'>
              <i className='icon'></i>
            </div>
          </div>
        </div>
        <form>
          <div className='col'>
            <div className='form-group'>
              <label>Name</label>
              <input type='text' required onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className='form-group'>
              <label>Email</label>
              <input type='email' required onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
          </div>

          
          <div className='col'>
            <div className='form-group'>
              <label>How did you find us ?</label>
              <select name="findMeth" id="findMeth" required onChange={(e)=>{setFindType(e.target.value)}}>
                <option value="linkedin">Linkedin</option>
                <option value="google">Google</option>
                <option value="word">Word of mouth</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='form-group'>
              <label>What type of business are you ?</label>
              <select name="businessType" id="businessType" required onChange={(e)=>{setBusinessType(e.target.value)}}>
                <option value="agency">Agency</option>
                <option value="company">Company</option>
                <option value="individual">Individual</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className='col'>
            <div className='form-group'>
              <label>Subject</label>
              <input type='text' onChange={(e)=>{setSubject(e.target.value)}}/>
            </div>

            <div className='form-group'>
              <label>Message</label>
              <textarea name="message" form="contact-form" onChange={(e)=>{setMessage(e.target.value)}}>Enter text here...</textarea>
            </div>
          </div>

          <div className='col'>
            <div className='form-group'>
              <input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contact;