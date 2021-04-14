import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testmonials from '../Testmonials/Testmonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;