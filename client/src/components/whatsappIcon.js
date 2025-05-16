import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const phoneNumber = '9011094170';

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const openDialer = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col z-50">
      {/* WhatsApp Button */}
      <div
        onClick={openWhatsApp}
        className="bg-[#25d366] text-white rounded-full p-3 mb-3 cursor-pointer shadow-[0_0_15px_rgba(7,180,0)] flex items-center justify-center text-lg"
      >
        <FaWhatsapp size={30} />
      </div>

      {/* Call Button */}
      <div
        onClick={openDialer}
        className="bg-[#25d366] text-white rounded-full p-3 mb-3 cursor-pointer shadow-[0_0_15px_rgba(7,180,0)] flex items-center justify-center text-lg"
      >
        <FaPhone size={30} />
      </div>
    </div>
  );
};

export default WhatsAppIcon;
