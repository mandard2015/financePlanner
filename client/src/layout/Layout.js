import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppNavbar from '../components/navbar';
import Footer from '../components/footer';
import WhatsAppIcon from '../components/whatsappIcon';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <div className="App">
      <AppNavbar />
      <ScrollToTop />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppIcon />
    </div>
  );
};

export default Layout;
