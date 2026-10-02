import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SEO from './SEO';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import LifeInsurance from './pages/LifeInsurance';
import HealthInsurance from './pages/HealthInsurance';
import GeneralInsurance from './pages/GeneralInsurance';
import MutualFunds from './pages/MutualFunds';
import ReviewsPage from './pages/Reviews';
import Awards from './pages/Awards';
import Blogs from './pages/Blogs';
import Recommendations from './pages/Recommendations';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/life-insurance' element={<LifeInsurance />} />
          <Route path='/services/health-insurance' element={<HealthInsurance />} />
          <Route path='/services/general-insurance' element={<GeneralInsurance />} />
          <Route path='/services/mutual-funds' element={<MutualFunds />} />
          <Route path='/reviews' element={<ReviewsPage />} />
          <Route path='/awards' element={<Awards />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/recommendations' element={<Recommendations />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
