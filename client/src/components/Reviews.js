import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

const Reviews = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);
    // const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Fetch reviews from server when the component mounts
        axios.get('http://localhost:5000/api/reviews')
            .then(response => setReviews(response.data))
            .catch(error => console.error(error));
    }, []);

    // const handlePrev = () => {
    //     setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    // };

    // const handleNext = () => {
    //     setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    // };

    // const handleIndicatorClick = (index) => {
    //     setActiveIndex(index);
    // }

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
        <div className="container mt-4" style={{ fontFamily: 'monospace' }}>
            <div className='row' style={{ height: '33%' }}>
                <div className='col-md-9'>
                    <h3>Customer Reviews</h3>
                    {reviews.length > 0 ? (
                        <Carousel fade data-bs-theme="dark" style={{height: '75%'}}>
                            {reviews.map((review, index) => (
                                <Carousel.Item key={index}>
                                    <div className='text-center'>
                                    <h3>{review.name}</h3>
                                    <p>{review.reviewText}</p>
                                    <p>Rating: {Array.from({ length: review.rating }, (_, index) => <span key={index}>⭐</span>)}</p>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        // <div id="reviewCarousel" className='carousel slide bg-light' data-bs-ride="carousel" data-bs-interval='5000'>
                        //     <div className="carousel-inner" style={{ textAlign: 'center'}}>
                        //         {reviews.map((review, index) => (
                        //             <div key={index} className={`carousel-item${index === activeIndex ? ' active' : ''}`}>
                        //                 <h4>{review.name}</h4>
                        //                 <p>{review.reviewText}</p>
                        //                 <p>Rating: {Array.from({ length: review.rating }, (_, index) => <span key={index}>⭐</span>)}</p>
                        //             </div>
                        //         ))}
                        //     </div>
                        //     <a className="carousel-control-prev" href="#reviewCarousel" role='button' data-bs-slide="prev" onClick={handlePrev}>
                        //         <i className="carousel-control-prev-icon" aria-hidden="true"></i>
                        //     </a>
                        //     <a className="carousel-control-next" href="#reviewCarousel" role='button' data-bs-slide="next" onClick={handleNext}>
                        //         <i className="carousel-control-next-icon" aria-hidden="true"></i>
                        //     </a>
                        //     <ol className="carousel-indicators" style={{ position: 'relative'}}>
                        //         {reviews.map((_, index) => (
                        //             <li key={index} data-bs-target="#reviewCarousel" data-bs-slide-to={index} 
                        //             className={index === activeIndex ? 'active' : ''} onClick={() => handleIndicatorClick(index)}></li>
                        //         ))}
                        //     </ol>
                        // </div>
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
                <div className='col-md-3 mt-4 mt-md-0'>
                    <form onSubmit={handleSubmit}>
                        <h3>Add review</h3>
                        <div className='form-group'>
                            <label htmlFor="name" className='form-label'>Name:</label>
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
        </div>
    );
};

export default Reviews;