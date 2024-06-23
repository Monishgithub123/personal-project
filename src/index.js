import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Make sure to import your CSS file here
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero/>
    <Project/>
    <ContactUs/>
    <Footer/>
  </React.StrictMode>
);
