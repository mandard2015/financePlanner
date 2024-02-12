import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceSlider = () => {
    const slides = [
        {
            title: 'Life Insurance',
            content: 'Protect your loved ones with our life insurance plans.',
        },
        {
            title: 'General Insurance',
            content: 'Safeguard your assets with our comprehensive general insurance policies.',
        },
        {
            title: 'Health Insurance',
            content: 'Ensure your well-being with our tailored health insurance coverage.',
        },
        {
            title: 'Mutual Funds',
            content: 'Invest wisely for your future with our mutual fund options.',
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className='pt-4'>
                <Slider {...sliderSettings}>
                    {slides.map((slide, index) => (
                        <div key={index} className='p-3 text-center'>
                            <h2>{slide.title}</h2>
                            <p>{slide.content}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='row m-3 pt-3'>
                <div className='col p-3'>
                    <img style={{ width: '150px' }} src='/images/Anand.jpg' />
                    <h5>Mr. Anand Deshmukh</h5>
                </div>
                <div className='col p-3'>
                    <h3>Hello...</h3>
                    <p> With a comprehensive range of insurance products and services, we are committed
                        to meeting the diverse needs of customers across the country.</p>
                </div>
            </div>
            <div className='container'>
                <div className='row m-auto'>
                    <div className='col-md-6 col-lg-4 pb-3'>
                        <div className='card bg-white border-white border-0 card_shod'
                        style={{ borderRadius: '40px', overflow: 'hidden', minHeight: '250px', 
                        boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'}}>
                            <div className='card-body'>
                                <h4 className='card-title text-center car_cola'>Vision</h4>
                                <p className='card-text text-justify'>Responsibility is our first and last priority 
                                and our one and only vision.</p>
                            </div>
                        </div>                        
                    </div>
                    <div className='col-md-6 col-lg-4 pb-3'>
                        <div className='card bg-white border-white border-0 card_shod'
                        style={{ borderRadius: '40px', overflow: 'hidden', minHeight: '250px', 
                        boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'}}>
                            <div className='card-body'>
                                <h4 className='card-title text-center'>Mission</h4>
                                <p className='card-text text-justify'>We partner with the clients in long - term, 
                                trusted financial advisory relationships. We strive to provide financial peace of 
                                mind by delivering tailored objective advice designed to give clients the confidence 
                                to pursue their own passion, dreams and talents.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 pb-3'>
                        <div className='card bg-white border-white border-0 card_shod' 
                        style={{ borderRadius: '40px', overflow: 'hidden', minHeight: '250px', 
                        boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'}}>
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