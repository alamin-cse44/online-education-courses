import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Data from '../Data/Data';
import './Home.css';
import frontImg from  '../../images/home-1.png';

const Home = () => {
    const [data4,setData4] = useState([]); 
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setData4(data));
    },[]);

    return (
        <div className="Home-container">
            <div className="starting-home mt-5 d-flex justify-content-center">
              <img className="class-fluid home-img" src={frontImg} alt="" />
              <div>
                  <ol>
                      <li>
                          <h4>Create Account</h4>
                          <h6>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</h6>
                      </li>
                      <li>
                          <h4>Join Membership</h4>
                          <h6>Error sit voluptatem actium doloremque laudantium, totam rem aperiam, eaque ipsa.</h6>
                      </li>
                      <li>
                          <h4>Start Learning</h4>
                          <h6>Error sit voluptatem actium doloremque laudantium, totam rem aperiam, eaque ipsa.</h6>
                      </li>
                      <li>
                          <h4>Get Certificate</h4>
                          <h6>Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</h6>
                      </li>
                  </ol>
              </div>
            </div>
            <div className='fourth-data mt-5'>
            <Row xs={1} md={2} lg={2} className="g-4">
               {
                  data4.map(data => <Data key={data.id} data={data}></Data>)
               }
              </Row>
            </div>
           
        </div>
    );
};

export default Home;