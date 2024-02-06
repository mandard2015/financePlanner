import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const WorkExp = () => {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/logos')
            .then(response => setLogos(response.data))
            .catch(error => console.error(error));
    }, []);

    const keyframes = `
    @keyframes slide {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(-100%);
        }
      }`;

    return (
        <section className='member_counter'>
            <div>
                <h1>Associate Partners</h1>
                <style>{keyframes}</style>
                <div style={{ height: '125px', overflow: 'hidden', whiteSpace: 'nowrap',
                 display: 'flex'}}>
                    {logos.map((logo) => (
                        <img
                        key={logo._id}
                            style={{ height: '75%', width:'25%', marginRight: '20px', animation: 'slide 10s linear infinite' }}
                            src={`http://localhost:3000${logo.imageUrl}`}
                            alt={logo.name}
                        />
                    ))}
                </div>
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