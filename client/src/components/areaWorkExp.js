import React, { useState } from 'react';
import CountUp from 'react-countup';

const logos = [
    { id: 1, name: "LIC India", imageUrl: "/images/lic.png" },
    { id: 2, name: "New India Assurance", imageUrl: "/images/NIA_logo.png" },
    { id: 3, name: "Star Health And Allied Insurance", imageUrl: "/images/StarHealth.png" },
    { id: 4, name: "Association of Mutual Funds in India", imageUrl: "/images/AMFI.png" },
];

const keyframes = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}`;

const services = [
    {
        key: 'lic',
        title: 'LIC',
        heading: 'LIC - Life Insurance Corporation of India',
        image: '/images/lictab.jpg',
        items: [
            'Term insurance comparisons',
            'Long-term family protection planning',
            'Education and milestone planning conversations',
            'Retirement and lifestyle planning discussions',
            'Policy features and terms review',
            'Insurance planning relevance assessment',
        ],
        description: [
            'Life insurance plans may serve different needs depending on your responsibilities, income profile and long-term goals. Product details, features, premiums and exclusions vary by insurer and policy type.',
            'A practical discussion starts with understanding your situation and the protection objectives you want to address before comparing policy options.',
        ],
        call: 'Discuss your life insurance priorities with Anand Deshmukh.',
    },
    {
        key: 'starHealth',
        title: 'Star Health',
        heading: 'Star Health',
        image: '/images/health tab.jpg',
        items: [
            'Individual and family health cover discussions',
            'Hospitalisation and medical-expense planning',
            'Policy features and exclusions review',
            'Waiting periods and network considerations',
            'Age and health profile discussions',
            'Ongoing cover review support',
        ],
        description: [
            'Health insurance choices typically depend on your medical history, family needs, budget and the level of coverage you want to plan for. Policy terms, exclusions and eligibility can vary significantly.',
            'The goal is to understand your healthcare priorities clearly and discuss suitable options in a practical, informed way.',
        ],
        call: 'Discuss your health insurance requirements with Anand Deshmukh.',
    },
    {
        key: 'generalInsurance',
        title: 'New India Assurance',
        heading: 'New India Assurance',
        image: '/images/general tab.jpg',
        items: [
            'Motor and asset protection discussions',
            'Property and household-risk conversations',
            'Travel and personal accident considerations',
            'Business and liability-related risk review',
            'Policy terms, exclusions and claim conditions',
            'Ongoing protection review support',
        ],
        description: [
            'General insurance can cover non-life risks such as vehicles, property, travel and day-to-day obligations, depending on the situation. Coverage terms, exclusions and claim conditions vary by product and insurer.',
            'A clearer review helps identify what risks are relevant and whether the protection structure still matches your current responsibilities.',
        ],
        call: 'Discuss your general insurance requirements with Anand Deshmukh.',
    },
    {
        key: 'mutualFunds',
        title: 'Mutual Funds',
        heading: 'Mutual Funds Advisor',
        image: '/images/geninsurance.jpg',
        items: [
            'Equity Funds.',
            'Debt Funds.',
            'Money Market Funds.',
            'Hybrid Funds.',
            'Growth Funds.',
            'Liquid Funds.',
            'Tax-Saving Funds.',
        ],
        description: [
            'A mutual fund is a professionally managed investment that pools money from many investors.',
            'Mutual funds involve market risks, and one should consult a Mutual Fund Consultant before investing.',
        ],
        call: 'Ready to invest wisely? Call us at 9011094170 to schedule a consultation.',
    },
];

const WorkExp = () => {
    const [active, setActive] = useState('lic');

    const current = services.find(s => s.key === active);

    return (
        <section id='product' className="scroll-mt-24 py-14">
            <style>{keyframes}</style>
            <div className="container-shell">
                <div className="mb-8 text-center">
                    <p className="section-label">Our services</p>
                    <h2 className="section-heading">Insurance and financial guidance</h2>
                </div>

                <div className="mb-8 flex flex-wrap justify-center gap-3">
                    {services.map(s => (
                        <button
                            key={s.key}
                            onClick={() => setActive(s.key)}
                            className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${active === s.key ? 'bg-brand-700 text-white shadow-soft' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                        >
                            {s.title}
                        </button>
                    ))}
                </div>

                <div className="card-surface overflow-hidden bg-white p-6 sm:p-8">
                    <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                        <h3 className="text-2xl font-bold text-slate-900">{current.heading}</h3>
                    </div>
                    <div className="grid gap-8 md:grid-cols-[1.6fr,0.9fr] md:items-center">
                        <div className="space-y-4 text-slate-600">
                            {current.description.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                            <ul className="list-disc space-y-2 pl-5 text-slate-700">
                                {current.items.map((item, i) => (<li key={i}>{item}</li>))}
                            </ul>
                            <p className="font-semibold text-slate-800">{current.call}</p>
                        </div>
                        <div className="text-center">
                            <img
                                src={process.env.PUBLIC_URL + current.image}
                                alt={current.heading}
                                className="mx-auto h-64 w-full max-w-[280px] rounded-2xl object-cover shadow-soft"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 overflow-hidden bg-slate-100 py-8">
                <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
                    {logos.concat(logos).concat(logos).map((logo, idx) => (
                        <div key={idx} className="mx-6 w-36 flex-shrink-0">
                            <img
                                src={process.env.PUBLIC_URL + logo.imageUrl}
                                alt={logo.name}
                                className="h-28 w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-14 bg-gradient-to-r from-brand-700 to-brand-900 py-12 text-white">
                <div className="container-shell grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                    <div>
                        <h3 className="text-3xl font-bold">Guidance</h3>
                        <h4 className="mt-1 text-sm uppercase tracking-[0.12em] text-brand-100">Planning</h4>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">Protection</h3>
                        <h4 className="mt-1 text-sm uppercase tracking-[0.12em] text-brand-100">Cover</h4>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">Review</h3>
                        <h4 className="mt-1 text-sm uppercase tracking-[0.12em] text-brand-100">Options</h4>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">Support</h3>
                        <h4 className="mt-1 text-sm uppercase tracking-[0.12em] text-brand-100">Clarity</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExp;
