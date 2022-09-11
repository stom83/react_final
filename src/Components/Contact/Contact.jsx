import React from 'react';
import { Formik } from 'formik';
import './contact.css'
const Contact = ()=>{
  return(
    <>
    <Formik
      onSubmit={()=>{
        console.log('submit');
      }}
    >
      {({handleSubmit})=>(
        <h2 className="contact-title">Contact</h2>
          <form className='form-contact' onSubmit={handleSubmit}>
            <div className='form-div'>
              <label htmlFor="nickName">NickName: </label>
              <input type="text" placeholder='Example stom83' id='nick-name' name='nick-name'/>
              <label htmlFor="mail">email: </label>
              <input type="mail" placeholder='my_email@mail.com' id='mail-contact' name='mail-contact'/>
              <label htmlFor="text">Message: </label>
              <textarea placeholder='Comment and Suggestions' id='message' name='message'/>
            </div>
            <button type="button" id="send">Enviar</button>
          </form>
      )
      }
    </Formik>
    </>
  );
};
export default Contact;