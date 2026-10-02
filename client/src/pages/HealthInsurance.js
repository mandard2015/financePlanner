import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';
import Section from '../components/Section';
import servicesData from '../data/servicesData';

const advisorSupport = [
  'Understanding health and family requirements',
  'Comparing relevant coverage considerations',
  'Policy recommendations',
  'Policy review and renewal guidance',
  'Claims assistance',
  'Ongoing guidance',
];

const whoMayConsider = [
  'Individuals',
  'Families',
  'Working professionals',
  'Parents and caregivers',
  'People reviewing existing coverage',
  'People planning for medical contingencies',
];

const considerations = [
  'Coverage requirements',
  'Sum insured',
  'Exclusions',
  'Waiting periods',
  'Network hospitals',
  'Renewal terms',
  'Policy conditions',
];

const faqs = [
  {
    question: 'What is health insurance?',
    answer: 'Health insurance is intended to help manage the financial impact of medical expenses, including hospitalisation and treatment-related costs depending on the policy terms.',
  },
  {
    question: 'What is Mediclaim?',
    answer: 'Mediclaim is a commonly used term for health insurance or medical-expense cover. It can be used to help plan for unexpected healthcare expenses as part of a broader protection strategy.',
  },
  {
    question: 'What should someone review before choosing a policy?',
    answer: 'Coverage needs, family requirements, exclusions, waiting periods, sum insured and policy conditions are important areas to understand before making a decision.',
  },
  {
    question: 'Can an existing policy be reviewed?',
    answer: 'Yes. Existing policies can be reviewed periodically to assess whether they still match current health, family and financial priorities.',
  },
  {
    question: 'What does an advisor help with?',
    answer: 'An advisor can explain coverage concepts, compare considerations, discuss policy suitability and support a more informed decision-making process.',
  },
];

const extraSections = [
  <Section key="intro" label="Introduction" title="Health insurance is about being prepared for medical expenses" description="Health insurance can support a more prepared approach to healthcare costs, especially when unexpected treatment or hospitalisation needs arise.">
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-slate-700">
      A health insurance discussion is not only about a policy document. It is about understanding your coverage needs, your family situation and the protection you may want in place before a medical event occurs.
    </div>
  </Section>,

  <Section key="why" label="Why it matters" title="Medical costs can create financial pressure" description="Unexpected healthcare expenses can affect savings, income and day-to-day planning. Health insurance is one way to help build a safety net around those risks.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {[
        ['Unexpected expenses', 'Hospitalisation or treatment costs can become significant without adequate preparation.'],
        ['Family protection', 'A family health plan may help reduce the stress of medical costs on household finances.'],
        ['Planning ahead', 'Insurance can help you prepare more calmly rather than reacting only after a medical event.'],
        ['More informed decisions', 'Understanding coverage options can make the process easier to navigate.'],
      ].map(([title, text]) => (
        <div key={title} className="card-surface p-6">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="who" label="Who may consider it" title="Health insurance may be relevant to many life stages" description="The right fit depends on your health history, family situation and the level of medical protection you want to plan for.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {whoMayConsider.map((item) => (
        <div key={item} className="card-surface p-5">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="support" label="Advisor support" title="How Anand can help with health insurance decisions" description="The role is to explain the process clearly and help identify which considerations matter most to your situation.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {advisorSupport.map((item) => (
        <div key={item} className="card-surface p-6">
          <h3 className="text-lg font-bold text-slate-900">{item}</h3>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="consider" label="What to consider" title="Important areas to review before choosing cover" description="The best policy depends on your situation, coverage goals, and the policy terms you are comparing.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {considerations.map((item) => (
        <div key={item} className="card-surface p-5">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="review" label="Existing coverage review" title="Reviewing existing health cover can be useful over time" description="As family responsibilities, income or healthcare needs change, a policy review can help ensure the current cover still matches your circumstances.">
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-slate-700">
      A periodic review is often useful when circumstances change, whether due to family expansion, income changes, or changing healthcare needs. It helps keep the conversation practical and relevant.
    </div>
  </Section>,

  <Section key="faq" label="Frequently asked questions" title="Common questions around health insurance and mediclaim" description="These answers are educational and should be reviewed alongside the actual policy terms, exclusions and insurer documentation.">
    <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map(({ question, answer }) => (
        <div key={question} className="p-5">
          <h3 className="text-base font-bold text-slate-900">{question}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="disclaimer" label="Important note" title="Policy terms vary" description="Actual coverage depends on policy wording, exclusions, waiting periods, renewal conditions and insurer documentation.">
    <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6 text-sm leading-6 text-slate-700">
      Health insurance requirements vary by individual circumstances. Policy documents and insurer terms should be reviewed carefully before making a decision.
    </div>
  </Section>,
];

const HealthInsurance = () => {
  return <ServiceDetailPage service={servicesData.healthInsurance} extraSections={extraSections} />;
};

export default HealthInsurance;
