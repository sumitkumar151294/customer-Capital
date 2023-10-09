import React, { useState } from 'react'
import '../HomeAdmin/Admin.css'
import { useDispatch } from 'react-redux';
import { onClientMasterSubmit } from '../../redux/modules/Admin/clientMasterSlice';
import Loader from '../Loader/Loader'

const ClientMaster = () => {
    const clientMasterList = [
        {
            contactName: 'Jaswant Rawat',
            contactNumber: '9650531790',
            contactEmail: 'jaswant@way2webworld.com',
            clientId: '#98878',
            status: 'Active',
        },
        {
            contactName: 'Manish Gautam',
            contactNumber: '7838345657',
            contactEmail: 'manishgautam.1@way.webworld.com',
            clientId: '#98788',
            status: 'Non-Active',
        },
        {
            contactName: 'Naveen Jha',
            contactNumber: '9876680901',
            contactEmail: 'naveenjha@way2webworld.com',
            clientId: '#78899',
            status: 'Active',
        },
        {
            contactName: 'Vithal Chaudhary',
            contactNumber: '7890654321',
            contactEmail: 'vithalchaudhary@way2webworld.com',
            clientId: '#98766',
            status: 'Non-Active',
        },
    ];

    const [isLoading, setIsLoading] = useState('true')

    const [clientData, setClientData] = useState({
        name: '',
        number: '',
        email: '',
        ipAddress: '',
        color: '',
        logoLink: '',
        theme: '',
        stagingKey: '',
        stagingSecretKey: '',
        productionKey: '',
        productionSecretKey: '',
        status: ''
    });

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(onClientMasterSubmit(clientData));
    };

    return (
        <div class="content-body">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Client Master</h4>
                            </div>
                            <div class="card-body">
                                <div class="container mt-3">
                                    <form onSubmit={handleSubmit}>
                                        <div class="row">

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="contact-name">Contact Name</label>
                                                <input type="text" class="form-control" name="contactName" id="contact-name" placeholder="" onChange={(e) => setClientData({ ...clientData, name: e.target.value })} required />
                                            </div>
                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="contact-number">Contact Number</label>
                                                <input type="text" class="form-control" name="contactNumber" id="contact-number" placeholder="" onChange={(e) => setClientData({ ...clientData, number: e.target.value })} required />
                                            </div>
                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="contact-email">Contact Email</label>
                                                <input type="email" class="form-control" name="contactEmail" id="contact-email" placeholder="" onChange={(e) => setClientData({ ...clientData, email: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="ipAddress">Database IP Address</label>
                                                <input type="text" class="form-control" name="ipAddress" id="ipAddress" placeholder="" onChange={(e) => setClientData({ ...clientData, ipAddress: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="status">Status</label>
                                                <select class="form-select" name="status"
                                                    value={clientData.status}
                                                    onChange={(e) => setClientData({ ...clientData, status: e.target.value })}
                                                    id="status" aria-label="Default select example">
                                                    <option selected>Select</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Non-Active">Non-Active</option>
                                                </select>
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="color">Color</label>
                                                <input type="color" class="form-control" name="color" id="color" placeholder="" onChange={(e) => setClientData({ ...clientData, color: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-6 form-group mb-2">
                                                <label for="logo">Logo Link</label>
                                                <input type="text" class="form-control" name="logo" id="logo" placeholder="" onChange={(e) => setClientData({ ...clientData, logoLink: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-6 form-group mb-2">
                                                <label for="status">Select Theme</label>
                                                <select class="form-select"
                                                    value={clientData.theme}
                                                    onChange={(e) => setClientData({ ...clientData, theme: e.target.value })}
                                                    aria-label="Default select example">
                                                    <option selected>Select Theme</option>
                                                    <option value="Active">Theme 1</option>
                                                    <option value="Non-Active">Theme 2</option>
                                                    <option value="Non-Active">Theme 3</option>
                                                    <option value="Non-Active">Theme 4</option>
                                                </select>
                                            </div>

                                            <div class="row mt-2">
                                                <h3 style={{ borderBottom: '1px solid #ededed' }}>Razorpay Payment Gateway</h3>

                                                <div class="col-lg-6 mt-2">
                                                    <div class="row p-0">
                                                        <h4>Staging</h4>
                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="stagingKey" id="staging-key" placeholder="Key" onChange={(e) => setClientData({ ...clientData, stagingKey: e.target.value })} required />
                                                        </div>

                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="stagingSecretKey" id="staging-secret-key" placeholder="Secret Key" onChange={(e) => setClientData({ ...clientData, stagingSecretKey: e.target.value })} required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 mt-2">
                                                    <div class="row p-0">
                                                        <h4>Production</h4>
                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="productionKey" id="production-key" placeholder="Key" onChange={(e) => setClientData({ ...clientData, productionKey: e.target.value })} required />
                                                        </div>

                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="productionSecretKey" id="production-secret-key" placeholder="Secret Key" onChange={(e) => setClientData({ ...clientData, productionSecretKey: e.target.value })} required />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-sm-12 form-group mb-0 mt-2">
                                                <button type='submit' class="btn btn-primary float-right pad-aa">Add<i class="fa fa-arrow-right"></i></button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-0">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Client List</h4>
                            </div>

                            <div className="card-body">
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
                                            {clientMasterList.length > 0 ? (
                                                clientMasterList.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.contactName}</td>
                                                        <td>{item.contactNumber}</td>
                                                        <td>
                                                            <span className="text-muted">{item.contactEmail}</span>
                                                        </td>
                                                        <td>{item.clientId}</td>
                                                        <td>
                                                            <span className={`badge ${item.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                                                                {item.status}
                                                            </span>
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
                                                    <td colSpan="6">
                                                        {isLoading ? (
                                                            <Loader />
                                                        ) : (
                                                            "No data found"
                                                        )}
                                                    </td>
                                                </tr>
                                            )}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ClientMaster
