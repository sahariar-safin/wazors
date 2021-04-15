import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState([]);
    const { id } = useParams();
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => {
        data.serviceName = service.name;
        console.log(data);
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/service?id=${ id }`)
            .then(function (response) {
                const data = response.data[0];
                setService(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    return (
        <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
            <div class="col-md-6">
                <label for="inputName" class="form-label">Name</label>
                <input defaultValue={loggedInUser.name} {...register("name", { required: true })} type="name" class="form-control" id="inputName" />
            </div>
            <div class="col-md-6">
                <label for="inputPrice" class="form-label">Email</label>
                <input defaultValue={loggedInUser.email} {...register("email", { required: true })} type="email" class="form-control" id="inputPrice" />
            </div>
            <div class="col-12">
                <label for="inputDescription" class="form-label">Booking Service</label>
                <input disabled defaultValue={service.name} type="text" class="form-control" id="inputDescription" placeholder="Booking Service" />
            </div>

            <h3> <strong>Pay with</strong> <br />
                <small>Credit card</small> </h3>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Pay</button>
            </div>
        </form>
    );
};

export default Book;