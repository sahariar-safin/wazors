import React from 'react';
import Navbar from '../../Sheared/Navbar/Navbar';
import './Header.css';
import HeaderImage from '../../../Images/finn-zoQJIGS5EmQ-unsplash.jpg';

const Header = () => {
    return (
        <main className="homeHeader bg-light container-fluid">
            <div class="row align-items-center justify-content-around">
                <div class="col-4">
                    <h1>We Build <br/> Your Dream</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae possimus qui?</p>
                    <button className="btn btn-primary">Discover More</button>
                </div>
                <div class="col-4 mt-5">
                    <img src={HeaderImage} className="img-fluid rounded" alt=""/>
                </div>
            </div>
        </main>
    );
};

export default Header;