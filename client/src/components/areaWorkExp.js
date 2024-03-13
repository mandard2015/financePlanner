import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab, Tabs, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
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
            <div className='container'>
                <h3 style={{
                    fontVariant: 'small-caps', fontFamily: 'monospace',
                    marginBottom: '0', textAlign: 'center', fontWeight: 'bold'
                }}>Our Services</h3>
                <Tabs id="product-tabs" activeKey={key}
                    onSelect={(k) => setKey(k)} className="mb-3">
                    <Tab eventKey="lic" title="LIC">
                        <Row>
                            <Col className='mx-3'>
                                <h3>LIC - Life Insurance Corporation of India</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='order-md-1 order-2 mx-4'>
                                <p>LIC is a leading life insurance provider with a legacy of trust and reliability.
                                    Our diverse range of insurance products ensures financial security for you and your family.
                                    From traditional life insurance plans to investment-linked policies, LIC has something for everyone.</p>
                                <p>Explore our products and secure your future with LIC. Contact us today for personalized advice and 
                                    the best insurance solutions for your needs. Below given are some of the products that may interest you.</p>
                                <ul>
                                    <li>Term Insurance refund of Premium</li>
                                    <li>Guaranteed tax-free Life time Money Back</li>
                                    <li>Pension For Lifetime</li>
                                    <li>Children Education Provision</li>
                                    <li>Daughter Marriage Provision</li>
                                    <li>Jeevan Labh</li>
                                </ul>
                            </Col>
                            <Col md={4} className='text-center pb-3 order-md-2 order-1'>
                                <img style={{ width: '80%', maxHeight: '30vh', borderRadius: '15px',  boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)' }}
                                    src='/images/lictab.jpg'
                                    alt='LIC Of India' />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mx-4'>
                                <p style={{ fontWeight: 'bold' }}>Ready to safeguard your future? Call us at 9011094170 to get started.</p>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="starHealth" title="Star Health">
                        <Row>
                            <Col className='mx-3'>
                                <h3>Star Health</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='order-md-1 order-2 mx-4'>
                                <p>Star Health is a leading health insurance provider committed to ensuring your well-being. Our 
                                    comprehensive health insurance plans cover medical expenses, hospitalization, and more. With a 
                                    focus on customer-centric solutions, Star Health strives to provide the best healthcare coverage.</p>
                                <p>Discover the benefits of our health insurance plans and prioritize your health. Connect with us 
                                    today for expert advice and a personalized health insurance plan. Here are some plans that may be 
                                    of interest to you.</p>
                                <ul>
                                    <li>Arogya Sanjeevani</li>
                                    <li>Young Star Insurance Policy</li>
                                    <li>Family Accident Care Insurance Policy</li>
                                    <li>Star Super Surplus Insurance Policy</li>
                                    <li>Senior Citizens Red Carpet Health Insurance Policy</li>
                                    <li>Medi Classic Insurance Policy (Individual)</li>
                                </ul>
                            </Col>
                            <Col md={4} className='text-center pb-3 order-md-2 order-1'>
                                <img style={{ width: '80%', maxHeight: '30vh', borderRadius: '15px',  boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)' }}
                                    src='/images/health tab.jpg'
                                    alt='Star Health Insurance' />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mx-4'>
                                <p style={{ fontWeight: 'bold' }}> Take the first step towards a healthier life. Call us at 9011094170 for more details.</p>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="generalInsurance" title="New India Assurance">
                        <Row >
                            <Col className='mx-3'>
                                <h3>New India Assurance</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='order-md-1 order-2 mx-4'>
                                <p> New India Assurance is a trusted general insurance provider known for its comprehensive range of 
                                    insurance products. Our offerings include motor insurance, property insurance, travel insurance, 
                                    and more. With a commitment to customer satisfaction, we provide tailored insurance solutions.</p>
                                <p> Protect your assets and secure your travels with New India Assurance. Contact us for expert 
                                    guidance and reliable insurance coverage. Here are some products that may be of interest to you.</p>
                                <ul>
                                    <li>Household Insurance</li>
                                    <li>Car Insurance</li>
                                    <li>Personal Accident Policy</li>
                                    <li>WC Policy</li>
                                    <li>Fire Policy</li>
                                    <li>Mediclaim</li>
                                    <li>Shopkeeper Policy</li>
                                </ul>
                            </Col>
                            <Col md={4} className='text-center pb-2 order-md-2 order-1'>
                                <img style={{ width: '80%', maxHeight: '30vh', borderRadius: '15px',  boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)' }}
                                    src='/images/general tab.jpg'
                                    alt='General Insurance' />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mx-4'>
                                <p style={{ fontWeight: 'bold' }} >Safeguard what matters to you. Call us at 9011094170 to discuss your insurance needs.</p>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="mutualFunds" title="Mutual Funds">
                        <Row>
                            <Col className='mx-3'>
                                <h3>Mutual Funds Advisor</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='order-md-1 order-2 mx-4'>
                                <p>A mutual fund is a professionally managed investment that pools money from many investors who
                                    together purchase securities. These investors can be individuals as well as groups.</p>
                                <p> Mutual funds involve market risks, and this is the reason why one should consult a
                                    Mutual Fund Consultant for advice before making any investment. Learn more about the 
                                    different types of Mutual Funds listed as</p>
                                <ul>
                                    <li>Equity Funds.</li>
                                    <li>Debt Funds.</li>
                                    <li>Money Market Funds.</li>
                                    <li>Hybrid Funds.</li>
                                    <li>Growth Funds.</li>
                                    <li>Liquid Funds.</li>
                                    <li>Tax-Saving Funds.</li>
                                </ul>
                            </Col>
                            <Col md={4} className='text-center pb-3 order-md-2 order-1'>
                                <img style={{ width: '80%', maxHeight: '30vh', borderRadius: '15px',  boxShadow: '0 0 15px 0 rgba(10, 10, 10, 0.3)' }}
                                    src='/images/geninsurance.jpg'
                                    alt='Mutual Fund' />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mx-4'>
                                <p style={{ fontWeight: 'bold' }}>Ready to invest wisely? Call us at 9011094170 to schedule a consultation.</p>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
                <div className='row m-3 px-3' style={{ overflow: 'hidden', fontFamily: 'monospace', color: 'ButtonText' }}>
                    <h3 style={{ fontVariant: 'small-caps', textAlign: 'center', fontWeight: 'bold' }}>Associate Partners</h3>
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
                <div className='row p-3 text-center' style={{ justifyContent: 'center', fontFamily: 'monospace', color: 'white' }}>
                    <div id="reviews" className='col-lg-3 col-sm-6 p-3'>
                        <h3> <CountUp start={0} end={17} duration={2} separator=" " />+</h3>
                        <h4>YEARS</h4>
                    </div>
                    <div className='col-lg-3 col-sm-6 p-3'>
                        <h3> <CountUp start={0} end={1500} duration={2} separator="" />+</h3>
                        <h4>FAMILIES</h4>
                    </div>
                    <div className='col-lg-3 col-sm-6 p-3'>
                        <h3> <CountUp start={0} end={5000} duration={2} separator="" />+</h3>
                        <h4>POLICIES</h4>
                    </div>
                    <div className='col-lg-3 col-sm-6 p-3'>
                        <h3> <CountUp start={0} end={55} duration={2} separator=" " />+</h3>
                        <h4>Team</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExp;