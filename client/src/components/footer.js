import React from "react";
import { FaFacebook, FaInstagram, FaGoogle, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="bg-light text-dark py-4">
            <div className="container">
                <div className="row" style={{ justifyContent: 'space-between'}}>
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <p><FaPhone className="me-2" />
                            Phone: 9011094170
                        </p>
                        <p>
                            <FaEnvelope className="me-2" />
                            Email: licanand1@gmail.com
                        </p>
                        <p>
                            <IoLocationOutline className="me-2" />
                            Address: Your Street, City, Country
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