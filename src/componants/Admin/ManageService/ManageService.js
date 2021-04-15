import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(function (response) {
                const data = response.data;
                setServices(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [services])

    const handleDelete = () => {
        
    }
    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Manage</th>
                </tr>
            </thead>
            <tbody>
                {
                    services.map((service, index) =>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{service.name}</td>
                            <td>{service.price}</td>
                            <td><button onClick={() => handleDelete(`${service._id}`)} className="btn btn-danger">Delete</button></td>
                        </tr>)
                }
            </tbody>
        </table>
    );
};

export default ManageService;