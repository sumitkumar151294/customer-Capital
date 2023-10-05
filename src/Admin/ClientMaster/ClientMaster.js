import React, { useState } from 'react'
import '../HomeAdmin/Admin.css'
import { useDispatch } from 'react-redux';
import { onClientMasterSubmit } from '../../redux/modules/Admin/clientMasterSlice';

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

    const [clientData, setClientData] = useState({
        name: '',
        number: '',
        email: '',
        domain: '',
        dns: '',
        ipAddress: '',
        domainProvider: '',
        color: '',
        stagingKey: '',
        stagingSecretKey: '',
        productionKey: '',
        productionSecretKey: '',
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
                            <div class="card-body ">
                                <div class="container mt-3">
                                    <form onSubmit={handleSubmit}>
                                        <div class="row">

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="name-f">Contact Name</label>
                                                <input type="text" class="form-control" name="fname" id="name-f" placeholder="" onChange={(e) => setClientData({ ...clientData, name: e.target.value })} required />
                                            </div>
                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="name-l">Contact Number</label>
                                                <input type="text" class="form-control" name="lname" id="name-l" placeholder="" onChange={(e) => setClientData({ ...clientData, number: e.target.value })} required />
                                            </div>
                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="email">Contact Email</label>
                                                <input type="email" class="form-control" name="email" id="email" placeholder="" onChange={(e) => setClientData({ ...clientData, email: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="email">Domain</label>
                                                <input type="email" class="form-control" name="email" id="email" placeholder="" onChange={(e) => setClientData({ ...clientData, domain: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="pass">DNS</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" onChange={(e) => setClientData({ ...clientData, dns: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="pass">IP Address</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" onChange={(e) => setClientData({ ...clientData, ipAddress: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="pass">Domain Provider</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" onChange={(e) => setClientData({ ...clientData, domainProvider: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2 d-none">
                                                <label for="pass">DB Link</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" onChange={(e) => setClientData({ ...clientData, link: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2 d-none">
                                                <label for="pass">DB Username</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" onChange={(e) => setClientData({ ...clientData, username: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2 d-none">
                                                <label for="pass">DB Password</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" onChange={(e) => setClientData({ ...clientData, password: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2 d-none">
                                                <label for="pass">DB Type</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" onChange={(e) => setClientData({ ...clientData, type: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="status">Status</label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Select</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Non-Active">Non-Active</option>
                                                </select>
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="name-f">Color</label>
                                                <input type="color" class="form-control" name="fname" id="name-f" placeholder="" onChange={(e) => setClientData({ ...clientData, color: e.target.value })} required />
                                            </div>

                                            <div class="col-sm-12 input-group mb-2 mt-2">

                                                <div class="form-file">

                                                    <input type="file" class="form-file-input form-control" />
                                                </div>
                                                <span class="input-group-text">Upload Logo</span>
                                            </div>

                                            <div class="row mt-2" >
                                                <h3 style={{ borderBottom: '1px solid #ededed' }}> Razorpay Payment Gateway</h3>

                                                <div class="col-lg-6 mt-2">
                                                    <div class="row p-0">
                                                        <h4>Staging</h4>
                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Key" onChange={(e) => setClientData({ ...clientData, stagingKey: e.target.value })} required />
                                                        </div>

                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Secret Key" onChange={(e) => setClientData({ ...clientData, stagingSecretKey: e.target.value })} required />
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="col-lg-6 mt-2">
                                                    <div class="row p-0">
                                                        <h4>Production</h4>
                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Key" onChange={(e) => setClientData({ ...clientData, productionKey: e.target.value })} required />
                                                        </div>

                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Secret Key" onChange={(e) => setClientData({ ...clientData, productionSecretKey: e.target.value })} required />
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
                                            {clientMasterList.map((item, index) => (
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
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            );
}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ClientMaster
