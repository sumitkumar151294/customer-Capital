import React from 'react'

const ContactListMaster = () => {
    return (
        <div class="content-body">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between">
                                <h4 class="card-title">Contacted List Master</h4>
                            </div>

                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table header-border table-responsive-sm">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Number</th>
                                                <th>Email</th>
                                                <th>Subject</th>
                                                <th>Description</th>
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
                                                <td>Voucher issue</td>
                                                <td>Having issue while generating voucher in website
                                                </td>
                                                <td><div class="d-flex">

                                                    <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                </div></td>

                                            </tr>
                                            <tr>
                                                <td>Manish Gautam<a href="javascript:void();"></a>
                                                </td>
                                                <td>7838345657</td>
                                                <td><span class="text-muted">manishgautam.1@way.webworld.com</span>
                                                </td>
                                                <td>Coupen Issue</td>
                                                <td>Coupen code is not showing
                                                </td>
                                                <td><div class="d-flex">
                                                    <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                </div></td>
                                            </tr>
                                            <tr>
                                                <td>Naveen Jha<a href="javascript:void();"></a>
                                                </td>
                                                <td>9876680901</td>
                                                <td><span class="text-muted">naveenjha@way2webworld.com</span>
                                                </td>
                                                <td>Order issue</td>
                                                <td>Order is not generating
                                                </td>
                                                <td><div class="d-flex">

                                                    <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                </div></td>

                                            </tr>
                                            <tr>
                                                <td>Vithal Chaudhary<a href="javascript:void();"></a>
                                                </td>
                                                <td>7890654321</td>
                                                <td><span class="text-muted">vithalchaudhary@way2webworld.com</span>
                                                </td>
                                                <td>Login issue</td>
                                                <td>Not able to login while adding cart to my purse
                                                </td>
                                                <td><div class="d-flex">

                                                    <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                </div></td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="form-group mb-0 mt-2">
                                    <button class="btn btn-primary float-right pad-aa">Submit <i class="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactListMaster
