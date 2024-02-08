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
        <section>
            <div className='container bg-light'>
                <div className='row m-3'>
                <div className='col p-3'>
                    <img style={{ width: '150px'}} src='/images/Anand.jpg' />
                    <h5>Mr. Anand Deshmukh</h5>
                </div>
                <div className='col p-3'>
                    <h3>Hello...</h3>
                    <p> With a comprehensive range of insurance products and services, we are committed
                         to meeting the diverse needs of customers across the country.</p>
                </div>
                </div>
            </div>
            <div className='row m-3 px-3' style={{ fontFamily: 'monospace', color: 'ButtonText' }}>
                <h3>Associate Partners</h3>
                <style>{keyframes}</style>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', alignItems: 'center',
                 display: 'flex'}}>
                    {logos.map((logo) => (
                        <div className='mx-3 col-lg-3 col-sm-4 col-6'>
                        <img
                        key={logo._id}
                            style={{ width:'100%', marginRight: '20px', animation: 'slide 10s linear infinite' }}
                            src={`http://localhost:3000${logo.imageUrl}`}
                            alt={logo.name}
                        />
                        </div>
                    ))}
                </div>
            </div>
            <div className='container' style={{ backgroundImage: '-webkit-linear-gradient(60deg, #5498fd 25%, #ff2ae7 75%)' }}>
                <div className='row p-3 text-center' style={{ justifyContent: 'center', fontFamily: 'cursive', color: 'cornsilk' }}>
                    <div className='col-lg-3 col-sm-6 p-3'>
                        <h3>17 +</h3>
                        <h4>Experience</h4>
                    </div>
                    <div className='col-lg-3 col-sm-6 p-3'>
                        <h3>1500 +</h3>
                        <h4>Families</h4>
                    </div>
                    <div className='col-lg-3 col-sm-6 p-3'>
                        <h3>5000 +</h3>
                        <h4>Policies</h4>
                    </div>
                    <div className='col-lg-3 col-sm-6 p-3'>
                        <h3>55 +</h3>
                        <h4>Team</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExp;