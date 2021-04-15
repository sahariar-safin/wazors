import React from 'react';
import './Testmonials.css';
import img from '../../../Images/finn-zoQJIGS5EmQ-unsplash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Testmonials = () => {
    return (
        <div className="container testmonials row align-items-center ms-auto me-auto">
            <h3 className="text-center">Testmonials</h3>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev carousel-control" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <FontAwesomeIcon icon={faChevronLeft} ></FontAwesomeIcon>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next carousel-control" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <FontAwesomeIcon icon={faChevronRight} ></FontAwesomeIcon>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Testmonials;