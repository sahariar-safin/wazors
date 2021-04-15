import React from 'react';
import { Route } from 'react-router';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <Route path='/admin/addservice'>
                    <AddService></AddService>
                </Route>
            </div>
        </div>
    );
};

export default Admin;