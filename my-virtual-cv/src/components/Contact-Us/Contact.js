import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneSquareAlt,faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import './Contact.scss';
require('dotenv').config()


const Contact =()=>{

  const { register, handleSubmit, reset ,formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      findType: '',
      businessType: '',
      subject: '',
      message: ''
    }
  });

  async function onFormSubmit (data){
    let config = {
      method: 'post',
      url: `http://localhost:5000/submitForm`,
      headers: {
        'Content-Type' : 'application/json'
      },
      data: data,
    }
    try {
      const response = await axios(config);
      console.log(response);
      if (response.status === 200) {
        reset()
        console.log('success');
      }
    } catch (err) {
      console.error(err);
    }
  }

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
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className='col'>
            <div className='form-group'>
              <label>Name</label>
              <input type='text' name='name'
              {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}/>
              <span className='errors'>
                {errors.name?.type === 'required' && "name is required"}
                {errors.name?.type === 'pattern' && "name cannot contain special characters"}
                </span>
            </div>
          </div>

          <div className='col'>
          <div className='form-group'>
              <label>Email</label>
              <input type='email' name='email' {...register('email', { required: true, minLength:7, maxLength: 300 })}/>
              <span className='errors'>
                {errors.email?.type === 'required' && "email is required"}
                {errors.email?.type === 'minLength' && "email has to be at least 7 characters"}
                {errors.email?.type === 'maxLength' && "email has to be at most 300 characters"}
                </span>
            </div>
          </div>
          
          <div className='col'>
            <div className='form-group'>
              <label>How did you find us ?</label>
              <select name="findMeth" id="findMeth" {...register('findType', { required: true })}>
                <option value="linkedin">Linkedin</option>
                <option value="google">Google</option>
                <option value="word">Word of mouth</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className='col'>
          <div className='form-group'>
              <label>What type of business are you ?</label>
              <select name="businessType" id="businessType" {...register('businessType', { required: true })}>
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
              <input type='text' name='subject' {...register('subject', { required: true, maxLength:30 })}/>
              <span className='errors'>
                {errors.subject?.type === 'required' && "you must enter a subject"}
                {errors.subject?.type === 'maxLength' && "subject has to be at most 30 characters"}
                </span>
            </div>
          </div>

          <div className='col'>
          <div className='form-group'>
              <label>Message</label>
              <textarea name="message" form="contact-form" {...register('message', { required: true, minLength: 20 ,maxLength:1500 })} placeholder='enter your text here...'></textarea>
              <span className='errors'>
                {errors.message?.type === 'required' && "you must enter a message"}
                {errors.message?.type === 'minLength' && "message has to be at least 20 characters"}
                {errors.message?.type === 'maxLength' && "message has to be at most 1500 characters"}
              </span>
            </div>
          </div>

          <div className='col'>
            <div className='form-group'>
              <input type='submit'/>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contact;