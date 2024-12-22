import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer id="contact" className="bg-light text-dark py-4">
            <div className="container">
                <div className="row justify-content-around px-3" style={{ fontVariant: 'small-caps', textAlign: 'center', fontWeight: 'bold' }}>
                    <div className="col-md-4 justify-content-center">
                        <h4 className="mx-3">Contact Info</h4>
                        <h5>Mr. Anand Deshmukh</h5>
                        <p className="mb-1"><FaPhone className="me-2" />
                            9011094170
                            <br />
                            <FaPhone className="mx-0 me-2" />
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
                        <h4 className="mt-2">Follow us</h4>
                        <div>
                            <a href="https://www.facebook.com/anand.deshmukh.549" target="_blank" rel="noopener noreferer" className="text-dark me-3">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.instagram.com/licanand1.ad" target="_blank" rel="noopener noreferer" className="text-dark me-3">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://wa.me/9011094170?text=Hii%2C%20can%20I%20get%20more%20info%20on%20this"
                                target="_blank" rel="noopener noreferer" className="text-dark me-3">
                                <FaWhatsapp size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/anand-deshmukh-71ab7629" target="_blank" rel="noopener noreferer" className="text-dark me-3">
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* background-image: -webkit-linear-gradient(0deg, #38C7F3 0%, #f92200 100%); */}
            <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #e7ecf1' }}>
                <p style={{ marginTop: '20px', marginBottom: '0px' }}>&copy; 2024 All rights reserved.
                    <a href="https://wa.me/9405643702?text=Hii%2C%20can%20I%20get%20more%20info%20on%20website%20development"
                        target="_blank" rel="noopener noreferer" className="text-blue-700 me-3">Mandar</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;