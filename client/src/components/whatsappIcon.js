// WhatsAppIcon.js

import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const openWhatsApp = () => {
    // Replace '1234567890' with the actual WhatsApp number
    const phoneNumber = '9011094170';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const openDialer = () => {
    const phoneNumber = '9011094170';
    window.location.href = `tel:${phoneNumber}`
  };

  return (
    <div
      style={{
        position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column',
      }}>
      <div style={{
        backgroundColor: '#25d366', color: '#fff', borderRadius: '50%', padding: '10px',
        marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '20px', boxShadow: '0 0 15px rgba(7, 180, 0)',
        zIndex: '1000'
      }}
        onClick={openWhatsApp}>
        <FaWhatsapp size={30} />
      </div>
      <div style={{
        backgroundColor: '#25d366', color: '#fff', borderRadius: '50%', padding: '10px',
        marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '20px', boxShadow: '0 0 15px rgba(7, 180, 0)',
        zIndex: '1000'
      }}
        onClick={openDialer}>
        <FaPhone size={30} />
      </div>
    </div>
  );
};

export default WhatsAppIcon;
