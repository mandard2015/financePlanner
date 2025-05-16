import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
    {
        id: 1, name: "Deshmukh",
        rating: 5,
        profession: "Financial Advisor",
        reviewText: "Exceptional service from my financial advisor! He has strong expertise in insurance and mediclaim services. Highly recommended for anyone seeking reliable financial advice in insurance matters."
    },
    {
        id: 2, name: "M M. Dhamane",
        profession: "Government Officer", rating: 4, reviewText: "Any time helpful."
    },
    {
        id: 3, name: "Ashish Sharma",
        profession: "Businessman", rating: 5, reviewText: "Very good"
    },
    {
        id: 4, name: "Balasaheb Chavan",
        profession: "Retired Teacher", rating: 5, reviewText: "Good advised"
    },
    {
        id: 5, name: "Arvind Bhosale",
        profession: "Senior Manager", rating: 5, reviewText: "उत्कृष्ट सेवा हाच ध्यास.."
    },
    {
        id: 6, name: "Usha",
        profession: "Doctor", rating: 5, reviewText: "समर्पण"
    }
];

const Arrow = ({ onClick, direction }) => (
    <div
        onClick={onClick}
        className={`absolute top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer z-10 ${direction === 'left' ? 'left-2' : 'right-2'} text-black`}
    >
        {direction === 'left' ? '‹' : '›'}
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
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />
};

const Reviews = () => {
    return (
        <div className="w-full px-4 py-6 font-mono">
            <div className="bg-gray-200 rounded-lg p-2 sm:px-10 min-h-[200px] max-h-[320px] md:mx-20">
                <h3 className="text-center font-bold text-xl uppercase p-2 pt-4">Testimonials</h3>
                {reviews.length > 0 ? (
                    <Slider {...sliderSettings}>
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg py-4 sm:px-4 text-center">
                                <div className="flex justify-evenly items-center">
                                    <div className="flex flex-col items-center mb-2">
                                        <h3 className="sm:text-lg font-semibold m-0">{review.name}</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 italic">{review.profession}</p>
                                    </div>
                                    <p>
                                        {Array.from({ length: review.rating }, (_, i) => (
                                            <span key={i} className='text-sm'>⭐</span>
                                        ))}
                                    </p>
                                </div>
                                <p className="font-cursive font-bold mx-auto max-w-2xl px-2 text-xs sm:text-lg">{review.reviewText}</p>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className="text-center">No reviews yet.</p>
                )}
            </div>

            <div className="mt-8 md:mx-20">
                <h3 className="text-center font-bold text-xl uppercase mb-4">Awards and Appreciation</h3>
                <Slider {...sliderSettings}>
                    {[
                        '/images/award1.jpg',
                        '/images/LIC T.jpg',
                        '/images/Star Health T.jpg',
                        '/images/star health c.jpg',
                        '/images/Mutual Fund c.jpg'
                    ].map((src, i) => (
                        <div>
                            <div key={i} className="flex justify-center">
                                <img
                                    src={process.env.PUBLIC_URL + src}
                                    alt="Appreciation"
                                    className="w-[90%] max-w-[900px] h-auto max-h-[65vh] min-h-[200px] object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;