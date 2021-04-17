import React from 'react';
import { useHistory } from 'react-router';
import './Sarvice.css';

const Service = ({ service }) => {
    let history = useHistory();
    return (
        <div class="col-md-4 service">
            <div onClick={() => history.push(`/book/${ service._id }`)} class="service card">
                <img src={`data:image/jpeg;base64,${ service.image.img }`} class="img-fluid card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{service.name}</h5>
                    <p class="card-text">{service.description}</p>
                    <strong>${service.price}</strong> <br />
                </div>
            </div>
        </div>
    );
};

export default Service;