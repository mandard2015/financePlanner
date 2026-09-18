import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({
  eyebrow = 'Talk to Anand',
  title = 'Let’s discuss your insurance and financial goals',
  description = 'Connect with a trusted advisor for guidance tailored to your situation.',
  primaryLabel = 'Contact us',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) => {
  return (
    <section className="section-shell">
      <div className="rounded-3xl border border-brand-100 bg-gradient-to-r from-brand-50 to-white p-8 shadow-soft sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">{eyebrow}</p>
            <h2 className="section-heading">{title}</h2>
            <p className="mt-4 text-base text-slate-600">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to={primaryTo} className="btn btn-primary">{primaryLabel}</Link>
            {secondaryLabel && secondaryTo && (
              <Link to={secondaryTo} className="btn btn-secondary">{secondaryLabel}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
