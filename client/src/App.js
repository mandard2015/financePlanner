import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/navbar';
import ServiceSlider from './components/services';
import Reviews from './components/Reviews';
import WhatsAppIcon from './components/whatsappIcon';
import Footer from './components/footer';
import WorkExp from './components/areaWorkExp';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='/' element={<AppNavbar />} />
        <Route path='/about' element={<WorkExp />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contactUs' element={<Footer />} />
      </Routes>
      {/* </div> */}
      <ServiceSlider />
      <WorkExp />
      <Reviews />
      <Footer />
      <WhatsAppIcon />
    </div>
    </Router>
  );
};

export default App;
