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

    function SampleNextArrow(props) {
        const { style } = props;
        return (
            <div style={{ ...style, display: "none" }}/>
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
            <div className='pt-5 mt-3'>
                <Slider {...sliderSettings}>
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <div style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + slide.imageUrl})`, position: 'relative',
                                textAlign: 'center', height: '400px',
                                backgroundPosition: 'center', backgroundSize: 'cover'
                            }}>
                                <div style={{
                                    position: 'absolute', top: '40%', left: '10%', fontWeight: 'bold',
                                    fontFamily: 'cursive', color: 'white', textAlign: 'center', textShadow: '2px 2px 4px rgba(4, 0, 255)'
                                }}>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{slide.title}</h2>
                                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>{slide.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div id="about" className='container' style={{ marginTop: '30px'}}>
                <div className='row m-3 pt-3 bg-light' style={{ borderRadius: '15px'}}>
                    <div className='text-center col'>
                        <img style={{ width: '150px', position: 'center', borderRadius: '20px', marginBottom: '15px' }}
                         src='/images/Anand.jpg' />
                        <h5>Mr. Anand Deshmukh</h5>
                    </div>
                    <div className='col'>
                        <h3>Welcome...</h3>
                        <p> Our transparent service is our identity and we are always ready to help you. 
                            With a comprehensive range of insurance products and services, we are committed
                            to meeting the diverse needs of customers across the country.</p>
                    </div>
                </div>
                <div className='row m-auto mt-4'>
                    <div className='col-md-6 col-lg-4 pb-3'>
                        <div className='card bg-white border-white border-0 card_shod'
                            style={{
                                borderRadius: '40px', overflow: 'hidden', minHeight: '250px',
                                boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
                            }}>
                            <div className='card-body'>
                                <h4 className='card-title text-center car_cola'>Vision</h4>
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
                                <h4 className='card-title text-center car_cola'>Values</h4>
                                <p className='card-text text-justify'>Equity is our major moral principle. We are
                                    always dedicated for creating an equal opportunity for every customer in the market.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlider;