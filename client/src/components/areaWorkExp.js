import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const WorkExp = () => {
    return (
        <section className='member_counter' style={{ backgroundImage: '-webkit-linear-gradient(60deg, #5498fd 25%, #ff2ae7 75%)'}}>
            <div className='container'>
                <div className='row' style={{ fontFamily: 'cursive', color: 'cornsilk'}}>
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