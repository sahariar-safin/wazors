import React from 'react';
import './Testmonial.css'

const Testmonial = ({ review, index }) => {
    return (
        <div class={index === 0 ? "testmonial carousel-item active" : "testmonial carousel-item"}>
            <img src={review.loggedInUser.photoURL} class="d-block" alt="..." />
            <h5 className='text-center'><strong>{review.name}</strong></h5>
            <p className="text-center"><small>{review.companyName}</small></p>
            <p className='text-center'>{review.description}</p>
        </div>
    );
};

export default Testmonial;