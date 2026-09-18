import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/awards', label: 'Awards' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/recommendations', label: 'Recommendations' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm" ref={menuRef}>
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-base font-bold tracking-tight text-slate-900 hover:text-brand-700 sm:text-lg"
          >
            Anand Investments and Financial Solutions
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:8698405919" className="btn btn-secondary">Call Now</a>
            <a href="https://wa.me/9011094170?text=Hii%2C%20can%20I%20get%20more%20info%20on%20this" target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen((prev) => !prev)} className="rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="space-y-2 border-t border-slate-200 pb-4 pt-3 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-left text-sm font-medium ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="tel:8698405919" className="btn btn-secondary flex-1">Call</a>
              <a href="https://wa.me/9011094170?text=Hii%2C%20can%20I%20get%20more%20info%20on%20this" target="_blank" rel="noreferrer" className="btn btn-primary flex-1">WhatsApp</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;