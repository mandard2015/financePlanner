import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab, Tabs, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const WorkExp = () => {
    const [logos, setLogos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [key, setKey] = useState('lic');

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
        return <div className='text-center m-3'>Loading...</div>;
    }

    return (
        <section>
            <div id='product' className='container'>
                <Tabs id="product-tabs" activeKey={key}
                    onSelect={(k) => setKey(k)} className="mb-3">
                    <Tab eventKey="lic" title="LIC">
                        <Row>
                            <Col>
                                <h3>LIC Product Information</h3>
                                {/* Add LIC product information content */}
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="starHealth" title="Star Health">
                        <Row className='mx-5'>
                            <Col>
                                <h3>Star Health Product Information</h3>
                                {/* Add Star Health product information content */}
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="generalInsurance" title="New India Assurance">
                        <Row>
                            <Col>
                                <h3>Star Health Product Information</h3>
                                {/* Add Star Health product information content */}
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="mutualFunds" title="Mutual Funds">
                        <Row className='mx-5'>
                            <Col>
                                <h3>Mutual Funds Advisor</h3>
                                <p>A mutual fund is a professionally managed investment that pools money from many investors who 
                                    together purchase securities. These investors can be individuals as well as groups. Mutual funds 
                                    involve market risks, and this is the reason why one should consult a Mutual Fund Consultant in 
                                    Pune for advice before making any investment.</p>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
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
            <div className='container p-3' style={{ backgroundImage: '-webkit-linear-gradient(60deg, #5498fd 25%, #ff2ae7 75%)' }}>
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