import React from 'react';
import { Route } from 'react-router';
import Home from '../../Home/Home/Home';
import AddService from '../AddService/AddService';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import ManageService from '../ManageService/ManageService';
import Sidebar from '../Sidebar/Sidebar';
import Review from '../Review/Review'

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
                <Route path='/dashboard/booking'>
                    <BookingList></BookingList>
                </Route>
                <Route path='/dashboard/review'>
                    <Review></Review>
                </Route>
                <Route path='/book/:id'>
                    <Book></Book>
                </Route>
            </div>
        </div>
    );
};

export default Admin;