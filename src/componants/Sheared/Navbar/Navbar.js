import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Wazors</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link">Project</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        {
                            loggedInUser.photoURL
                                ? <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={loggedInUser.photoURL} alt="" />
                                : <Link to="/login"><button class="btn btn-primary" type="submit">Login</button></Link>
                        }
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;