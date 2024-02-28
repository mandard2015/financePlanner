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
        autoplaySpeed: 3000,
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
                                style={{width: '100%', height: 'auto', maxHeight: '400px', minHeight: '250px'}}/>
                                <div style={{
                                    position: 'absolute', top: '40%', left: '10%', fontWeight: 'bold',
                                    fontFamily: 'Ubuntu', color: 'white', textAlign: 'center', textShadow: '0px 0px 8px rgba(4, 0, 255)'
                                }}>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', marginBottom: '10px' }}>{slide.title}</h2>
                                    <p style={{ fontSize: 'clamp(0.9rem, 2vw, 3rem)', maxWidth: '600px', margin: '0 auto' }}>{slide.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div id="about" className='container w-100 px-1' style={{ marginTop: '30px' }}>
                <div className='row my-3 pt-3 px-1 bg-light w-100' style={{ borderRadius: '15px' }}>
                    <div className='text-center col-md-5 col-lg-4'>
                        <img style={{ width: '80%', position: 'center', borderRadius: '20px', marginBottom: '15px' }}
                            src='/images/self1.jpg' alt='Mr. Anand Deshmukh' />
                        <h5>Mr. Anand Deshmukh</h5>
                    </div>
                    <div className='col'>
                        <h3>Welcome...</h3>
                        <p> Our commitment to transparency defines our identity, and we're always ready to assist you. Offering
                            a comprehensive range of insurance products and services, we are dedicated to meeting the diverse needs
                            of our customers.</p><p>At our core, we focus on shaping your future. Our primary goal is to
                            empower you with a precise investment strategy that aligns perfectly with your goals. Trust us to turn
                            your aspirations into tangible achievements, granting you ultimate financial independence. Having guided
                            over 1500 individuals and families to attain complete financial freedom, we possess the expertise to
                            navigate the complexities of financial planning and investments.</p><p>Within our Advisory Services, we've
                            fine-tuned the process to simplify complexities, ensuring our clients feel at ease as they chart their course
                            towards financial prosperity. Priority is given to our clients, and their satisfaction is our topmost concern.
                            With us, rest assured that your financial well-being is always our paramount focus.</p>
                    </div>
                    <div className='row m-auto mt-2'>
                        {showCards && (
                            <>
                                <div className='col-md-6 col-lg-4 pb-3'>
                                    <div className='card bg-white border-white border-0 card_shod'
                                        style={{
                                            borderRadius: '40px', overflow: 'hidden', minHeight: '250px',
                                            boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
                                        }}>
                                        <div className='card-body'>
                                            <h4 className='card-title text-center'>Vision</h4>
                                            <p className='card-text text-justify'>Responsibility is our first and last priority
                                                and our one and only vision.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-lg-4 pb-3'>
                                    <div className='card bg-white border-white border-0 card_shod'
                                        style={{
                                            borderRadius: '40px', overflow: 'hidden', minHeight: '250px',
                                            boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
                                        }}>
                                        <div className='card-body'>
                                            <h4 className='card-title text-center'>Mission</h4>
                                            <p className='card-text text-justify'>We partner with the clients in long-term,
                                                trusted financial advisory relationships. We strive to provide financial peace of
                                                mind by delivering tailored objective advice designed to give clients the confidence
                                                to pursue their own passion, dreams and talents.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-lg-4 pb-3'>
                                    <div className='card bg-white border-white border-0 card_shod'
                                        style={{
                                            borderRadius: '40px', overflow: 'hidden', minHeight: '250px',
                                            boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
                                        }}>
                                        <div className='card-body'>
                                            <h4 className='card-title text-center'>Values</h4>
                                            <p className='card-text text-justify'>Equity is our major moral principle. We are
                                                always dedicated for creating an equal opportunity for every customer in the market.</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='toggle-cards-wrapper'>
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