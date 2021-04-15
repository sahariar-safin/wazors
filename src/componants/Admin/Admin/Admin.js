import React from 'react';
import { Route } from 'react-router';
import AddService from '../AddService/AddService';
import ManageService from '../ManageService/ManageService';
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
                <Route path='/admin/manageservice'>
                    <ManageService></ManageService>
                </Route>
            </div>
        </div>
    );
};

export default Admin;