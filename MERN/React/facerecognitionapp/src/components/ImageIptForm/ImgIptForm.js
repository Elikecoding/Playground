import React from 'react';
import './ImgIptForm.css';

const ImgIptForm = ({onIptChange, onBtnSubmit}) =>{
  return(
    <div>
      <p>
        {'This smart brain will detect faces in your images, give it a try'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
        <input className='f4 pa2 w-70 center' type='text' onChange={onIptChange}/>
        <button className='w-25 pa1 grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick={onBtnSubmit}>detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImgIptForm;