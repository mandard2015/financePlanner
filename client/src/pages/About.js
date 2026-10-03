import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const stats = [
  ['19+', 'Years of Experience'],
  ['2,000+', 'Families'],
  ['5,000+', 'Policies'],
  ['65+', 'Team'],
];

const approach = [
  {
    title: 'Listen first',
    description: 'Every conversation starts with your responsibilities, what matters to your family, and the decisions you want to understand better.',
  },
  {
    title: 'Explain clearly',
    description: 'Insurance and investment options are discussed in practical language so clients can compare choices without confusion.',
  },
  {
    title: 'Review regularly',
    description: 'Life priorities change over time. Guidance is most useful when it is revisited as family needs and financial goals evolve.',
  },
];

const guidanceAreas = [
  'Financial Planning',
  'Life Insurance / LIC',
  'Health Insurance / Mediclaim',
  'General Insurance',
  'Mutual Funds / Investments',
  'Ongoing Client Guidance',
];

const awardHighlights = [
  {
    title: 'AMFI',
    detail: 'Association of Mutual Funds in India — a relevant professional association in the investment and mutual fund space.',
  },
  {
    title: 'LIC recognition',
    detail: 'Recognition connected with the life insurance sector and advisory service in financial and protection planning.',
  },
  {
    title: 'Health insurance recognition',
    detail: 'Professional recognition connected with health insurance and advisory service for families and policy planning.',
  },
];

const About = () => {
  return (
    <div className="bg-slate-50">
      <section className="pt-28 pb-16">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="section-label">About</p>
              <h1 className="section-heading text-4xl sm:text-5xl">Anand Deshmukh</h1>
              <p className="mt-4 text-2xl font-semibold text-brand-700">Financial &amp; Insurance Advisor</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Anand Deshmukh helps individuals and families understand important decisions around protection, health coverage, long-term planning and investments. The focus is on practical advice, clear explanations and ongoing support rather than pressure-driven sales.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary">Book a consultation</Link>
                <Link to="/services" className="btn btn-secondary">Explore services</Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
              <img src="/images/self1.jpg" alt="Anand Deshmukh, financial and insurance advisor" className="h-[440px] w-full rounded-[1.5rem] object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-10">
        <div className="container-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <p className="text-3xl font-bold text-brand-700">{value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section label="Who is Anand Deshmukh?" title="A people-first advisor for practical financial conversations" description="The intent is not to overwhelm clients with complexity. It is to help them understand the right conversations to have at the right time.">
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card-surface p-6">
            <p className="text-base leading-7 text-slate-700">
              Anand Deshmukh works with families and individuals who want guidance related to insurance protection, financial planning and goal-based decision making. This includes conversations around life insurance, health cover, general risk protection, mutually beneficial long-term planning, and support during key life stages.
            </p>
          </div>
          <div className="card-surface p-6">
            <p className="text-base leading-7 text-slate-700">
              The focus is on understanding real priorities such as family security, children’s milestones, healthcare protection, retirement comfort and investment clarity. Advice is framed as practical guidance, not as a promise of returns or guaranteed outcomes.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="section-label text-brand-200">Advisory philosophy</p>
            <h2 className="section-heading text-white">Clear guidance rooted in real needs and long-term thinking</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {approach.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section label="Areas of guidance" title="Support across protection, planning and investment conversations" description="The role is to simplify complex decisions, explain relevant options and help clients make better-informed next steps.">
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guidanceAreas.map((area) => (
            <div key={area} className="card-surface p-5 text-center">
              <p className="text-lg font-semibold text-slate-900">{area}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-white py-16">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="section-label">Credentials &amp; recognition</p>
            <h2 className="section-heading">Professional context and associations</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-soft">
              <img src="/images/AMFI.png" alt="AMFI logo and Association of Mutual Funds in India" className="w-full rounded-2xl bg-white p-4" />
            </div>

            <div className="space-y-4">
              <div className="card-surface p-6">
                <p className="text-base leading-7 text-slate-700">
                  AMFI — Association of Mutual Funds in India. This is a relevant professional association for financial guidance and client discussions around mutual fund and investment planning.
                </p>
              </div>
              <div className="card-surface p-6">
                <p className="text-base leading-7 text-slate-700">
                  The exact individual credential number or formal registration detail was not clearly readable in the available source material, so it is not stated here beyond the verified association context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="section-label">Recognition</p>
            <h2 className="section-heading">Awards and professional appreciation</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {awardHighlights.map((item) => (
              <div key={item.title} className="card-surface p-6">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section label="Client support" title="Guidance that continues beyond the initial discussion" description="The relationship is often more useful when it continues after the policy or investment decision is made.">
        <div className="mt-10 flex flex-col gap-5 md:flex-row">
          <div className="card-surface flex-1 p-6">
            <h3 className="text-xl font-bold text-slate-900">Product understanding</h3>
            <p className="mt-3 text-base leading-7 text-slate-700">Clients benefit from explanations of coverage structures, benefit logic, exclusions, documentation requirements and ongoing servicing needs.</p>
          </div>
          <div className="card-surface flex-1 p-6">
            <h3 className="text-xl font-bold text-slate-900">Policy &amp; planning reviews</h3>
            <p className="mt-3 text-base leading-7 text-slate-700">As responsibilities change, the guidance may include reassessing risk cover, planning priorities and whether current choices still match the family’s needs.</p>
          </div>
        </div>
      </Section>

      <div className="container-shell pb-20 pt-6">
        <Link to="/contact" className="btn btn-primary">Start a conversation</Link>
      </div>
    </div>
  );
};

export default About;
