import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "bootstrap/dist/css/bootstrap.min.css";

const reviews = [
    {
        id: 1, name: "Deshmukh",
        rating: 5,
        reviewText: "Exceptional service from my financial advisor! He has strong expertise in insurance and mediclaim services. Highly recommended for anyone seeking reliable financial advice in insurance matters."
    },
    {
        id: 1, name: "M M. Dhamane",
        rating: 4,
        reviewText: "Any time hepful."
    },
    {
        id: 1, name: "ashish sharma ",
        rating: 5,
        reviewText: "very good "
    },
    {
        id: 1, name: "Balasaheb chavan",
        rating: 5,
        reviewText: "Good advised "
    },
    {
        id: 1, name: "Arvind Bhosale ",
        rating: 5,
        reviewText: "उत्कृष्ट सेवा हाच ध्यास.. "
    },
    {
        id: 1, name: "Usha ",
        rating: 5,
        reviewText: "समर्पण"
    }];

const Reviews = () => {

    const CustomPrevArrow = props => (
        <div
            onClick={props.onClick}
            style={{
                ...props.style,
                display: "block",
                position: "absolute",
                left: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "24px",
                color: "#000",
                borderRadius: "50%",
                cursor: "pointer",
            }}
        >
            &#60;
        </div>
    );

    const CustomNextArrow = props => (
        <div
            onClick={props.onClick}
            style={{
                ...props.style,
                display: "block",
                position: "absolute",
                right: "0px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "24px",
                color: "#000",
                borderRadius: "50%",
                cursor: "pointer",
            }}
        >
            &#62;
        </div>
    );

    const sliderSettings = {
        accessibility: true,
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };

    return (
        <div className="container mt-4 h-40" style={{ fontFamily: 'monospace' }}>
            <div style={{ minHeight: '200px', maxHeight: '300px' }}>
                <h3 style={{ fontVariant: 'small-caps', textAlign: 'center', fontWeight: 'bold' }}>
                    Testimonials</h3>
                {reviews.length > 0 ? (
                    <Slider {...sliderSettings}>
                        {reviews.map((review, index) => (
                            <div className='px-4 text-center' key={index}>
                                <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0' }}>
                                    <h3 className='m-0'>{review.name}</h3>
                                    <p>{Array.from({ length: review.rating }, (_, index) => <span key={index}>⭐</span>)}</p>
                                </div>
                                <p style={{ fontFamily: 'cursive', fontWeight: 'bold', margin: '5px' }}>{review.reviewText}</p>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
            <div className='row m-3'>
                <h3 style={{ fontVariant: 'small-caps', textAlign: 'center', fontWeight: 'bold', marginTop: '8px' }}>
                    Awards and Appreciation</h3>
                <Slider {...sliderSettings}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={process.env.PUBLIC_URL + '/images/award1.jpg'}
                                style={{ width: '90%', maxWidth: '900px', height: 'auto', maxHeight: '65vh', minHeight: '200px' }} alt='Appreciation' />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={process.env.PUBLIC_URL + '/images/LIC T.jpg'}
                                style={{ width: '90%', maxWidth: '900px', height: 'auto', maxHeight: '65vh', minHeight: '200px' }} alt='Appreciation' />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={process.env.PUBLIC_URL + '/images/Star Health T.jpg'}
                                style={{ width: '90%', maxWidth: '900px', height: 'auto', maxHeight: '65vh', minHeight: '200px' }} alt='Appreciation' />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={process.env.PUBLIC_URL + '/images/star health c.jpg'}
                                style={{ width: '90%', maxWidth: '900px', height: 'auto', maxHeight: '65vh', minHeight: '200px' }} alt='Appreciation' />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={process.env.PUBLIC_URL + '/images/Mutual Fund c.jpg'}
                                style={{ width: '90%', maxWidth: '900px', height: 'auto', maxHeight: '65vh', minHeight: '200px' }} alt='Appreciation' />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;