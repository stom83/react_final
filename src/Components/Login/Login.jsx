import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.css';
import { useState } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from '../Home/Home';

const Login = () => {
  const [Send, setSend] = useState(false);
  return (
    <>
      <Formik
        initialValues = {{
          email: '',
          password: '',
        }}
        validate={ data => 
          {
            let errorsIn = {};
            if (!data.email){
              errorsIn.email='No debes de dejar en blanco el campo Email';
              } else if (!/^[A-Za-z0-9.+-]+@[A-Za-z0-9.+-]+\.[A-Za-z0-9.+-]+$/.test(data.email)){
                errorsIn.email = 'Es necesario una dirección Email válida';
              };
            if (!data.password){
              errorsIn.password='Debes de ingresar tu contraseña';
              } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(data.password)){
                errorsIn.password = 'Contraseña no valida';
              };
            return errorsIn;
          }
        }
        onSubmit = { (data, {resetForm}) => {
          alert(`Su correo ${data.email} ha generado un acceso exitoso,`);
          setSend(true);
          resetForm();
          if(Send(true)){
            <Router>
            <Route path="/home" component={Home} />
            </Router>
          } else{
          }
        }}
      >
        {({errors})=>(
        <div className='box-form'>
        <Form className='form-login'>
          <div>
          <h2>Login</h2>
          </div>
          <div>
              <label htmlFor = 'email'>Email: </label>
              <Field
                id = 'email'
                name = 'email'
                type = 'email'
                placeholder = 'yourmail@mail.com'
              />
              < ErrorMessage name ='email' component = {()=>
                (
                  <div className='errors'>{errors.email}</div>
                )}
              />
          </div>
          <div>
              <label htmlFor = 'password'>Password: </label>
              <Field
                id = 'password'
                name = 'password'
                type = 'password'
                placeholder = 'password'
              />
              < ErrorMessage name = 'password' component = {()=>
                (
                  <div className='errors'>{errors.password}</div>
                )}
              />
          </div>
            <button type = 'submit' onClick={()=>{
              Send(true);
              }}>Login</button>
            </Form>
          </div>
      )}
      </Formik>
    </>
);
};
export default Login;