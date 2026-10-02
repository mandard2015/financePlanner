import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';
import Section from '../components/Section';
import servicesData from '../data/servicesData';

const investmentGoals = [
  'Long-term wealth goals',
  'Education planning',
  'Retirement planning',
  'Major future expenses',
  'Other defined financial goals',
];

const riskPoints = [
  'Mutual funds are market-linked investments.',
  'Values can move up or down over time.',
  'Risk can vary by scheme and category.',
  'Past performance does not guarantee future results.',
  'Suitability depends on goals, time horizon and risk tolerance.',
];

const fundCategories = [
  'Equity funds',
  'Debt funds',
  'Hybrid funds',
  'Tax-saving and liquid funds',
];

const advisorSupport = [
  'Understanding goals and time horizon',
  'Risk assessment',
  'Investment planning discussions',
  'Reviewing existing investments',
  'Goal-based planning',
  'Ongoing reviews and guidance',
];

const investmentProcess = [
  'Understand the goal',
  'Discuss the time horizon',
  'Understand risk considerations',
  'Evaluate suitable investment options',
  'Review periodically',
];

const faqs = [
  {
    question: 'What is a mutual fund?',
    answer: 'A mutual fund pools money from multiple investors and invests it in a basket of securities, depending on the scheme mandate and investment objective.',
  },
  {
    question: 'Are mutual funds risk-free?',
    answer: 'No. Mutual fund investments are market-linked and can rise or fall in value depending on market conditions, fund strategy and other factors.',
  },
  {
    question: 'What is a SIP?',
    answer: 'A SIP is a systematic investment plan where a fixed amount may be invested periodically. It is a disciplined way to invest, but it does not reduce market risk.',
  },
  {
    question: 'What factors should an investor consider?',
    answer: 'Investment objectives, time horizon, risk tolerance, liquidity needs and the scheme information are all relevant areas to review before choosing an approach.',
  },
  {
    question: 'Why review investments periodically?',
    answer: 'Financial priorities and market conditions can change over time. Regular reviews help ensure the portfolio aligns with current goals and circumstances.',
  },
  {
    question: 'What does an advisor help with?',
    answer: 'An advisor can help explain objective-setting, risk considerations and the general investment process, without guaranteeing outcomes or future returns.',
  },
];

const extraSections = [
  <Section key="intro" label="Introduction" title="Mutual funds can be part of a broader investment strategy" description="Mutual funds are one tool used in investment planning. Their relevance depends on the investor’s goals, investment horizon and comfort with market risk.">
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-slate-700">
      A thoughtful approach starts with the objective. The purpose is not to chase immediate outcomes but to align investments with long-term financial goals and personal circumstances.
    </div>
  </Section>,

  <Section key="goals" label="Goal-based planning" title="Investment decisions are easier to think about when tied to real goals" description="Examples may include education planning, retirement planning, major future expenses or other long-term objectives.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {investmentGoals.map((item) => (
        <div key={item} className="card-surface p-5">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="risk" label="Understanding risk" title="Investment risk needs to be understood clearly" description="Mutual funds are market-linked and their values can move up or down. The appropriate level of risk depends on objectives, time horizon and risk tolerance.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {riskPoints.map((item) => (
        <div key={item} className="card-surface p-6">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
    <p className="mt-8 text-sm text-slate-500">Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.</p>
  </Section>,

  <Section key="categories" label="Common categories" title="Mutual funds can be grouped into broad categories" description="The scheme category should be considered in the context of the investor’s objectives and risk comfort.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {fundCategories.map((item) => (
        <div key={item} className="card-surface p-5">
          <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="support" label="Advisor support" title="How Anand can help with investment planning" description="The advisory process focuses on understanding goals, risk, and the wider financial picture before discussing suitable options.">
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {advisorSupport.map((item) => (
        <div key={item} className="card-surface p-6">
          <h3 className="text-lg font-bold text-slate-900">{item}</h3>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="process" label="Investment process" title="A simple process for investment discussions" description="A disciplined, goal-based process often helps keep conversations practical and focused.">
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {investmentProcess.map((step, index) => (
        <div key={step} className="border-l-2 border-brand-300 pl-5">
          <p className="text-sm font-bold text-brand-700">0{index + 1}</p>
          <h3 className="mt-2 text-base font-bold text-slate-900">{step}</h3>
        </div>
      ))}
    </div>
  </Section>,

  <Section key="faq" label="Frequently asked questions" title="Common questions about mutual funds and investment planning" description="These are educational answers and should be reviewed alongside the relevant scheme documents and risk disclosures.">
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

const MutualFunds = () => {
  return <ServiceDetailPage service={servicesData.mutualFunds} extraSections={extraSections} />;
};

export default MutualFunds;
