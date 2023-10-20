import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { onVendorSubmit } from '../../redux/modules/Admin/vendorSlice';
import Loader from '../Loader/Loader'

const VendorMaster = () => {
    const vendorList = [
        {
            name: 'Jaswant Rawat',
            clientId: '#26589',
            username: 'JOJO',
            password: '******',
            status: 'Active',
        },
        {
            name: 'Manish Gautam',
            clientId: '#58746',
            username: 'MG',
            password: '************',
            status: 'Non-Active',
        },
        {
            name: 'Naveen Jha',
            clientId: '#09808',
            username: "It's Naveen Jha",
            password: '*********',
            status: 'Active',
        },
        {
            name: 'Vithal Chaudhary',
            clientId: '#45686',
            username: 'Mr.Vithal',
            password: '**************',
            status: 'Non-Active',
        },
    ];
    console.log(vendorList, vendorList.length);

    const [vendorData, setVendorData] = useState({ name: '', secret: '', id: '', username: '', password: '', endPoint: '', code: '', status: '' });
    const [errors, setErrors] = useState({ name: '', secret: '', id: '', username: '', password: '', endPoint: '', code: '', status: '' });
    const [isLoading, setIsLoading] = useState('true')
    const [isformLoading, setIsFormLoading] = useState('true')

    const dispatch = useDispatch();

    const handleChange = (e, fieldName) => {
        setVendorData({
            ...vendorData,
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
        for (const key in vendorData) {
            if (vendorData[key] === '') {
                newErrors[key] = 'This field is ';
                isValid = false;
            } else {
                newErrors[key] = '';
            }
        }
        // Email validation using the regexEmail pattern
        const regexEmail = /[a-zA-Z0-9]+([\_\.\-{1}])?[a-zA-Z0-9]+\@[a-zA-Z0-9]+(\.[a-zA-Z\.]+)/g;
        if (!regexEmail.test(vendorData.secret)) {
            newErrors.secret = 'Invalid email format';
            isValid = false;
        }
        setErrors(newErrors);

        if (isValid) {
            dispatch(onVendorSubmit(vendorData));
        }
    };

    return (
        <>
            <div class="content-body">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-xl-12 col-xxl-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Vendor Master</h4>
                                </div>
                                <div class="card-body position-relative">
                                    {!isformLoading ? (
                                        <div style={{ height: '200px' }}>
                                            <Loader classType={'absoluteLoader'} />
                                        </div>
                                    ) : (
                                        <div class="container mt-3">
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-sm-4 form-group mb-2">
                                                        <label htmlFor="name-f">Vendor Name</label>
                                                        <input type="text" className="form-control" name="fname" id="name-f" placeholder="" onChange={(e) => handleChange(e, "name")} />
                                                        <p className="text-danger">{errors.name}</p>
                                                    </div>

                                                    <div className="col-sm-4 form-group mb-2">
                                                        <label htmlFor="name-l">Client ID</label>
                                                        <input type="text" className="form-control" name="lname" id="name-l" placeholder="" onChange={(e) => handleChange(e, "id")} />
                                                        <p className="text-danger">{errors.id}</p>
                                                    </div>

                                                    <div className="col-sm-4 form-group mb-2">
                                                        <label htmlFor="email">Client Secret</label>
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="" onChange={(e) => handleChange(e, "secret")} />
                                                        <p className="text-danger">{errors.secret}</p>
                                                    </div>

                                                    <div className="col-sm-4 form-group mb-2">
                                                        <label htmlFor="email">Username</label>
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="" onChange={(e) => handleChange(e, "username")} />
                                                        <p className="text-danger">{errors.username}</p>
                                                    </div>

                                                    <div className="col-sm-4 form-group mb-2">
                                                        <label htmlFor="pass">Password</label>
                                                        <input type="password" name="password" className="form-control" id="pass" placeholder="" onChange={(e) => handleChange(e, "password")}
                                                        />
                                                        <p className="text-danger">{errors.password}</p>
                                                    </div>

                                                    <div className="col-sm-4 form-group mb-2">
                                                        <label htmlFor="status">Status</label>
                                                        <select className="form-select" aria-label="Default select example" name="status" value={vendorData.status} onChange={(e) => handleChange(e, "status")} >
                                                            <option value="" disabled>Select</option>
                                                            <option value="Active">Active</option>
                                                            <option value="Non-Active">Non-Active</option>
                                                        </select>
                                                        <p className="text-danger">{errors.status}</p>
                                                    </div>

                                                    <div className="col-sm-6 form-group mb-2">
                                                        <label htmlFor="zip">End Point</label>
                                                        <input type="text" className="form-control" name="Zip" id="zip" placeholder="" onChange={(e) => handleChange(e, "endPoint")} />
                                                        <p className="text-danger">{errors.endPoint}</p>
                                                    </div>

                                                    <div className="col-sm-6 form-group mb-2">
                                                        <label htmlFor="pass">Authorization Code</label>
                                                        <input type="password" name="password" className="form-control" id="pass" placeholder="" onChange={(e) => handleChange(e, "code")} />
                                                        <p className="text-danger">{errors.code}</p>
                                                    </div>

                                                    <div className="col-sm-12 form-group mb-0 mt-2">
                                                        <button type="submit" className="btn btn-primary float-right pad-aa">Submit <i className="fa fa-arrow-right"></i></button>
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

                <div className="container-fluid pt-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Vendor List</h4>
                                </div>

                                <div className="card-body position-relative">
                                    {!isLoading ? (
                                        <Loader classType={'absoluteLoader'} />
                                    ) : (
                                        <div className="table-responsive">
                                            <table className="table header-border table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th>Contact Name</th>
                                                        <th>Contact Number</th>
                                                        <th>Contact Email</th>
                                                        <th>Client ID</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {vendorList.length > 0 ? (
                                                        vendorList.map((vendor, index) => (
                                                            <tr key={index}>
                                                                <td>{vendor.name}</td>
                                                                <td>{vendor.clientId}</td>
                                                                <td>
                                                                    <span className="text-muted">{vendor.username}</span>
                                                                </td>
                                                                <td>{vendor.password}</td>
                                                                <td>
                                                                    <span className={`badge ${vendor.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>{vendor.status}</span>
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
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan='6' className='text-center'>
                                                                No data found
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
        </>
    )
}

export default VendorMaster