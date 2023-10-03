import React from 'react'
import '../HomeAdmin/Admin.css'

const ClientMaster = () => {
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
                                    <form>
                                        <div class="row">

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="name-f">Contact Name</label>
                                                <input type="text" class="form-control" name="fname" id="name-f" placeholder="" required />
                                            </div>
                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="name-l">Contact Number</label>
                                                <input type="text" class="form-control" name="lname" id="name-l" placeholder="" required />
                                            </div>
                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="email">Contact Email</label>
                                                <input type="email" class="form-control" name="email" id="email" placeholder="" required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="email">Domain</label>
                                                <input type="email" class="form-control" name="email" id="email" placeholder="" required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="pass">DNS</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="pass">IP Address</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="pass">Domain Provider</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2 d-none">
                                                <label for="pass">DB Link</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2 d-none">
                                                <label for="pass">DB Username</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2 d-none">
                                                <label for="pass">DB Password</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" required />
                                            </div>

                                            <div class="col-sm-4 form-group mb-2 d-none">
                                                <label for="pass">DB Type</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="" required />
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
                                                <input type="color" class="form-control" name="fname" id="name-f" placeholder="" required />
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
                                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Key" required />
                                                        </div>

                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Secret Key" required />
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="col-lg-6 mt-2">
                                                    <div class="row p-0">
                                                        <h4>Production</h4>
                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Key" required />
                                                        </div>

                                                        <div class="col-sm-12 form-group mb-2">
                                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Secret Key" required />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                            <div class="col-sm-12 form-group mb-0 mt-2">
                                                <button class="btn btn-primary float-right pad-aa">Add <i class="fa fa-arrow-right"></i></button>
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

                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table header-border table-responsive-sm">
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
                                            <tr>
                                                <td>Jaswant Rawat<a href="javascript:void();"></a>
                                                </td>
                                                <td>9650531790</td>
                                                <td><span class="text-muted">jaswant@way2webworld.com</span>
                                                </td>
                                                <td>#98878</td>
                                                <td><span class="badge badge-success">Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                    <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                    <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                </div></td>
                                            </tr>
                                            <tr>
                                                <td>Manish Gautam<a href="javascript:void();"></a>
                                                </td>
                                                <td>7838345657</td>
                                                <td><span class="text-muted">manishgautam.1@way.webworld.com</span>
                                                </td>
                                                <td>#98788</td>
                                                <td><span class="badge badge-danger">Non-Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                    <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                    <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                </div></td>
                                            </tr>
                                            <tr>
                                                <td>Naveen Jha<a href="javascript:void();"></a>
                                                </td>
                                                <td>9876680901</td>
                                                <td><span class="text-muted">naveenjha@way2webworld.com</span>
                                                </td>
                                                <td>#78899</td>
                                                <td><span class="badge badge-success">Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                    <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                    <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                </div></td>
                                            </tr>
                                            <tr>
                                                <td>Vithal Chaudhary<a href="javascript:void();"></a>
                                                </td>
                                                <td>7890654321</td>
                                                <td><span class="text-muted">vithalchaudhary@way2webworld.com</span>
                                                </td>
                                                <td>#98766</td>
                                                <td><span class="badge badge-danger">Non-Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                    <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                    <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                </div></td>
                                            </tr>
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
