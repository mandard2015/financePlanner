import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Reviews = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews from server when the component mounts
        axios.get('http://localhost:5000/api/reviews')
            .then(response => setReviews(response.data))
            .catch(error => console.error(error));
    }, []);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/reviews', { name, rating, reviewText });
            setReviews([...reviews, response.data]);
            console.log(reviews);
            console.log(response.status);
            setName('');
            setRating(0);
            setReviewText('');
            alert('Review submitted successfully!');
        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting the review.');
        }
    };

    return (
        <div id="reviews" className="container mt-4 h-40" style={{ fontFamily: 'monospace' }}>
            <div className='row'>
                <div className='col-md-9'>
                    <h3 style={{ fontVariant: 'small-caps', textAlign: 'center', fontWeight: 'bold' }}>
                        Testimonials</h3>
                    {reviews.length > 0 ? (
                        <Slider {...sliderSettings}>
                            {reviews.map((review, index) => (
                                <div className='px-4 text-center' key={index}>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0'}}>
                                    <h3 className='m-0'>{review.name}</h3>
                                    <p>{Array.from({ length: review.rating }, (_, index) => <span key={index}>⭐</span>)}</p>
                                    </div>
                                    <p style={{ fontFamily: 'cursive', margin: '5px' }}>{review.reviewText}</p>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
                <div className='col-md-3 mt-4 mt-md-0'>
                    <form onSubmit={handleSubmit}>
                        <h3>Add review</h3>
                        <div className='form-group'>
                            <label htmlFor="name" className='form-label mb-1'>Name:</label>
                            <input type="text" id="name" className='form-control-sm ml-1' value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className='form-group m-1'>
                            <label htmlFor="rating" className='form-label'>Rating:</label>
                            <select id="rating" className='form-select-sm m-1' value={rating} onChange={(e) => setRating(e.target.value)} required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="reviewText" className='form-label'>Review Text:</label>
                            <textarea id="reviewText" className='form-control-sm ml-1' value={reviewText} onChange={(e) => setReviewText(e.target.value)} required></textarea>
                        </div>
                        <button type="submit" className='btn btn-primary'>Submit Review</button>
                    </form>
                </div>
            </div>
            <div className='row m-3'>
                <h3 style={{ fontVariant: 'small-caps', textAlign: 'center', fontWeight: 'bold' }}>
                    Awards and Appreciation</h3>
                <Slider {...sliderSettings}>
                    <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={process.env.PUBLIC_URL + '/images/award1.jpg'}
                            style={{ width: '80%', height: 'auto', maxHeight: '400px', minHeight: '200px' }} alt='Appreciation' />
                    </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;