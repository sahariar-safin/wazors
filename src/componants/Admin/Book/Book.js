import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../PaymentProcess/PaymentProccess';

const Book = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState([]);
    const [shippingData, setShippingData] = useState(null);
    const { id } = useParams();
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => {
        data.serviceName = service.name;
        setShippingData(data);
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

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...shippingData,
            userData: loggedInUser,
            serviceImage: service.image.img,
            paymentId: paymentId,
            orderStatus: "Pending",
            orderTime: new Date()
        };

        axios.post('http://localhost:5000/addOrder', orderDetails)
            .then(function (response) {
                console.log(response);
                history.push('/dashboard/booking')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row">
            <form style={{ display: shippingData ? 'none' : 'block' }} onSubmit={handleSubmit(onSubmit)} class="g-3">
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
                    <input defaultValue={service.name} disabled type="text" class="form-control" id="inputDescription" placeholder="Booking Service" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Confirm and Process to Pay</button>
                </div>
            </form>
            <div style={{ display: shippingData ? 'block' : 'none' }} >
                <h2>Please Pay for me</h2>
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
    );
};

export default Book;