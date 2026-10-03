import React, { useEffect, useState } from 'react';

const logos = [
  { name: 'LIC India', image: '/images/lic.png' },
  { name: 'New India Assurance', image: '/images/NIA_logo.png' },
  { name: 'Star Health', image: '/images/StarHealth.png' },
  { name: 'AMFI', image: '/images/AMFI.png' },
];

const LogoMarquee = () => {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();

    mediaQuery.addEventListener ? mediaQuery.addEventListener('change', updatePreference) : mediaQuery.addListener(updatePreference);

    return () => {
      mediaQuery.removeEventListener ? mediaQuery.removeEventListener('change', updatePreference) : mediaQuery.removeListener(updatePreference);
    };
  }, []);

  return (
    <section aria-label="Insurance and investment ecosystem" className="border-y border-slate-200 bg-slate-50/90">
      <div className="container-shell py-6">
        <div className="mb-4 text-center">
          <p className="section-label">Insurance &amp; investment ecosystem</p>
        </div>

        <div
          className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 py-4 shadow-soft"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          tabIndex={0}
        >
          <style>{`@keyframes logo-scroll { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }`}</style>
          <div
            className="flex w-max items-center gap-5 md:gap-8"
            style={{
              animation: reducedMotion ? 'none' : `logo-scroll 28s linear infinite`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex h-20 w-28 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 shadow-sm sm:w-36 md:w-40">
                <img src={process.env.PUBLIC_URL + logo.image} alt={logo.name} loading="lazy" className="max-h-12 w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
