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
                        <Row className='mx-5'>
                            <Col>
                                <h3>LIC - Life Insurance Corporation of India</h3>
                                <p>LIC is a leading life insurance provider with a legacy of trust and reliability. 
                                    Our diverse range of insurance products ensures financial security for you and your family. 
                                    From traditional life insurance plans to investment-linked policies, LIC has something for everyone.</p>
                                <p>Explore our products and secure your future with LIC. Contact us today for personalized advice and the best insurance solutions for your needs.</p>
                                <p className='call-to-action'>Ready to safeguard your future? Call us at 9011094170 or fill out the form below to get started.</p>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="starHealth" title="Star Health">
                        <Row className='mx-5'>
                            <Col>
                                <h3>Star Health</h3>
                                <p>Star Health is a leading health insurance provider committed to ensuring your well-being. Our comprehensive health insurance plans cover medical expenses, 
                                    hospitalization, and more. With a focus on customer-centric solutions, Star Health strives to provide the best healthcare coverage.</p>
                                <p>Discover the benefits of our health insurance plans and prioritize your health. Connect with us today for expert advice and a personalized health insurance plan.</p>
                                <p className='call-to-action'> Take the first step towards a healthier life. Call us at 9011094170 or fill out the form below to learn more.</p>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="generalInsurance" title="New India Assurance">
                        <Row className='mx-5'>
                            <Col>
                                <h3>New India Assurance</h3>
                                <img style={{width: '80%', position: 'center', borderRadius: '20px' }}
                                    src='/images/geninsurance.jpg'
                                    alt='general Insurance'/>
                                <p> New India Assurance is a trusted general insurance provider known for its comprehensive range of insurance products. Our offerings include motor insurance, 
                                    property insurance, travel insurance, and more. With a commitment to customer satisfaction, 
                                    we provide tailored insurance solutions.</p>
                                <p> Protect your assets and secure your travels with New India Assurance. Contact us for expert guidance and reliable insurance coverage.</p>
                                <p className="call-to-action">Safeguard what matters to you. Call us at 9011094170 or fill out the form below to discuss your insurance needs.</p>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="mutualFunds" title="Mutual Funds">
                        <Row className='mx-5'>
                            <Col>
                                <h3>Mutual Funds Advisor</h3>
                                <p>A mutual fund is a professionally managed investment that pools money from many investors who 
                                    together purchase securities. These investors can be individuals as well as groups.</p>
                                <p> Mutual funds involve market risks, and this is the reason why one should consult a 
                                    Mutual Fund Consultant for advice before making any investment.</p>
                                <p className="call-to-action">Ready to invest wisely? Call us at 9011094170 or fill out the form below to schedule a consultation.</p>
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
                        <h4>Years</h4>
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