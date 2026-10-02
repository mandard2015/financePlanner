import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import CTASection from './CTASection';
import { Breadcrumbs } from '../SEO';

const ServiceDetailPage = ({ service, extraSections = [] }) => {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: service.title },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <section className="bg-slate-950 text-white">
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.15fr,0.85fr] lg:items-center lg:py-20">
          <div>
            <Link to="/services" className="text-sm font-semibold text-brand-200 hover:text-white">← All services</Link>
            <p className="mt-8 section-label border-brand-300/40 bg-white/10 text-brand-100">{service.category}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{service.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">Discuss your needs</Link>
              <Link to="/services" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">Back to services</Link>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + service.image} alt={service.title} className="h-64 w-full rounded-2xl object-cover shadow-2xl sm:h-80" />
        </div>
      </section>

      <Section label="Overview" title={`Understanding ${service.title}`} description={service.overview}>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.relevantFor.map((item) => (
            <div key={item} className="card-surface p-5">
              <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-slate-200 bg-slate-50">
        <Section label="The advisory approach" title="Start with your situation, not a product list" description="The conversation stays focused on understanding your needs and explaining relevant choices clearly.">
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {['Understand your goals', 'Assess requirements and risks', 'Discuss suitable options', 'Assist with implementation', 'Provide ongoing guidance'].map((step, index) => (
              <div key={step} className="border-l-2 border-brand-300 pl-5">
                <p className="text-sm font-bold text-brand-700">0{index + 1}</p>
                <h3 className="mt-2 font-bold text-slate-900">{step}</h3>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section label="How I can help" title="Practical support through the process">
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.supportAreas.map((area) => (
            <div key={area} className="card-surface p-6">
              <h3 className="text-lg font-bold text-slate-900">{area}</h3>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-slate-200 bg-white">
        <Section label="Relevant areas" title="Topics to explore together" description="The right areas depend on your requirements, responsibilities and objectives.">
          <div className="mt-8 flex flex-wrap gap-3">
            {service.categories.map((category) => (
              <span key={category} className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800">{category}</span>
            ))}
          </div>
          {service.disclaimer && <p className="mt-8 text-sm text-slate-500">{service.disclaimer}</p>}
        </Section>
      </section>

      <Section label="Learn more" title="Questions for a future detailed guide" description="This page provides a clear starting point. More educational content and FAQs can be added here as the service content develops.">
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {service.faqs.map((question) => (
            <div key={question} className="p-5 text-sm font-semibold text-slate-800">{question}</div>
          ))}
        </div>
      </Section>

      {extraSections}

      <CTASection eyebrow="Talk to Anand" title={`Discuss your ${service.title.toLowerCase()} needs`} description="A consultation begins with understanding your situation and the questions you want to answer." primaryLabel="Contact Anand" primaryTo="/contact" secondaryLabel="View all services" secondaryTo="/services" />
    </div>
  );
};

export default ServiceDetailPage;
