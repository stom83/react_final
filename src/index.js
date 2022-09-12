import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studies from './Components/Studies/Studies';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound';
import Home from './Components/Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Home/>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/studies' element={<Studies />}/>
    <Route path='/experience' element={<Experience />}/>
    <Route path='/projects' element={<Projects />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
);
