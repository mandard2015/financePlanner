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
        <section id='product' className="px-8 py-8">
            <style>{keyframes}</style>

            {/* Title */}
            <h3 className="text-center font-mono font-bold uppercase mb-6">Our Services</h3>

            {/* Tabs */}
            <div className="flex justify-center space-x-1 md:space-x-4 mb-8">
                {services.map(s => (
                    <button
                        key={s.key}
                        onClick={() => setActive(s.key)}
                        className={`px-4 py-2 font-medium rounded ${active === s.key ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                        {s.title}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto space-y-6">
                <h3 className="text-2xl font-semibold">{current.heading}</h3>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-2/3 space-y-4">
                        {current.description.map((p, i) => (
                            <p key={i} className="text-gray-700">{p}</p>
                        ))}
                        <ul className="list-disc list-inside space-y-1">
                            {current.items.map((item, i) => (<li key={i}>{item}</li>))}
                        </ul>
                    </div>
                    <div className="md:w-1/3 text-center">
                        <img
                            src={process.env.PUBLIC_URL + current.image}
                            alt={current.heading}
                            className="w-4/5 max-h-72 rounded-xl shadow-lg object-cover mx-auto"
                        />
                    </div>
                </div>
                <p className="font-semibold">{current.call}</p>
            </div>

            {/* Marquee Logos */}
            <div className="overflow-hidden my-12 md:mx-20">
                <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
                    {logos.concat(logos).concat(logos).map((logo, idx) => (
                        <div key={idx} className="mx-6 flex-shrink-0 w-36">
                            <img
                                src={process.env.PUBLIC_URL + logo.imageUrl}
                                alt={logo.name}
                                className="w-full h-28 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Counters */}
            <div className="bg-gradient-to-br from-blue-400 to-pink-500 text-white py-12 md:mx-20">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <h3 className="text-3xl font-bold"><CountUp end={19} duration={4} />+</h3>
                        <h4 className="mt-1">YEARS</h4>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold"><CountUp end={2000} duration={4} />+</h3>
                        <h4 className="mt-1">FAMILIES</h4>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold"><CountUp end={5000} duration={4} />+</h3>
                        <h4 className="mt-1">POLICIES</h4>
                    </div>
                    <div>
                        <h3 id="reviews" className="text-3xl font-bold"><CountUp end={65} duration={4} />+</h3>
                        <h4 className="mt-1">TEAM</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExp;
