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

    //     return (
    //         <div>
    //             <div className='pt-5 mt-3' style={{ width: '100%'}}>
    //                 <Slider {...sliderSettings}>
    //                     {slides.map((slide, index) => (
    //                         <div key={index} className='row mx-0' style={{ width: '100%'}}>
    //                             <div style={{ position: 'relative', padding: '0'}}>
    //                                 <img src={process.env.PUBLIC_URL + slide.imageUrl}
    //                                 alt={slide.title}
    //                                 style={{width: '100%', height: 'auto', maxHeight: '450px', minHeight: '250px'}}/>
    //                                 <div style={{
    //                                     position: 'absolute', top: '35%', left: '10%', fontWeight: 'bold', width: '100%',
    //                                     fontFamily: 'Ubuntu', color: 'black', textAlign: 'start', textShadow: '0px 0px 8px rgba(255, 255, 255)'
    //                                 }}>
    //                                     <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold' }}>{slide.title}</h2>
    //                                     <p style={{ fontSize: 'clamp(0.9rem, 2vw, 3rem)', maxWidth: '60%', marginLeft: '0 auto' }}>{slide.content}</p>
    //                                 </div>
    //                                 <div id="about"></div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </Slider>
    //             </div>
    //             <div className='container w-100 px-1' style={{ marginTop: '30px' }}>
    //                 <div className='row my-3 pt-3 bg-light w-100' style={{ borderRadius: '15px', marginLeft: '0' }}>
    //                     <div className='text-center col-md-5 col-lg-4'>
    //                         <img style={{ width: '85%', position: 'center', borderRadius: '20px', marginBottom: '15px' }}
    //                             src='/images/self1.jpg' alt='Mr. Anand Deshmukh' />
    //                         <h5>Mr. Anand Deshmukh</h5>
    //                     </div>
    //                     <div className='col' style={{ alignSelf: 'center'}}>
    //                         <h3>Greetings and welcome to my website!</h3>
    //                         <p>Allow me to introduce myself - I am Anand Deshmukh, and I am dedicated to providing transparent and reliable 
    //                             assistance tailored to meet your needs. As you navigate through the various fields I specialize in, you'll 
    //                             discover a commitment to transparency that forms the very core of my identity.</p><p>At the heart of my mission is a 
    //                             focus on shaping your future. I am here to empower you with a precise investment strategy that perfectly aligns 
    //                             with your goals. Trust me to turn your aspirations into tangible achievements, granting you the ultimate in 
    //                             financial independence. Over the years, I've had the privilege of guiding more than 1500 individuals and 
    //                             families towards complete financial freedom, showcasing my expertise in navigating the complexities of 
    //                             financial planning and investments.</p>
    //                             <p>Within our Advisory Services, I've fine-tuned the process to simplify complexities, ensuring you feel at ease as 
    //                             you chart your course towards financial prosperity. Your satisfaction is my topmost concern, and priority is always 
    //                             given to your needs. With me, rest assured that your financial well-being is my paramount focus. Feel free to explore 
    //                             the comprehensive range of insurance products and services I offer, all designed to meet your diverse needs.</p>
    //                             <p>Thank you for visiting, and I look forward to assisting you on your journey to financial success!</p>
    //                     </div>
    //                     <div className='row m-auto mt-3'>
    //                         {showCards && (
    //                             <>
    //                                 <div className='col-md-6 col-lg-4 pb-3'>
    //                                     <div className='card bg-white border-white border-0 mx-3 card_shod'
    //                                         style={{
    //                                             borderRadius: '40px', overflow: 'hidden', minHeight: '425px',
    //                                             boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
    //                                         }}>
    //                                         <div style={{ backgroundImage: 'url(/images/vision.jpg)', height: '200px', minHeight: '200px', 
    //                                         backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'inherit'}}>
    //                                         </div>
    //                                         <div className='card-body'>
    //                                             <h4 className='card-title text-center'>Vision</h4>
    //                                             <p className='card-text text-justify'>Responsibility is our first and last priority
    //                                                 and our one and only vision.</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div className='col-md-6 col-lg-4 pb-3'>
    //                                     <div className='card bg-white border-white border-0 mx-3 card_shod'
    //                                         style={{
    //                                             borderRadius: '40px', overflow: 'hidden', minHeight: '425px',
    //                                             boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
    //                                         }}>
    //                                         <div style={{ backgroundImage: 'url(/images/mission.jpg)', height: '200px', minHeight: '200px', 
    //                                         backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'inherit'}}>
    //                                         </div>
    //                                         <div className='card-body'>
    //                                             <h4 className='card-title text-center'>Mission</h4>
    //                                             <p className='card-text text-justify'>Partner with the clients in long-term, trusted 
    //                                             financial advisory relationships. Strive to provide financial peace of mind by delivering 
    //                                             advice that gives client the confidence to pursue their own passion, dreams and talents.</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div className='col-md-6 col-lg-4 pb-3'>
    //                                     <div className='card bg-white border-white border-0 mx-3 card_shod'
    //                                         style={{
    //                                             borderRadius: '40px', overflow: 'hidden', minHeight: '425px',
    //                                             boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)'
    //                                         }}>
    //                                         <div style={{ backgroundImage: 'url(/images/values.jpg)', height: '200px', minHeight: '200px', 
    //                                         backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderColor: 'inherit'}}>
    //                                         </div>
    //                                         <div className='card-body'>
    //                                             <h4 className='card-title text-center'>Values</h4>
    //                                             <p className='card-text text-justify'>We go to great lengths to ensure that the services we provide are of the highest possible standard. We are
    //                                                 always dedicated for creating an equal opportunity for every customer in the market.</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </>
    //                         )}
    //                     </div>
    //                     <div id='product' className='toggle-cards-wrapper'>
    //                         <div className={`toggle-cards ${showCards ? 'open' : ''}`} onClick={toggleCards}>
    //                             <FaChevronDown className={`arrow-icon ${showCards ? 'hidden' : ''}`} />
    //                             <FaChevronUp className={`arrow-icon ${showCards ? '' : 'hidden'}`} />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

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
                                    financial independence. Over the years, I've had the privilege of guiding more than 1500 individuals and
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