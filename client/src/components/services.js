import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../index.css';

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

    const [showCards, setShowCards] = useState(false);

    const toggleCards = () => {
        setShowCards(!showCards);
    };

    function SampleNextArrow(props) {
        const { style } = props;
        return (
            <div style={{ ...style, display: "none" }} />
        );
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        // nextArrow: <div className='slick-arrow' style={{ display: 'none' }}></div>,
    };

    return (
        <div>
            <div className='pt-5 mt-3' style={{ width: '100%'}}>
                <Slider {...sliderSettings}>
                    {slides.map((slide, index) => (
                        <div key={index} className='row mx-0' style={{ width: '100%'}}>
                            <div style={{ position: 'relative', padding: '0'}}>
                                <img src={process.env.PUBLIC_URL + slide.imageUrl}
                                alt={slide.title}
                                style={{width: '100%', height: 'auto', maxHeight: '450px', minHeight: '250px'}}/>
                                <div style={{
                                    position: 'absolute', top: '35%', left: '10%', fontWeight: 'bold', width: '100%',
                                    fontFamily: 'Ubuntu', color: 'black', textAlign: 'start', textShadow: '0px 0px 8px rgba(255, 255, 255)'
                                }}>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold' }}>{slide.title}</h2>
                                    <p style={{ fontSize: 'clamp(0.9rem, 2vw, 3rem)', maxWidth: '60%', marginLeft: '0 auto' }}>{slide.content}</p>
                                </div>
                                <div id="about"></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='container w-100 px-1' style={{ marginTop: '30px' }}>
                <div className='row my-3 pt-3 bg-light w-100' style={{ borderRadius: '15px', marginLeft: '0' }}>
                    <div className='text-center col-md-5 col-lg-4'>
                        <img style={{ width: '85%', position: 'center', borderRadius: '20px', marginBottom: '15px' }}
                            src='/images/self1.jpg' alt='Mr. Anand Deshmukh' />
                        <h5>Mr. Anand Deshmukh</h5>
                    </div>
                    <div className='col' style={{ alignSelf: 'center'}}>
                        <h3>Greetings and welcome to my website!</h3>
                        <p>Allow me to introduce myself - I am Anand Deshmukh, and I am dedicated to providing transparent and reliable 
                            assistance tailored to meet your needs. As you navigate through the various fields I specialize in, you'll 
                            discover a commitment to transparency that forms the very core of my identity.</p><p>At the heart of my mission is a 
                            focus on shaping your future. I am here to empower you with a precise investment strategy that perfectly aligns 
                            with your goals. Trust me to turn your aspirations into tangible achievements, granting you the ultimate in 
                            financial independence. Over the years, I've had the privilege of guiding more than 1500 individuals and 
                            families towards complete financial freedom, showcasing my expertise in navigating the complexities of 
                            financial planning and investments.</p>
                            <p>Within our Advisory Services, I've fine-tuned the process to simplify complexities, ensuring you feel at ease as 
                            you chart your course towards financial prosperity. Your satisfaction is my topmost concern, and priority is always 
                            given to your needs. With me, rest assured that your financial well-being is my paramount focus. Feel free to explore 
                            the comprehensive range of insurance products and services I offer, all designed to meet your diverse needs.</p>
                            <p>Thank you for visiting, and I look forward to assisting you on your journey to financial success!</p>
                    </div>
                    <div className='row m-auto mt-3'>
                        {showCards && (
                            <>
                                <div className='col-md-6 col-lg-4 pb-3'>
                                    <div className='card bg-white border-white border-0 mx-3 card_shod'
                                        style={{
                                            borderRadius: '40px', overflow: 'hidden', minHeight: '425px',
                                            boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
                                        }}>
                                        <div style={{ backgroundImage: 'url(/images/vision.jpg)', height: '200px', minHeight: '200px', 
                                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'inherit'}}>
                                        </div>
                                        <div className='card-body'>
                                            <h4 className='card-title text-center'>Vision</h4>
                                            <p className='card-text text-justify'>Responsibility is our first and last priority
                                                and our one and only vision.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-lg-4 pb-3'>
                                    <div className='card bg-white border-white border-0 mx-3 card_shod'
                                        style={{
                                            borderRadius: '40px', overflow: 'hidden', minHeight: '425px',
                                            boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
                                        }}>
                                        <div style={{ backgroundImage: 'url(/images/mission.jpg)', height: '200px', minHeight: '200px', 
                                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'inherit'}}>
                                        </div>
                                        <div className='card-body'>
                                            <h4 className='card-title text-center'>Mission</h4>
                                            <p className='card-text text-justify'>Partner with the clients in long-term, trusted 
                                            financial advisory relationships. Strive to provide financial peace of mind by delivering 
                                            advice that gives client the confidence to pursue their own passion, dreams and talents.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-lg-4 pb-3'>
                                    <div className='card bg-white border-white border-0 mx-3 card_shod'
                                        style={{
                                            borderRadius: '40px', overflow: 'hidden', minHeight: '425px',
                                            boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
                                        }}>
                                        <div style={{ backgroundImage: 'url(/images/values.jpg)', height: '200px', minHeight: '200px', 
                                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'inherit'}}>
                                        </div>
                                        <div className='card-body'>
                                            <h4 className='card-title text-center'>Values</h4>
                                            <p className='card-text text-justify'>We go to great lengths to ensure that the services we provide are of the highest possible standard. We are
                                                always dedicated for creating an equal opportunity for every customer in the market.</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div id='product' className='toggle-cards-wrapper'>
                        <div className={`toggle-cards ${showCards ? 'open' : ''}`} onClick={toggleCards}>
                            <FaChevronDown className={`arrow-icon ${showCards ? 'hidden' : ''}`} />
                            <FaChevronUp className={`arrow-icon ${showCards ? '' : 'hidden'}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlider;