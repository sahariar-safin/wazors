import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    

    return (
        <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
            <div class="col-md-6">
                <label for="inputName" class="form-label">Name</label>
                <input defaultValue={loggedInUser.name} {...register("name", { required: true })} type="name" class="form-control" id="inputName" />
            </div>
            <div class="col-md-6">
                <label for="inputPrice" class="form-label">Price</label>
                <input defaultValue={loggedInUser.email} {...register("price", { required: true })} type="number" class="form-control" id="inputPrice" />
            </div>
            <div class="col-12">
                <label for="inputDescription" class="form-label">Description</label>
                <input disabled defaultValue={ }  {...register("description", { required: true })} type="text" class="form-control" id="inputDescription" placeholder="Description" />
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </form>
    );
};

export default Book;