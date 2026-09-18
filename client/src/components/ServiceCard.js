import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, to }) => {
  return (
    <div className="card-surface overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
      <div className="h-48 overflow-hidden border-b border-slate-200">
        <img src={process.env.PUBLIC_URL + image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
        <Link to={to} className="inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-800">
          Learn more →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
