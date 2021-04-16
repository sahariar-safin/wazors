import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import Navbar from '../../Sheared/Navbar/Navbar';
import { GoogleSignIn } from './login.manager';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let { from } = location.state || { from: { pathname: "/" } };
    const handleLoggedUser = ({ displayName, email, photoURL }) => {
        const user = {
            name: displayName,
            email: email,
            isAdmin: false,
            photoURL: photoURL
        }
        setLoggedInUser(user);
        addUser(user)
    }

    const addUser = (userData) => {
        userData._id = userData.email;
        axios.post('http://localhost:5000/addUser', userData)
            .then(function (response) {

            })
            .catch(function (error) {

            });
        history.replace(from);
    }

    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(res => {
                handleLoggedUser(res);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="d-flex justify-content-center mt-5">
                <button onClick={handleGoogleSignIn} className="btn btn-success">Login With Google</button>
            </div>
        </div>
    );
};

export default Login;