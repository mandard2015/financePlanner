import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const WorkExp = () => {
    const [logos, setLogos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/logos')
            .then(response => {
                setLogos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const keyframes = `
    @keyframes slide {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }`;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section id="workExp">
            <div className='container'>
                <div className='row m-3 px-3' style={{ overflow: 'hidden', fontFamily: 'monospace', color: 'ButtonText' }}>
                    <h3>Associate Partners</h3>
                    <style>{keyframes}</style>
                    <div style={{ /*overflow: 'hidden',*/ whiteSpace: 'nowrap', alignItems: 'center',
                        display: 'flex', animation: 'slide 20s linear infinite'
                    }}>
                        {logos.map((logo) => (
                            <div key={logo._id} className='mx-3 col-lg-3 col-sm-4 col-6'>
                                <img
                                    style={{
                                        maxHeight: '150px', width: '100%', marginRight: '20px',
                                        animation: `slide 15s linear infinite`
                                    }}
                                    src={`http://localhost:3000${logo.imageUrl}`}
                                    alt={logo.name}
                                />
                            </div>
                        ))}
                        {logos.map((logo, index) => (
                            <div key={`duplicate_${index}`} className='mx-3 col-lg-3 col-sm-4 col-6'>
                                <img
                                    style={{
                                        maxHeight: '150px',
                                        width: '100%',
                                        marginRight: '20px',
                                        animation: `slide 15s linear infinite`
                                    }}
                                    src={`http://localhost:3000${logo.imageUrl}`}
                                    alt={logo.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='container m-3' style={{ backgroundImage: '-webkit-linear-gradient(60deg, #5498fd 25%, #ff2ae7 75%)' }}>
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