import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/order', loggedInUser)
            .then(function (response) {
                const data = response.data;
                setOrders(data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [orders])

    return (
        <div>
            <h1>Booking List</h1>
            <div className="container row d-flex flex-wrap justify-content-evenly">
                {
                    orders.map(order =>
                        <div class="order card">
                            <img style={{ height: "250px" }} src={`data:image/jpeg;base64,${ order.serviceImage }`} class="img-fluid card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{order.serviceName}</h5>
                                <p class="card-text">{order.description}</p>
                                <div className={order.orderStatus === "Pending" ? 'card bg-danger ' : 'card bg-success'}>
                                    <p className="text-center"><strong>{order.orderStatus}</strong></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default BookingList;