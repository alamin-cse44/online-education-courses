import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceData from '../ServiceData/ServiceData';
import logo from '../../images/service-home.png';

const Services = (props) => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('./products2.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    return (
        <div className="service-container">
            <div className="enrolled-container mt-5 d-flex justify-content-center">
               <div className="text ">
                   <h2>We Have The Best Instructors Available In The City</h2>
                   <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique</p>
                   <ul>
                       <li>Full Time Access</li>
                       <li>20+ Downloadable Resources</li>
                       <li>Certificate of Completion</li>
                       <li>Free Trial 7 Days</li>
                   </ul>
               </div>
               <img className="img-fluid" src={logo} alt="" />
            </div>
            <div>
            <Row xs={1} md={2} lg={2} className="g-4">
                {
                    services.map(service => <ServiceData service={service}></ServiceData>)
                }
            </Row>    
            </div>
            
        </div>
    );
};

export default Services;