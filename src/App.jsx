// src/App.js
import './index.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Hero />
       <Project/> 
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
