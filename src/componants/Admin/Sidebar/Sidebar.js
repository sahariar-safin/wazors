import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faUserPlus, faTasks, faHome, faCommentAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState();

    useEffect(() => {
        axios.post('https://arcane-reef-90996.herokuapp.com/isAdmin', loggedInUser)
            .then(function (response) {
                const data = response.data[0].isAdmin;
                setIsAdmin(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <div className="sidebar bg-light d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-dark" >
                        <span><FontAwesomeIcon icon={faHome} />Home</span>
                    </Link>
                </li>
                {
                    isAdmin
                        ? <>
                            <li>
                                <Link to="/admin/orders" className="text-dark">
                                    <span> <FontAwesomeIcon icon={faList} /> Order List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/addservice" className="text-dark">
                                    <span><FontAwesomeIcon icon={faPlus} />Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/addadmin" className="text-dark">
                                    <span><FontAwesomeIcon icon={faUserPlus} />Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/manageservice" className="text-dark" >
                                    <span><FontAwesomeIcon icon={faTasks} />Manage Service</span>
                                </Link>
                            </li>
                        </>
                        : <>
                            <li>
                                <Link to="/#services" className="text-dark" >
                                    <span><FontAwesomeIcon icon={faCartPlus} />Book</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/booking" className="text-dark" >
                                    <span><FontAwesomeIcon icon={faList} />Booking List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/review" className="text-dark" >
                                    <span><FontAwesomeIcon icon={faCommentAlt} />Review</span>
                                </Link>
                            </li>
                        </>
                }
            </ul>
            <div>
                <Link to="/" className="text-dark"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;