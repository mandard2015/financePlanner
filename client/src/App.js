import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Reviews from './components/Reviews';
import WhatsAppIcon from './components/whatsappIcon';
import Footer from './components/footer';
import WorkExp from './components/areaWorkExp';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <WorkExp />
      <Reviews />
      <Footer />
      <WhatsAppIcon />
    </div>
  );
}

export default App;
