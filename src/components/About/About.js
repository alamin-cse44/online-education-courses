import React from 'react';
import logo from '../../images/cr-3.jpg';
import st1 from '../../images/st1.jpg';
import st2 from '../../images/st2.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className='first-container mt-5 d-flex justify-content-center'>
               <div className="about-text">
                   <h2 className="mb-2">Welcome To Our Educational Platform</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus fugit aliquam ab, omnis accusamus. Laborum, iste beatae. A debitis ipsa quam, et architecto quia nobis suscipit exercitationem obcaecati esse earum ut est eveniet cupiditate magni reprehenderit accusantium doloribus quisquam veritatis amet fuga. Quidem dicta quod et, ipsum minima laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quaerat velit ut accusamus non voluptatem cum ab qui aut quidem culpa quam, tempora similique quasi distinctio quia. Iure, qui ipsum.</p>
               </div>
               <img className="img-fluid" src={logo} alt="" />
            </div>

            <div className="second-container">
              <div className="second-first d-flex">
                 <img className="profile" src={st1} alt="" />
                 <div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque praesentium dignissimos. Pariatur aut hic, reiciendis accusamus vero laudantium animi autem, eaque nisi, blanditiis unde! Vero aliquid nobis cumque temporibus!</p>
                 </div>
              </div>
              <div className="second-last d-flex">
                <img className="profile" src={st2} alt="" />
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptate illo asperiores consequatur perspiciatis similique iste deleniti tenetur quaerat cum vero officia atque nesciunt, magnam velit natus praesentium nisi sapiente.</p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default About;