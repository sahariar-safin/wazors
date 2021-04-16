import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageService = () => {
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
    }, [services])

    const handleDelete = (id) => {
        axios.delete(`https://arcane-reef-90996.herokuapp.com/serviceDelete?id=${ id }`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
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
                            <td><button onClick={() => handleDelete(`${ service._id }`)} className="btn btn-danger"> <FontAwesomeIcon icon={faTrashAlt} /></button></td>
                        </tr>)
                }
            </tbody>
        </table>
    );
};

export default ManageService;