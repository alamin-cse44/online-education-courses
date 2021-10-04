import React from 'react';
import './UpcomingFixture.css';
import fix1 from '../../images/fix-1.png';
import fix2 from '../../images/fix-2.png';

const UpcomingFixture = () => {
    return (
        <div className="comming-container">
            <div className="comming-first">
               <h1>Latest Courses</h1>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam.
               </p>
            </div>
            <div className="comming-second mt-5">
                <div className="business">
                    <img className="up-img" src={fix1} alt="" />
                    <div className="mt-5">
                      <button className="btn-primary mb-2">Business</button>
                      <h4>Let's Know How Skillup Work Fast And Secure?</h4>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus <br /> qui blanditiis praesentium voluptatum</p> 
                    </div>
                </div>
                <hr />
                <div className="accounting mt-5">
                    <img className="up-img" src={fix2} alt="" />
                    <div className="mt-5">
                    <button className="btn-primary mb-2">Accounting</button>
                      <h4>How To Improove Digital Marketing For Fast SEO</h4>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus <br /> qui blanditiis praesentium voluptatum</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingFixture;