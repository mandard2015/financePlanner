import React from "react";
import { FaFacebook, FaInstagram, FaGoogle, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="bg-light text-dark py-4">
            <div className="container">
                <div className="row" style={{ justifyContent: 'space-between'}}>
                    <div className="col-md-4">
                        <h4 className="mx-3">Contact Info</h4>
                        <h5>Anand Deshmukh</h5>
                        <p className="mb-1"><FaPhone className="me-2" />
                            9011094170
                        <FaPhone className="mx-2" />
                            8698405919
                        </p>
                        <p className="mb-1">
                            <FaEnvelope className="me-2" />
                             licanand1@gmail.com
                        </p>
                        <p className="mb-1">
                            <IoLocationOutline className="me-2" />
                             Pimpri, Pune - 411017
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow us</h4>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferer" className="text-dark me-3">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferer" className="text-dark me-3">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://wa.me/9405643702" target="_blank" rel="noopener noreferer" className="text-dark me-3">
                                <FaWhatsapp size={30} />
                            </a>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferer" className="text-dark me-3">
                                <FaGoogle size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* background-image: -webkit-linear-gradient(0deg, #38C7F3 0%, #f92200 100%); */}
            <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #e7ecf1' }}>
                <p style={{ marginTop: '20px', marginBottom: '0px' }}>&copy; 2024 All rights reserved. Mandar </p>
            </div>
        </footer>
    );
};

export default Footer;