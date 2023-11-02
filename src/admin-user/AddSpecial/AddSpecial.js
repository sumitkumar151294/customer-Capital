import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { onAddSpecialSubmit } from '../../redux/modules/UserAdmin/addSpecialSlice';
import Loader from '../../Admin/Loader/Loader'


const AddSpecial = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({ name: "", number: "", order: "", status: "" });
    const [errors, setErrors] = useState({ name: "", number: "", order: "", status: "" });
    const [isLoading, setIsLoading] = useState("true");
    const [isformLoading, setIsFormLoading] = useState("true");

    const specialList = [
        {
            sectionName: 'Recommended Gifts',
            displayOrder: 1,
            maxBrands: 5,
            status: 'Active',
        },
        {
            sectionName: 'Best Seller',
            displayOrder: 2,
            maxBrands: 3,
            status: 'Active',
        },
        {
            sectionName: 'Diwali Special',
            displayOrder: 3,
            maxBrands: 5,
            status: 'Active',
        },
        {
            sectionName: "Let's Shop Again",
            displayOrder: 4,
            maxBrands: 2,
            status: 'Active',
        },
    ];

    const handleChange = (e, fieldName) => {
        setData({
            ...data,
            [fieldName]: e.target.value,
        });

        // Remove the error message when the user starts typing
        setErrors({
            ...errors,
            [fieldName]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = { ...errors };

        // Check if fields are empty and set corresponding error messages
        for (const key in data) {
            if (data[key] === '') {
                newErrors[key] = 'This field is required';
                isValid = false;
            } else {
                newErrors[key] = '';
            }
        }

        setErrors(newErrors);

        if (isValid) {
            dispatch(onAddSpecialSubmit(data))
        }
    };

    return (
        <div class="content-body">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Add Special Master</h4>
                            </div>

                            <div class="card-body position-relative">
                                {!isformLoading ? (
                                    <div style={{ height: "150px" }}>
                                        <Loader classType={"absoluteLoader"} />
                                    </div>
                                ) : (
                                    <div class="container-fluid">
                                        <form onSubmit={handleSubmit}>
                                            <div class="row">

                                                <div class="col-sm-3 form-group mb-2">
                                                    <label for="name-f">Section Name</label>
                                                    <input type="text" class="form-control" name="fname" id="name-f" placeholder="" onChange={(e) => handleChange(e, 'name')} />
                                                    <p className="text-danger">{errors.name}</p>
                                                </div>
                                                <div class="col-sm-3 form-group mb-2">
                                                    <label for="order">Display Order</label>
                                                    <input type="order" class="form-control" name="order" id="order" placeholder="" onChange={(e) => handleChange(e, 'order')} />
                                                    <p className="text-danger">{errors.order}</p>
                                                </div>

                                                <div class="col-sm-3 form-group mb-2">
                                                    <label for="status">Status</label>
                                                    <select class="form-select" aria-label="Default select example" onChange={(e) => handleChange(e, 'status')}>
                                                        <option selected="">Select</option>
                                                        <option value="Active">Active</option>
                                                        <option value="Non-Active">Non-Active</option>
                                                    </select>
                                                    <p className="text-danger">{errors.status}</p>
                                                </div>

                                                <div class="col-sm-3 form-group mb-2">
                                                    <label for="name-f">Max. No. of Brands</label>
                                                    <input type="text" class="form-control" name="fname" id="name-f" placeholder="" onChange={(e) => handleChange(e, 'number')} />
                                                    <p className="text-danger">{errors.number}</p>
                                                </div>
                                                <div class="col-sm-12 form-group mb-0 mt-2">
                                                    <button class="btn btn-primary float-right pad-aa">Submit <i class="fa fa-arrow-right"></i></button>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid  pt-0">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="container-fluid">
                                <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                                    <div class="card-header">
                                        <h4 class="card-title">Add Special List</h4>
                                    </div>
                                </div>

                                <div class="card-body position-relative">
                                    {!isLoading ? (
                                        <div style={{ height: "400px" }}>
                                            <Loader classType={"absoluteLoader"} />
                                        </div>
                                    ) : (
                                        <div class="table-responsive">
                                            <table class="table header-border table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th>Section Name</th>
                                                        <th>Display Order</th>
                                                        <th>Max. no. of Brands</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {specialList.length > 0 ? (
                                                        specialList.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    <strong>{item.sectionName}</strong>
                                                                </td>
                                                                <td>{item.displayOrder}</td>
                                                                <td>{item.maxBrands}</td>
                                                                <td>
                                                                    <span className="badge badge-success">{item.status}</span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex">
                                                                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1">
                                                                            <i className="fas fa-pencil-alt"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp">
                                                                            <i className="fa fa-trash"></i>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <a href="allocatebrands.html" className="btn btn-primary btn-sm float-right">
                                                                        <i className="fa fa-plus"></i>&nbsp;Allocate Brands
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="6">
                                                                <p>No data found.</p>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSpecial