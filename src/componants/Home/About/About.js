import React from 'react';
import './About.css';
import AboutImage from '../../../Images/liang-gao-r4YuSr9451k-unsplash.jpg';

const About = () => {
    return (
        <div className="container about row align-items-center ms-auto me-auto justify-content-around">
            <div class="col-md-4 col-sm-12 col-xs-12">
                <img src={AboutImage} className="img-fluid" alt="" />
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
                <h4>About Wazors</h4>
                <h1>We're Leader in Wall
                <br/>
                Paint Design Market</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero dignissimos sint corrupti officia illo at facilis magnam cupiditate quisquam!</p>
                
            </div>
        </div>
    );
};

export default About;