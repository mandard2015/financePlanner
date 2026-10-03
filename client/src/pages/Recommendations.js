import React from 'react';
import Section from '../components/Section';

const observations = [
  {
    title: 'Current market observations',
    summary: 'The market environment changes with interest rates, insurer product revisions and broader macroeconomic conditions. Product relevance depends on the client’s goals, age profile and financial circumstances.',
  },
  {
    title: 'Product / category watchlist',
    summary: 'Insurance and mutual fund categories are reviewed based on current product lifecycle, feature changes and suitability for different planning needs rather than static popularity alone.',
  },
  {
    title: 'Official sources matter',
    summary: 'Policy brochures, insurer documents, AMFI product literature and regulatory disclosures remain the clearest source of factual information about features, costs and risks.',
  },
];

const comparisonPoints = [
  'Product purpose and risk profile',
  'Premium cost, term and coverage structure',
  'Policy exclusions, waiting periods and claims conditions',
  'Investment objective, time horizon and market risk',
  'Liquidity, flexibility and servicing convenience',
  'Role of regular review as life circumstances change',
];

const Recommendations = () => {
  return (
    <div className="bg-slate-50 pb-20">
      <section className="pt-28 pb-14">
        <div className="container-shell">
          <p className="section-label">Market &amp; product insights</p>
          <h1 className="section-heading text-4xl sm:text-5xl">A careful view of market developments and product categories</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            This section is designed as a practical watchlist for product categories and market themes, not a promise of returns, popularity rankings or guaranteed performance.
          </p>
        </div>
      </section>

      <Section label="Current view" title="What matters when reviewing products or categories" description="The most useful approach is to look at product purpose, risk, suitability and real client circumstances instead of relying on broad claims or trends alone.">
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {observations.map((item) => (
            <div key={item.title} className="card-surface p-6">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{item.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="section-label">Product comparison</p>
            <h2 className="section-heading">Things to compare before choosing a plan</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparisonPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section label="Important note" title="No guarantee of returns or superiority" description="Market popularity, past performance and product availability are not guarantees of future outcomes. Investment-linked products remain subject to market risk and should be reviewed with a clear understanding of risk, cost and suitability.">
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-slate-700">
          The content in this section is educational and informational. It is intended to support informed discussions and better comparison, not to present any product as a guaranteed-safe or guaranteed-return option.
        </div>
      </Section>
    </div>
  );
};

export default Recommendations;
