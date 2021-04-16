import React, { useEffect, useState } from 'react';
import './Testmonials.css';
import img from '../../../Images/finn-zoQJIGS5EmQ-unsplash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Testmonial from '../Testmonial/Testmonial';

const Testmonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/review')
            .then(function (response) {
                const data = response.data;
                setReviews(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

    return (
        <div className="container testmonials row align-items-center ms-auto me-auto">
            <h3 className="text-center">Testmonials</h3>
            <div id="carouselExampleControls" class="carousel slide" data-bs-interval="3000" data-bs-ride="carousel">
                <div class="carousel-inner">
                    {
                        reviews.map((review, index) => <Testmonial index={index} review={review}></Testmonial>)
                    }
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