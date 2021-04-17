import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://arcane-reef-90996.herokuapp.com/services')
            .then(function (response) {
                const data = response.data;
                setServices(data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }, [])

    return (
        <div id="services" className="container ms-auto me-auto services">
            <h5 className='text-center'>Our Service List</h5>
            <h1 className='text-center'>Services we are providing</h1>
            <div className="row d-flex flex-wrap justify-content-evenly pt-5">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;