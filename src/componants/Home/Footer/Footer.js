import React from 'react';
import './Footer.css';
import { faFacebookF } from '@fortawesome/free-solid-svg-icons'
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const noNamed = [
        { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corrupti.", link: "" },
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Our Team", link: "/team" },
        { name: "Our Gallery", link: "/gallery" },
        { name: "Contact", link: "/contact" },
    ]
    const services = [
        { name: "Room Wallpapers", link: "/room-wallpapers" },
        { name: "Wall Painting", link: "/wall-painting" },
    ]
    return (
        <footer className="footer-area bg-brand clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"WAZORS"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Links" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Contact" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><i class="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="//google.com"></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-light text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;