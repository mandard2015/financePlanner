import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ServiceSlider = () => {
    const slides = [
        {
            title: 'Life Insurance',
            content: 'Protect your loved ones with our life insurance plans.',
            imageUrl: '/images/lifeinsurance.jpg',
        },
        {
            title: 'General Insurance',
            content: 'Safeguard your assets with our comprehensive general insurance policies.',
            imageUrl: '/images/geninsurance.jpg',
        },
        {
            title: 'Health Insurance',
            content: 'Ensure your well-being with our tailored health insurance coverage.',
            imageUrl: '/images/healthinsurance.jpg',
        },
        {
            title: 'Mutual Funds',
            content: 'Invest wisely for your future with our mutual fund options.',
            imageUrl: '/images/mutualfund.jpg',
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <div style={{ display: 'none' }} />,
    };                 

    return (
        <div className="w-full">
            <section className="border-b border-slate-200 bg-white">
                <Slider className='values-slider' {...sliderSettings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full">
                            <div className="relative">
                                <img
                                    src={process.env.PUBLIC_URL + slide.imageUrl}
                                    alt={slide.title}
                                    className="h-[420px] w-full object-cover md:h-[520px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/30 to-transparent" />
                                <div className="absolute left-[8%] top-[28%] max-w-xl text-white">
                                    <p className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/90">Trusted guidance</p>
                                    <h1 className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-none tracking-tight">{slide.title}</h1>
                                    <p className="mt-4 max-w-lg text-base text-slate-100 md:text-xl">{slide.content}</p>
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <Link to="/contact" className="btn btn-primary">Get in touch</Link>
                                        <Link to="/services" className="btn btn-secondary border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">Explore services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            <div className="section-shell">
                <div className="card-surface overflow-hidden bg-slate-50">
                    <div className="grid gap-8 p-6 md:grid-cols-[260px,1fr] md:p-8">
                        <div className="text-center">
                            <img
                                src="/images/self1.jpg"
                                alt="Mr. Anand Deshmukh"
                                className="mx-auto mb-4 h-56 w-full max-w-[220px] rounded-2xl object-cover shadow-soft"
                            />
                            <h5 className="text-lg font-semibold text-slate-900">Mr. Anand Deshmukh</h5>
                        </div>
                        <div id="about" className="scroll-mt-24 space-y-4 text-slate-600">
                            <p className="section-label">About the advisor</p>
                            <h2 className="section-heading">Greetings and welcome to my website!</h2>
                            <p>Allow me to introduce myself - I am Anand Deshmukh, and I am dedicated to providing transparent and reliable assistance tailored to meet your needs. As you navigate through the various fields I specialize in, you'll discover a commitment to transparency that forms the very core of my identity.</p>
                            <p>At the heart of my mission is a focus on shaping your future. I am here to empower you with a precise investment strategy that perfectly aligns with your goals. Trust me to turn your aspirations into tangible achievements, granting you the ultimate in financial independence. Over the years, I've had the privilege of guiding more than 2000 individuals and families towards complete financial freedom, showcasing my expertise in navigating the complexities of financial planning and investments.</p>
                            <p>Within our Advisory Services, I've fine-tuned the process to simplify complexities, ensuring you feel at ease as you chart your course towards financial prosperity. Your satisfaction is my topmost concern, and priority is always given to your needs. With me, rest assured that your financial well-being is my paramount focus. Feel free to explore the comprehensive range of insurance products and services I offer, all designed to meet your diverse needs.</p>
                            <p>Thank you for visiting, and I look forward to assisting you on your journey to financial success!</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 border-t border-slate-200 p-6 md:grid-cols-2 lg:grid-cols-3 md:p-8">
                        {[
                            {
                                title: 'Vision',
                                text: 'Responsibility is our first and last priority and our one and only vision.',
                                image: '/images/vision.jpg',
                            },
                            {
                                title: 'Mission',
                                text: 'Partner with the clients in long-term, trusted financial advisory relationships. Strive to provide financial peace of mind by delivering advice that gives client the confidence to pursue their own passion, dreams and talents.',
                                image: '/images/mission.jpg',
                            },
                            {
                                title: 'Values',
                                text: 'We go to great lengths to ensure that the services we provide are of the highest possible standard. We are always dedicated for creating an equal opportunity for every customer in the market.',
                                image: '/images/values.jpg',
                            },
                        ].map((card, i) => (
                            <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                ></div>
                                <div className="space-y-3 p-5">
                                    <h4 className="text-center text-xl font-semibold text-slate-900">{card.title}</h4>
                                    <p className="text-sm leading-6 text-slate-600">{card.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlider;