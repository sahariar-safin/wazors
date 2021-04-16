import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const AddAdmin = () => {
    const [peoples, setPeoples] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(function (response) {
                const data = response.data;
                setPeoples(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [peoples])

    const handleRole = (id, role) => {
        const data = {
            peopleRole: role,
            peopleId: id
        }
        axios.post('http://localhost:5000/managePeople', data)
            .then(function (response) {
                
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
                    <th scope="col">Manage</th>
                </tr>
            </thead>
            <tbody>
                {
                    peoples.map((people, index) =>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{people.name}</td>
                            <td>{people.email}</td>
                            <td>

                                <div class="dropdown">
                                    <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> Set Role</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li onClick={() => handleRole(`${ people._id }`, ` ${ people.isAdmin }`)}><a className={people.isAdmin === true ? "dropdown-item active" : "dropdown-item"} href="#">Admin</a></li>
                                        <li onClick={() => handleRole(`${ people._id }`, `${ people.isAdmin }`)}><a className={people.isAdmin === false ? "dropdown-item active" : "dropdown-item"} href="#">User</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>)
                }
            </tbody>
        </table >
    );
};

export default AddAdmin;