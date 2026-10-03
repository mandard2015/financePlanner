import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const articles = [
  {
    title: 'How goal-based financial planning works',
    excerpt: 'Financial planning becomes easier to follow when goals are clear. Whether the aim is education, retirement, family protection or lifestyle goals, the process starts with priorities and time horizons.',
    readTime: '4 min read',
    tag: 'Financial Planning',
  },
  {
    title: 'Why starting early matters for life insurance',
    excerpt: 'Age, health profile and underwriting are important factors in insurance planning. Starting early can make the conversation more proactive and help you understand how your profile may influence premiums and eligibility.',
    readTime: '5 min read',
    tag: 'Life Insurance',
  },
  {
    title: 'Life insurance as part of a broader financial plan',
    excerpt: 'Life insurance is best viewed as a protection component within a wider financial plan. It can help protect dependents and reduce the risk of financial disruption when life circumstances change.',
    readTime: '6 min read',
    tag: 'Life Insurance',
  },
  {
    title: 'Why health insurance still matters with employer coverage',
    excerpt: 'Employer plans can provide useful cover, but they may not always match a family’s full healthcare needs. Reviewing the scope, exclusions and adequacy of cover is a practical step before relying only on one policy.',
    readTime: '5 min read',
    tag: 'Health Insurance',
  },
  {
    title: 'General insurance reviews are often more useful than renewal by habit',
    excerpt: 'Vehicle, property and travel covers may need review when life circumstances change. Reviewing coverage, exclusions and policy terms can help avoid paying for insufficient protection or renewing without review.',
    readTime: '4 min read',
    tag: 'General Insurance',
  },
  {
    title: 'SIP basics and long-term investing discipline',
    excerpt: 'Systematic investment plans can help bring consistency to investing, but they should be reviewed in the context of risk, time horizon and financial goals. Market-linked instruments carry risk and need informed planning.',
    readTime: '6 min read',
    tag: 'Mutual Funds',
  },
  {
    title: 'What to compare before choosing a policy or investment',
    excerpt: 'A practical review looks at purpose, terms, exclusions, risk, affordability and servicing needs. Product comparison becomes more meaningful when it is tied to your real goals and responsibilities.',
    readTime: '5 min read',
    tag: 'Advice',
  },
  {
    title: 'The role of an insurance advisor in planning and servicing',
    excerpt: 'An advisor can help with needs assessment, product comparison, clarification of policy features, documentation guidance and periodic review. The aim is better understanding and smoother decision-making.',
    readTime: '5 min read',
    tag: 'Advisory',
  },
];

const Blogs = () => {
  return (
    <div className="bg-slate-50 pb-20">
      <section className="pt-28 pb-14">
        <div className="container-shell">
          <p className="section-label">Insights</p>
          <h1 className="section-heading text-4xl sm:text-5xl">Insurance, planning and investment insights</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Educational content that helps clients understand insurance basics, planning priorities and the difference between protection, investments and long-term financial decisions.
          </p>
        </div>
      </section>

      <Section label="Featured articles" title="Practical reading for real-life decisions" description="Each article is designed as a concise educational resource. Product details, exclusions, taxes and underwriting vary by policy and insurer, so the focus is on understanding key concepts before making a decision.">
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.title} className="card-surface flex h-full flex-col p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand-700">{article.tag}</span>
                <span className="text-sm text-slate-500">{article.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{article.title}</h2>
              <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{article.excerpt}</p>
              <Link to="/contact" className="mt-6 inline-flex font-semibold text-brand-700">Discuss this topic with Anand →</Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blogs;
