import React from 'react';

const Section = ({ label, title, description, children, align = 'left', className = '' }) => {
  return (
    <section className={`section-shell ${className}`}>
      <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
        {label && <p className="section-label">{label}</p>}
        {title && <h2 className="section-heading">{title}</h2>}
        {description && <p className="mt-4 text-base text-slate-600">{description}</p>}
      </div>
      {children}
    </section>
  );
};

export default Section;
