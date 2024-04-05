import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';
import SForm from './Components/studentForm';
import TForm from './Components/teacherForm';
import Login from './Components/loginForm';
import Dashboard from './Pages/dashboard';

function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/sform" element={<SForm />} />
    <Route path="/tform" element={<TForm />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    
  );
}

export default App;