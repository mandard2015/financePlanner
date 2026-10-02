import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';
import Section from '../components/Section';
import servicesData from '../data/servicesData';

const advisorSupport = [
  'Requirement assessment',
  'Policy recommendations',
  'Policy review',
  'Renewal guidance',
  'Claims assistance',
  'Ongoing support',
];

const generalCategories = [
  'Motor Insurance',
  'Property / Home-related Insurance',
  'Travel Insurance',
  'Personal Accident Insurance',
  'Business and commercial risk cover',
  'Other relevant general-insurance categories',
];

const whatToConsider = [
  'Coverage',
  'Exclusions',
  'Deductibles',
  'Policy limits',
  'Renewal conditions',
  'Claim process',
];

const faqs = [
  {
    question: 'What is general insurance?',
    answer: 'General insurance covers non-life risks, which may include vehicle, property, travel, personal accident or other relevant protection needs depending on the situation.',
  },
  {
    question: 'Why should someone review general insurance coverage?',
    answer: 'Circumstances change over time. Asset values, travel, business needs and personal risk factors can all evolve, which makes regular review useful.',
  },
  {
    question: 'What should be checked before taking cover?',
    answer: 'Coverage needs, exclusions, policy limits, deductible structure, renewal conditions and claim process are all important areas to review.',
  },
  {
    question: 'Can an existing policy be reviewed?',
    answer: 'Yes. Existing general-insurance cover can often be reassessed in relation to current assets, obligations and risk exposure.',
  },
  {
    question: 'What does an advisor help with?',
    answer: 'An advisor can support discussions around which risks may be relevant, explain policy terms in simpler language and help compare options before a decision is made.',
  },
];

const extraSections = [
  <Section key="intro" label="Introduction" title="General insurance can help protect personal and business exposure" description="General insurance covers a range of non-life risks, and the relevant categories depend on the assets, activities and responsibilities involved.">
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-slate-700">
      Not every risk is the same. The goal is to identify which areas matter most to you and understand whether the protection structure matches your current circumstances.
    </div>
  </Section>,

  <Section key="areas" label="Coverage categories" title="Common categories in general insurance" description="The categories below are examples of general-insurance areas that may be relevant depending on your circumstances.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {generalCategories.map((item) => (
        <div key={item} className="card-surface p-5">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="review" label="Why review coverage" title="Protection needs can change over time" description="It is often helpful to review general insurance when your circumstances shift or when policy terms need re-checking.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {[
        ['Changing circumstances', 'New financial responsibilities, life stages or asset values can affect what protection is needed.'],
        ['Asset changes', 'The value and type of assets you own may change the type of cover you want to review.'],
        ['Travel or business needs', 'Frequent travel, work activity and personal obligations can create different protection requirements.'],
        ['Renewals and conditions', 'Policy wording, renewal terms and exclusions may deserve a fresh review over time.'],
      ].map(([title, text]) => (
        <div key={title} className="card-surface p-6">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="support" label="Advisor support" title="How Anand can help with general insurance decisions" description="General insurance can involve several categories, so a clear conversation can help focus on the right questions and the right cover.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {advisorSupport.map((item) => (
        <div key={item} className="card-surface p-6">
          <h3 className="text-lg font-bold text-slate-900">{item}</h3>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="consider" label="What to consider" title="A practical checklist before choosing cover" description="The right comparison depends on the type of risk, the value involved and the policy terms offered.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {whatToConsider.map((item) => (
        <div key={item} className="card-surface p-5">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="faq" label="Frequently asked questions" title="Common questions around general insurance" description="These are general informational answers and should be reviewed alongside the actual policy wording and insurer documents.">
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

const GeneralInsurance = () => {
  return <ServiceDetailPage service={servicesData.generalInsurance} extraSections={extraSections} />;
};

export default GeneralInsurance;
