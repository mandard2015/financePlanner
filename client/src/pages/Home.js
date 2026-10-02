import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

const serviceCards = [
  {
    title: 'Life Insurance / LIC',
    description: 'Explore life protection and long-term planning options for the people and responsibilities that matter to you.',
    image: '/images/lifeinsurance.jpg',
    to: '/services/life-insurance',
  },
  {
    title: 'Health Insurance / Mediclaim',
    description: 'Understand health-risk protection and find coverage options suited to your family’s needs.',
    image: '/images/healthinsurance.jpg',
    to: '/services/health-insurance',
  },
  {
    title: 'General Insurance',
    description: 'Get guidance for protecting vehicles, property, travel and other everyday financial risks.',
    image: '/images/geninsurance.jpg',
    to: '/services/general-insurance',
  },
  {
    title: 'Mutual Funds & Investments',
    description: 'Connect investment choices with your objectives, time horizon and understanding of market risk.',
    image: '/images/mutualfund.jpg',
    to: '/services/mutual-funds',
  },
];

const guidanceAreas = [
  ['01', 'Understand', 'Start with your responsibilities, concerns and financial goals.'],
  ['02', 'Plan', 'Bring protection and investment decisions into a clear, goal-based plan.'],
  ['03', 'Protect', 'Consider life, health and general insurance as part of your safety net.'],
  ['04', 'Support', 'Receive clear explanations and ongoing help as your needs change.'],
];

const testimonials = [
  {
    quote: 'Exceptional service from my financial advisor! He has strong expertise in insurance and mediclaim services.',
    name: 'Deshmukh',
    role: 'Financial Advisor',
  },
  {
    quote: 'Any time helpful.',
    name: 'M M. Dhamane',
    role: 'Manager',
  },
  {
    quote: 'Good advised',
    name: 'Balasaheb Chavan',
    role: 'sr. Software Engineer',
  },
];

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.97),rgba(36,63,110,0.82),rgba(15,23,42,0.3))]" />
        <div className="container-shell relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.1fr,0.9fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-brand-300/40 bg-brand-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">Anand Investments and Financial Solutions</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Anand Deshmukh <span className="block text-brand-300">Financial &amp; Insurance Advisor</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">Helping individuals and families make informed decisions about protection, health, financial goals and investments.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">Discuss your needs</Link>
              <Link to="/services" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">Explore services</Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-4">
              {[
                ['19+', 'Years of Experience'],
                ['2,000+', 'Families'],
                ['5,000+', 'Policies'],
                ['65+', 'Team'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="relative max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] border border-brand-200/20" />
              <img src="/images/self1.jpg" alt="Anand Deshmukh, financial and insurance advisor" className="relative h-[440px] w-full rounded-[1.5rem] object-cover object-top shadow-2xl" />
              <div className="absolute -bottom-6 -left-8 max-w-[220px] rounded-2xl border border-white/20 bg-slate-900/90 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-semibold text-brand-200">Personal guidance</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">Clear conversations for important financial decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section label="Meet your advisor" title="A practical approach to your financial needs" description="Anand Deshmukh helps clients understand their needs, consider suitable protection and connect financial decisions with the goals that matter to them.">
        <div className="mt-10 grid gap-8 md:grid-cols-[0.7fr,1.3fr] md:items-center">
          <img src="/images/self1.jpg" alt="Anand Deshmukh" loading="lazy" className="mx-auto h-72 w-full max-w-sm rounded-2xl object-cover object-top shadow-soft md:h-80" />
          <div className="space-y-5 text-slate-600">
            <p>From understanding insurance needs to thinking about children’s education, retirement and long-term financial concerns, the focus is on making complex choices easier to discuss.</p>
            <p>Recommendations begin with your situation. The aim is to explain options clearly and remain available for support after a policy or investment decision.</p>
            <Link to="/about" className="btn btn-secondary">Learn about Anand</Link>
          </div>
        </div>
      </Section>

      <section className="border-y border-slate-200 bg-white">
        <Section label="The guidance journey" title="Financial decisions with a clear purpose" description="A simple process helps connect everyday choices with protection and longer-term priorities.">
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guidanceAreas.map(([number, title, text]) => (
              <div key={title} className="border-l-2 border-brand-300 pl-5">
                <p className="text-sm font-bold text-brand-700">{number}</p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section label="Areas of guidance" title="Protection, planning, health and investments" description="Insurance and investments serve different purposes. Together, they can be considered as part of a thoughtful financial plan.">
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => <ServiceCard key={service.to} {...service} />)}
        </div>
        <div className="mt-8 text-center"><Link to="/services" className="btn btn-secondary">View all services</Link></div>
      </Section>

      <section className="bg-brand-900 text-white">
        <section className="container-shell py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center rounded-full border border-brand-300/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-100">Goal-based planning</p>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Your financial decisions should have a purpose.</h2>
            <p className="mt-4 text-base text-brand-100">Good conversations begin with real-life priorities, not a product list.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['Protect your family', 'Plan for children’s education', 'Prepare for retirement', 'Build long-term investments'].map((goal) => (
              <div key={goal} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-lg font-semibold">{goal}</p>
                <p className="mt-3 text-sm leading-6 text-brand-100">Understand the choices and trade-offs that may support this priority.</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Section label="Why work with me" title="Support that continues beyond the decision" description="The work is not only about selecting a policy or investment. It is about helping you understand the process and stay connected to your plan.">
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            ['Consultation', 'Listen to your situation and priorities.'],
            ['Risk assessment', 'Discuss the protection gaps that matter to you.'],
            ['Clear recommendations', 'Explain suitable options in straightforward language.'],
            ['Ongoing support', 'Help with reviews, questions and claims assistance.'],
          ].map(([title, text]) => (
            <div key={title} className="card-surface p-6">
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-slate-200 bg-slate-50">
        <Section label="Insurance and investments" title="Build a considered protection and investment picture" description="Life, health and general insurance can help address different risks. Mutual funds are market-linked investments and should be considered with an understanding of risk and objectives.">
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card-surface overflow-hidden md:flex">
              <img src="/images/health tab.jpg" alt="Health insurance guidance" loading="lazy" className="h-52 w-full object-cover md:h-auto md:w-2/5" />
              <div className="p-6"><h3 className="text-xl font-bold text-slate-900">Protect what matters</h3><p className="mt-3 text-sm leading-6 text-slate-600">Explore life, health and general insurance pathways based on your responsibilities and risks.</p><Link to="/services/life-insurance" className="mt-5 inline-flex font-semibold text-brand-700">Explore protection →</Link></div>
            </div>
            <div className="card-surface overflow-hidden md:flex">
              <img src="/images/mutualfund.jpg" alt="Mutual fund investment guidance" loading="lazy" className="h-52 w-full object-cover md:h-auto md:w-2/5" />
              <div className="p-6"><h3 className="text-xl font-bold text-slate-900">Plan for your goals</h3><p className="mt-3 text-sm leading-6 text-slate-600">Discuss goal-oriented investing and the role mutual funds may play within a broader plan.</p><Link to="/services/mutual-funds" className="mt-5 inline-flex font-semibold text-brand-700">Explore investments →</Link></div>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.</p>
        </Section>
      </section>

      <Section label="Client experiences" title="Helpful guidance, remembered" description="A small selection of feedback from the existing client review collection.">
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="card-surface flex h-full flex-col justify-between p-6">
              <blockquote className="text-base leading-7 text-slate-700">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4"><p className="font-semibold text-slate-900">{testimonial.name}</p><p className="text-sm text-slate-500">{testimonial.role}</p></figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/reviews" className="btn btn-secondary">View all reviews</Link></div>
      </Section>

      <section className="border-y border-slate-200 bg-white">
        <Section label="Insights" title="Financial conversations start with good questions" description="Educational insights on insurance, health coverage, planning and investments will be collected here as the blog develops.">
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:flex-row sm:items-center"><p className="max-w-2xl text-sm leading-6 text-slate-700">Visit the insights area for future educational updates from Anand Investments and Financial Solutions.</p><Link to="/blogs" className="btn btn-secondary shrink-0">Visit insights</Link></div>
        </Section>
      </section>

      <CTASection eyebrow="Start with a conversation" title="Let’s discuss your financial and insurance needs" description="Whether you are considering protection, health coverage, investment planning or an important financial goal, the first step is understanding your needs." primaryLabel="Get in touch" primaryTo="/contact" secondaryLabel="Explore services" secondaryTo="/services" />
    </div>
  );
};

export default Home;
