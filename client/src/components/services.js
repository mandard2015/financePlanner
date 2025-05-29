// import '../index.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        <div className="w-full pt-6 mt-12">
            <Slider className='values-slider' {...sliderSettings}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full">
                        <div className="relative">
                            <img
                                src={process.env.PUBLIC_URL + slide.imageUrl}
                                alt={slide.title}
                                className="w-full max-h-[450px] min-h-[250px] object-cover"
                            />
                            <div className="absolute top-[35%] left-[10%] text-black font-bold text-start w-full text-shadow-sm font-[Ubuntu]">
                                <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-bold">{slide.title}</h2>
                                <p className="text-[clamp(0.9rem,2vw,1.5rem)] max-w-[60%]">{slide.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <div id="about" className="w-[90%] mx-auto px-2 mt-8">
                <div className="w-full bg-gray-100 rounded-[15px] py-6">
                    <div className='flex flex-col md:flex-row gap-4 px-4 mb-8'>
                        <div className="md:w-1/3 text-center">
                            <img
                                src="/images/self1.jpg"
                                alt="Mr. Anand Deshmukh"
                                className="w-10/12 mx-auto rounded-[20px] mb-4"
                            />
                            <h5 className="text-lg font-semibold">Mr. Anand Deshmukh</h5>
                        </div>
                        <div className="md:w-2/3 flex flex-col justify-center space-y-4 pr-4 text-justify">
                            <h3 className="text-2xl font-semibold">Greetings and welcome to my website!</h3>
                            <p>Allow me to introduce myself - I am Anand Deshmukh, and I am dedicated to providing transparent and reliable
                                assistance tailored to meet your needs. As you navigate through the various fields I specialize in, you'll
                                discover a commitment to transparency that forms the very core of my identity.</p><p>At the heart of my mission is a
                                    focus on shaping your future. I am here to empower you with a precise investment strategy that perfectly aligns
                                    with your goals. Trust me to turn your aspirations into tangible achievements, granting you the ultimate in
                                    financial independence. Over the years, I've had the privilege of guiding more than 2000 individuals and
                                    families towards complete financial freedom, showcasing my expertise in navigating the complexities of
                                    financial planning and investments.</p>
                            <p>Within our Advisory Services, I've fine-tuned the process to simplify complexities, ensuring you feel at ease as
                                you chart your course towards financial prosperity. Your satisfaction is my topmost concern, and priority is always
                                given to your needs. With me, rest assured that your financial well-being is my paramount focus. Feel free to explore
                                the comprehensive range of insurance products and services I offer, all designed to meet your diverse needs.</p>
                            <p>Thank you for visiting, and I look forward to assisting you on your journey to financial success!</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
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
                            <div key={i} className="bg-white shadow-md rounded-[40px] overflow-hidden min-h-[425px]">
                                <div
                                    className="h-[200px] bg-center bg-cover"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                ></div>
                                <div className="p-4">
                                    <h4 className="text-center text-xl font-semibold mb-2">{card.title}</h4>
                                    <p className="text-justify">{card.text}</p>
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