import React from 'react';

const Disclaimer = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Financial & Insurance Disclaimer</h1>
      <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
        <p>
          The content published on this website is intended for general educational and informational purposes.
          It is not a substitute for official product documentation, insurer terms, scheme documents or individualized
          professional advice.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">Insurance</h2>
        <p>
          Insurance policy features, eligibility, exclusions, waiting periods, benefits, terms and conditions vary by
          insurer and policy. Coverage depends on the specific product, the information provided by the applicant and
          the policy documentation issued by the insurer. Claims are subject to the applicable policy wording and the
          insurer’s processes and approvals.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">Mutual funds and investments</h2>
        <p>
          Mutual fund investments are subject to market risks. Past performance does not guarantee future results.
          Returns may fluctuate, and investors should review the relevant scheme documents, risk factors and product
          disclosures before investing. The website is not providing investment advice or a guarantee of returns.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">Financial planning</h2>
        <p>
          General financial planning information on this website is educational and may not be suitable for all
          individuals or circumstances. Personal needs, goals, time horizon, risk tolerance and financial situations
          differ, so any planning discussion should be based on individual circumstances and official product details.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">No guaranteed outcomes</h2>
        <p>
          This website does not promise or guarantee approval, claim settlement, tax benefits, investment returns,
          policy outcomes or financial results. Any reference to planning, guidance or suitable options should be read
          as general educational information and not as a promise of specific results.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">Official documents</h2>
        <p>
          Official insurer documents, scheme information documents, policy wording, benefit illustrations and other
          formal literature should be consulted before making a final product or investment decision.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
