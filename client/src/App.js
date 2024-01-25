import './App.css';
import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Reviews from './components/Reviews';
import WhatsAppIcon from './components/whatsappIcon';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Reviews />
      <Footer />
      <WhatsAppIcon />
    </div>
  );
}

export default App;
