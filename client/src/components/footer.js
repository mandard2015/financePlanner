import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="border-t border-slate-200 bg-slate-950 text-slate-200">
            <div className="container-shell py-12">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <h4 className="mb-4 text-lg font-bold text-white">Mr. Anand Deshmukh</h4>
                        <p className="max-w-sm text-sm text-slate-300">
                            Trusted guidance for insurance and financial planning tailored to your family goals.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li><Link to="/about" className="hover:text-white">About</Link></li>
                            <li><Link to="/services" className="hover:text-white">Services</Link></li>
                            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
                            <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
                            <li><Link to="/recommendations" className="hover:text-white">Recommendations</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-bold text-white">Contact Info</h4>
                        <div className="space-y-3 text-sm text-slate-300">
                            <p className="flex items-center gap-2"><FaPhone className="text-brand-400" /> 9011094170</p>
                            <p className="flex items-center gap-2"><FaPhone className="text-brand-400" /> 8698405919</p>
                            <p className="flex items-center gap-2"><FaEnvelope className="text-brand-400" /> licanand1@gmail.com</p>
                            <p className="flex items-center gap-2"><IoLocationOutline className="text-brand-400" /> Pimpri, Pune - 411017</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row">
                    <p>&copy; 2024 All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/anand.deshmukh.549" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Facebook"><FaFacebook size={20} /></a>
                        <a href="https://www.instagram.com/licanand1.ad" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Instagram"><FaInstagram size={20} /></a>
                        <a href="https://wa.me/9011094170?text=Hii%2C%20can%20I%20get%20more%20info%20on%20this" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
                        <a href="https://www.linkedin.com/in/anand-deshmukh-71ab7629" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;