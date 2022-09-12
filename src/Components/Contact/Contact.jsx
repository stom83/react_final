import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './contact.css';
import { useState } from 'react';

const Contact = () => {
  const [Send, setSend] = useState(false);
  return (
    <>
      <Formik
        initialValues = {{
          primaryName: '',
          lastName: '',
          email: '',
          message: ''
        }}
        validate={ data => 
          {
          let errorsInput = {};
          if (!data.primaryName){
            errorsInput.primaryName = 'No debes de dejar en blanco el campo Nombre';
            } else if (!/^[A-Za-z ]{1,40}$/.test(data.primaryName)){
              errorsInput.primaryName = 'Solo se acepta letras y espacios';
            };
          if (!data.lastName){
            errorsInput.lastName='No debes de dejar en blanco el campo Apellido';
            } else if (!/^[A-Za-z ]{1,40}$/.test(data.lastName)){
              errorsInput.lastName = 'Solo se acepta letras y espacios';
            };
          if (!data.email){
            errorsInput.email='No debes de dejar en blanco el campo Email';
            } else if (!/^[A-Za-z0-9.+-]+@[A-Za-z0-9.+-]+\.[A-Za-z0-9.+-]+$/.test(data.email)){
              errorsInput.email = 'Es necesario una dirección Email válida';
            };
          if (!data.message){
            errorsInput.message='No debes de dejar en blanco el campo Mensaje';
            } 
            else if(!/^[A-Za-z 0-9_-]{20,200}$/.test(data.message)){
              errorsInput.message = 'Comentario inválido, por favor revisa tu mensaje (Min-40 caracteres Max-200, no use caracteres especiales se acepta -_ )';
            };
            return errorsInput;
          }
        }
        onSubmit = { (data, {resetForm}) => {
          alert(`Hola ${data.primaryName} ${data.lastName},
          su mensaje ha sido enviado con èxito,
          revise su bandeja de salida
          en el correo ${data.email}`);
          resetForm();
          setSend(true);
        }}
      >
        {({errors})=>(
        <div className='box-form'>
        <Form className='form-contact'>
          <div>
          <h2>Contactate Conmigo</h2>
          </div>
          <div>
              <label htmlFor='primaryName'>Nombre: </label>
              <Field
                id = 'primaryName'
                name = 'primaryName'
                type = 'text'
                placeholder = 'Estuardo'
              />
              < ErrorMessage name = 'primaryName' component = {()=>
                (
                  <div className='errors'>{errors.primaryName}</div>
                )}
              />
          </div>
          <div>
              <label htmlFor = 'lastName'>Apellido: </label>
              <Field
                id = 'lastName'
                name = 'lastName'
                type = 'text'
                placeholder = 'Chancusig'
              />
              < ErrorMessage name = 'lastName' component = {()=>
                (
                  <div className='errors'>{errors.lastName}</div>
                )}
              />
          </div>
          <div>
              <label htmlFor = 'email'>Email: </label>
              <Field
                id = 'email'
                name = 'email'
                type = 'email'
                placeholder = 'stuardo.chancusig@gmail.com'
              />
              < ErrorMessage name = 'email' component = {()=>
                (
                  <div className='errors'>{errors.email}</div>
                )}
              />
          </div>
          <div>
              <label htmlFor = 'textarea'>Mensaje: </label>
              <Field as='textarea'
                id = 'message'
                name = 'message'
                type = 'message'
                placeholder = 'Mensaje...'
              />
              < ErrorMessage name = 'message' component = {()=>
                (
                  <div className='errors'>{errors.message}</div>
                )}
              />
          </div>      
            <button type = 'submit' onClick={()=>{Send(true)}}>Enviar</button>
            </Form>
          </div>
      )}
      </Formik>
    </>
);
};
export default Contact;