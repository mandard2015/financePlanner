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
        profession: "Manager", rating: 4, reviewText: "Any time helpful."
    },
    {
        id: 3, name: "Ashish Sharma",
        profession: "Businessman", rating: 5, reviewText: "Very good"
    },
    {
        id: 4, name: "Balasaheb Chavan",
        profession: "sr. Software Engineer", rating: 5, reviewText: "Good advised"
    },
    {
        id: 5, name: "Arvind Bhosale",
        profession: "Senior Manager", rating: 5, reviewText: "उत्कृष्ट सेवा हाच ध्यास.."
    },
    {
        id: 6, name: "Usha",
        profession: "Homemaker", rating: 5, reviewText: "समर्पण"
    }
];

const Arrow = ({ onClick, direction }) => (
    <div
        onClick={onClick}
        className={`absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer text-3xl text-slate-700 ${direction === 'left' ? 'left-2' : 'right-2'}`}
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
        <div id="reviews" className="w-full scroll-mt-24 bg-slate-50 py-14">
            <div className="container-shell">
                <div className="mb-10 text-center">
                    <p className="section-label">Testimonials</p>
                    <h2 className="section-heading">What clients say</h2>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:px-8 sm:py-6">
                    {reviews.length > 0 ? (
                        <Slider {...sliderSettings}>
                            {reviews.map((review, index) => (
                                <div key={index} className="rounded-2xl bg-white px-4 py-8 text-center sm:px-8">
                                    <div className="mb-4 flex items-center justify-center gap-4">
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold text-slate-900">{review.name}</h3>
                                            <p className="text-sm italic text-slate-500">{review.profession}</p>
                                        </div>
                                        <div aria-label={`${review.rating} star rating`} className="flex gap-1 text-lg">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <span key={i}>⭐</span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mx-auto max-w-2xl text-base font-medium text-slate-700 sm:text-lg">{review.reviewText}</p>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p className="text-center">No reviews yet.</p>
                    )}
                </div>

                <div className="mt-12">
                    <div className="mb-8 text-center">
                        <p className="section-label">Awards</p>
                        <h2 className="section-heading">Recognition and appreciation</h2>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-8">
                        <Slider {...sliderSettings}>
                            {[
                                '/images/award1.jpg',
                                '/images/LIC T.jpg',
                                '/images/Star Health T.jpg',
                                '/images/star health c.jpg',
                                '/images/Mutual Fund c.jpg'
                            ].map((src, i) => (
                                <div key={i} className="flex justify-center">
                                    <img
                                        src={process.env.PUBLIC_URL + src}
                                        alt="Appreciation"
                                        className="h-auto max-h-[65vh] w-[90%] max-w-[900px] rounded-xl object-contain"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;