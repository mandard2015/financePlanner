import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-100 text-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-around text-center md:text-left font-semibold tracking-wide">
                    {/* Contact Info */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-xl mb-2">Contact Info</h4>
                        <h5 className="text-lg">Mr. Anand Deshmukh</h5>
                        <p className="mb-1 flex items-center justify-center md:justify-start">
                            <FaPhone className="mr-2" />
                            9011094170
                        </p>
                        <p className="mb-1 flex items-center justify-center md:justify-start">
                            <FaPhone className="mr-2" />
                            8698405919
                        </p>
                        <p className="mb-1 flex items-center justify-center md:justify-start">
                            <FaEnvelope className="mr-2" />
                            licanand1@gmail.com
                        </p>
                        <p className="mb-1 flex items-center justify-center md:justify-start">
                            <IoLocationOutline className="mr-2" />
                            Pimpri, Pune - 411017
                        </p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-xl mb-2">Follow us</h4>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a
                                href="https://www.facebook.com/anand.deshmukh.549"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:text-blue-600"
                            >
                                <FaFacebook size={30} />
                            </a>
                            <a
                                href="https://www.instagram.com/licanand1.ad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:text-pink-500"
                            >
                                <FaInstagram size={30} />
                            </a>
                            <a
                                href="https://wa.me/9011094170?text=Hii%2C%20can%20I%20get%20more%20info%20on%20this"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:text-green-500"
                            >
                                <FaWhatsapp size={30} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/anand-deshmukh-71ab7629"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:text-blue-700"
                            >
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 mt-8 pt-4 text-center">
                <p className="text-sm">
                    &copy; 2024 All rights reserved.{" "}
                    <a
                        href="https://wa.me/9405643702?text=Hii%2C%20can%20I%20get%20more%20info%20on%20website%20development"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                    >
                        Mandar
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;