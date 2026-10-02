import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';
import Section from '../components/Section';
import servicesData from '../data/servicesData';

const advisorSupport = [
  'Client Consultation',
  'Policy Recommendations',
  'Claims Assistance',
  'Risk Assessment',
  'Regular Plan Reviews',
  'Goal-Based Planning',
];

const audienceCards = [
  'Individuals with dependents',
  'Young working professionals',
  'Parents and families',
  'People with financial liabilities',
  'People reviewing existing protection',
  'Individuals planning long-term goals',
];

const productExamples = [
  'New Jeevan Amar (955)',
  'Jeevan Umang (745)',
  'Yuva Term (875)',
];

const educationalCards = [
  'Importance of Life Insurance',
  'Starting Young',
  'Insurance as Part of Financial Planning',
  'Why an Advisor Can Help',
];

const faqs = [
  {
    question: 'What is life insurance?',
    answer: 'Life insurance is a protection tool intended to help address the financial consequences of an unexpected loss for dependents or other obligations. Requirements vary by individual circumstances.',
  },
  {
    question: 'Why might someone need life insurance?',
    answer: 'People often consider life insurance when they have dependents, financial commitments or a goal of protecting family stability during difficult periods.',
  },
  {
    question: 'How much life insurance should someone consider?',
    answer: 'There is no single answer. The appropriate level depends on responsibilities, income, liabilities and future goals, which is why an advisory conversation can be useful.',
  },
  {
    question: 'What is the difference between term insurance and other life insurance products?',
    answer: 'Different policy structures may serve different objectives. Some are designed around shorter-term protection, while others may be considered in the context of broader financial planning. Product features and terms vary.',
  },
  {
    question: 'Can an existing policy be reviewed?',
    answer: 'Yes. Existing protection can often be reviewed in the context of changing responsibilities, family needs and long-term planning.',
  },
  {
    question: 'What does an insurance advisor help with?',
    answer: 'An advisor can help explain coverage concepts, discuss relevant considerations, compare options and support the decision-making process without promising specific outcomes.',
  },
];

const extraSections = [
  <Section key="intro" label="Introduction" title="Your Partner in Protection, Planning & Peace of Mind" description="Life insurance can be part of a broader financial plan and may help address the protection needs connected with dependents, liabilities and long-term responsibilities.">
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {[
        'Financial protection for dependents',
        'Planning for long-term responsibilities',
        'Greater clarity around risk and coverage goals',
      ].map((item) => (
        <div key={item} className="card-surface p-6">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="why" label="Why it matters" title="Life insurance is about financial protection and planning" description="It can play a role where the financial consequences of an unexpected loss would be significant for family members or wider obligations.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {[
        ['Protection for dependents', 'It may help reduce the financial impact of loss on those who rely on you.'],
        ['Income replacement considerations', 'Families often review how day-to-day expenses and obligations may be affected.'],
        ['Protection against uncertainty', 'A well-informed discussion can help define the right level of coverage for a given situation.'],
        ['Long-term planning', 'Insurance can be considered alongside retirement, family goals and other future commitments.'],
      ].map(([title, text]) => (
        <div key={title} className="card-surface p-6">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="early" label="Starting early" title="Reviewing life insurance earlier may help with planning" description="A longer planning horizon can create more room to assess protection needs before responsibilities increase or financial commitments become more complex.">
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {[
        'Longer-term planning horizon',
        'Changing responsibilities over time',
        'Affordability and future protection review',
      ].map((item) => (
        <div key={item} className="card-surface p-6">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="planning" label="Financial planning" title="Life insurance works best as part of a wider financial plan" description="Insurance and investments serve different purposes. A balanced plan usually considers protection, savings, investments and long-term goals together.">
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-slate-700">
      Protection helps address life and family risk. Investments may support long-term financial goals. The goal is to understand these roles clearly and review them together rather than treating them as interchangeable.
    </div>
  </Section>,

  <Section key="support" label="Advisor support" title="How Anand can help with life insurance decisions" description="The advisory role is to guide, explain, compare and support decision-making in a clear and practical way.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {advisorSupport.map((item) => (
        <div key={item} className="card-surface p-6">
          <h3 className="text-lg font-bold text-slate-900">{item}</h3>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="who" label="Who it may be relevant for" title="Life insurance may be relevant for different life stages and responsibilities" description="The right conversation depends on your family situation, financial commitments and future goals.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {audienceCards.map((item) => (
        <div key={item} className="card-surface p-5">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="types" label="Coverage categories" title="Common life insurance categories discussed in advisory conversations" description="The categories below are educational examples, not a recommendation for every person.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {[
        'Term insurance',
        'Traditional or participating structures',
        'Whole-life-oriented protection',
        'Savings-oriented products',
      ].map((item) => (
        <div key={item} className="card-surface p-5">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="products" label="Product examples" title="Examples of life insurance products sometimes discussed" description="These names are provided only as general examples of product categories or plans that may be discussed during advisory guidance. Current features, eligibility and terms should be confirmed from official insurer documentation.">
    <div className="mt-8 flex flex-wrap gap-3">
      {productExamples.map((item) => (
        <span key={item} className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800">{item}</span>
      ))}
    </div>
  </Section>,

  <Section key="insights" label="Educational insights" title="A few themes for future guidance" description="The educational section can expand as more articles and advisory notes are added.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {educationalCards.map((item) => (
        <div key={item} className="card-surface p-5">
          <h3 className="text-lg font-bold text-slate-900">{item}</h3>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="faq" label="Frequently asked questions" title="Common questions people ask before exploring life insurance" description="These answers are educational and should be reviewed alongside official insurer terms and policy documents.">
    <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map(({ question, answer }) => (
        <div key={question} className="p-5">
          <h3 className="text-base font-bold text-slate-900">{question}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
        </div>
      ))}
    </div>
  </Section>,
];

const LifeInsurance = () => {
  return <ServiceDetailPage service={servicesData.lifeInsurance} extraSections={extraSections} />;
};

export default LifeInsurance;
