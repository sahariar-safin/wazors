import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/orders')
            .then(function (response) {
                const data = response.data;
                setOrders(data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }, [orders])

    const handleOrder = (id, status) => {
        const data = {
            orderStatus: status,
            orderId: id
        }
        console.log(data);
        axios.post('http://localhost:5000/manageOrder', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                    <th scope="col">Manage</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) =>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.serviceName}</td>
                            <td>

                                <div class="dropdown">
                                    <button className={order.orderStatus === "Pending" ? "btn btn-outline-danger dropdown-toggle" : "btn btn-outline-success dropdown-toggle"} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{order.orderStatus}</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li onClick={() => handleOrder(`${ order._id }`, ` ${ order.orderStatus }`)}><a className={order.orderStatus === "Pending" ? "dropdown-item active" : "dropdown-item"} href="#">Pending</a></li>
                                        <li onClick={() => handleOrder(`${ order._id }`, `${ order.orderStatus }`)}><a className={order.orderStatus === "On going" ? "dropdown-item active" : "dropdown-item"} href="#">On Going</a></li>
                                        <li onClick={() => handleOrder(`${ order._id }`, `${ order.orderStatus }`)}><a className={order.orderStatus === "Done" ? "dropdown-item active" : "dropdown-item"} href="#">Done</a></li>
                                    </ul>
                                </div></td>
                        </tr>)
                }
            </tbody>
        </table>
    );
};

export default OrderList;