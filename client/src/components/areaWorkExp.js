import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const WorkExp = () => {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/logos')
            .then(response => setLogos(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <section className='member_counter'>
            <div>
                <h1>Associate Partners</h1>
                <Carousel fade>
                    {logos.map((logo, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={logo.imageUrl}
                                alt={logo.name}
                            />
                            <Carousel.Caption>
                                <h3>{logo.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className='container' style={{ backgroundImage: '-webkit-linear-gradient(60deg, #5498fd 25%, #ff2ae7 75%)' }}>
                <div className='row' style={{ fontFamily: 'cursive', color: 'cornsilk' }}>
                    <div className='col-lg-3 col-sm-6'>
                        <h3>17 +</h3>
                        <h4>Experience</h4>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <h3>1500 +</h3>
                        <h4>Families</h4>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <h3>5000 +</h3>
                        <h4>Policies</h4>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <h3>55 +</h3>
                        <h4>Team</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExp;