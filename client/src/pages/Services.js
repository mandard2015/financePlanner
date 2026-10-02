import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { Breadcrumbs } from '../SEO';

const serviceCards = [
  {
    title: 'Life Insurance / LIC',
    description: 'Life protection, family financial security and long-term planning conversations.',
    image: '/images/lifeinsurance.jpg',
    to: '/services/life-insurance',
  },
  {
    title: 'Health Insurance / Mediclaim',
    description: 'Health-risk protection and medical-expense planning for individuals and families.',
    image: '/images/healthinsurance.jpg',
    to: '/services/health-insurance',
  },
  {
    title: 'General Insurance',
    description: 'Guidance for relevant vehicle, property, travel and everyday protection needs.',
    image: '/images/geninsurance.jpg',
    to: '/services/general-insurance',
  },
  {
    title: 'Mutual Funds / Investments',
    description: 'Goal-oriented investment conversations grounded in objectives, time horizon and risk.',
    image: '/images/mutualfund.jpg',
    to: '/services/mutual-funds',
  },
];

const Services = () => {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
      <section className="bg-slate-950 text-white">
        <div className="container-shell py-16 sm:py-20">
          <p className="section-label border-brand-300/40 bg-white/10 text-brand-100">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Financial Planning &amp; Insurance Solutions</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Anand Deshmukh helps individuals and families connect financial goals with practical protection, health coverage and investment conversations.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="btn btn-primary">Discuss your needs</Link><Link to="/about" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">Meet your advisor</Link></div>
        </div>
      </section>

      <Section label="The bigger picture" title="Planning connects the important pieces" description="Financial planning is not a single product. It is a way to bring protection, savings, investments and life goals into one clearer conversation.">
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['Plan around goals', 'Discuss priorities such as family responsibilities, children’s education and retirement.'],
            ['Protect against risks', 'Consider life, health and general insurance needs that may affect your financial safety net.'],
            ['Invest with purpose', 'Explore investment choices in the context of objectives, time horizon and market risk.'],
          ].map(([title, description]) => <div key={title} className="card-surface p-6"><h2 className="text-xl font-bold text-slate-900">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></div>)}
        </div>
      </Section>

      <section className="border-y border-slate-200 bg-slate-50">
        <Section label="Explore services" title="Choose the conversation that fits your needs" description="Each service page is a starting point for understanding the relevant questions, categories and support available.">
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{serviceCards.map((service) => <ServiceCard key={service.to} {...service} />)}</div>
          <p className="mt-6 text-center text-xs text-slate-500">Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.</p>
        </Section>
      </section>

      <Section label="How I help" title="A clear process for important decisions">
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {['Understand your goals', 'Assess requirements and risks', 'Discuss suitable options', 'Assist with implementation', 'Provide ongoing guidance and reviews'].map((step, index) => <div key={step} className="border-l-2 border-brand-300 pl-5"><p className="text-sm font-bold text-brand-700">0{index + 1}</p><h2 className="mt-2 font-bold text-slate-900">{step}</h2></div>)}
        </div>
      </Section>

      <CTASection eyebrow="Start with your needs" title="Let’s discuss the right place to begin" description="Whether you are reviewing protection, health coverage, investments or a longer-term goal, the first step is a clear conversation." primaryLabel="Contact Anand" primaryTo="/contact" />
    </div>
  );
};

export default Services;
