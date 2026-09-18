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
            'Term Insurance refund of Premium',
            'Guaranteed tax-free Life time Money Back',
            'Pension For Lifetime',
            'Children Education Provision',
            'Daughter Marriage Provision',
            'Jeevan Labh',
        ],
        description: [
            'LIC is a leading life insurance provider with a legacy of trust and reliability. Our diverse range of insurance products ensures financial security for you and your family. From traditional life insurance plans to investment-linked policies, LIC has something for everyone.',
            'Explore our products and secure your future with LIC. Contact us today for personalized advice and the best insurance solutions for your needs.',
        ],
        call: 'Ready to safeguard your future? Call us at 9011094170 to get started.',
    },
    {
        key: 'starHealth',
        title: 'Star Health',
        heading: 'Star Health',
        image: '/images/health tab.jpg',
        items: [
            'Arogya Sanjeevani',
            'Young Star Insurance Policy',
            'Family Accident Care Insurance Policy',
            'Star Super Surplus Insurance Policy',
            'Senior Citizens Red Carpet Health Insurance Policy',
            'Medi Classic Insurance Policy (Individual)',
        ],
        description: [
            'Star Health is a leading health insurance provider committed to ensuring your well-being. Our comprehensive health insurance plans cover medical expenses, hospitalization, and more. With a focus on customer-centric solutions, Star Health strives to provide the best healthcare coverage.',
            'Discover the benefits of our health insurance plans and prioritize your health. Connect with us today for expert advice and a personalized health insurance plan.',
        ],
        call: 'Take the first step towards a healthier life. Call us at 9011094170 for more details.',
    },
    {
        key: 'generalInsurance',
        title: 'New India Assurance',
        heading: 'New India Assurance',
        image: '/images/general tab.jpg',
        items: [
            'Household Insurance',
            'Car Insurance',
            'Personal Accident Policy',
            'WC Policy',
            'Fire Policy',
            'Mediclaim',
            'Shopkeeper Policy',
        ],
        description: [
            'New India Assurance is a trusted general insurance provider known for its comprehensive range of insurance products. Our offerings include motor insurance, property insurance, travel insurance, and more. With a commitment to customer satisfaction, we provide tailored insurance solutions.',
            'Protect your assets and secure your travels with New India Assurance. Contact us for expert guidance and reliable insurance coverage.',
        ],
        call: 'Safeguard what matters to you. Call us at 9011094170 to discuss your insurance needs.',
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
                        <h3 className="text-3xl font-bold"><CountUp end={19} duration={4} />+</h3>
                        <h4 className="mt-1 text-sm uppercase tracking-[0.12em] text-brand-100">Years</h4>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold"><CountUp end={2000} duration={4} />+</h3>
                        <h4 className="mt-1 text-sm uppercase tracking-[0.12em] text-brand-100">Families</h4>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold"><CountUp end={5000} duration={4} />+</h3>
                        <h4 className="mt-1 text-sm uppercase tracking-[0.12em] text-brand-100">Policies</h4>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold"><CountUp end={65} duration={4} />+</h3>
                        <h4 className="mt-1 text-sm uppercase tracking-[0.12em] text-brand-100">Team</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExp;
