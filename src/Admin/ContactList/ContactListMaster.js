import React from 'react'

const ContactListMaster = () => {
    const contactMasterList = [
        {
            name: 'Jaswant Rawat',
            number: '9650531790',
            email: 'jaswant@way2webworld.com',
            subject: 'Voucher issue',
            description: 'Having issue while generating voucher in website',
        },
        {
            name: 'Jaswant Rawat',
            number: '9650531790',
            email: 'jaswant@way2webworld.com',
            subject: 'Voucher issue',
            description: 'Having issue while generating voucher in website',
        },
        {
            name: 'Jaswant Rawat',
            number: '9650531790',
            email: 'jaswant@way2webworld.com',
            subject: 'Voucher issue',
            description: 'Having issue while generating voucher in website',
        },
        {
            name: 'Jaswant Rawat',
            number: '9650531790',
            email: 'jaswant@way2webworld.com',
            subject: 'Voucher issue',
            description: 'Having issue while generating voucher in website',
        },
    ];
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
                                            {contactMasterList.map((contact, index) => (
                                                <tr>
                                                    <td>{contact.name}</td>
                                                    <td>{contact.number}</td>
                                                    <td><span class="text-muted">{contact.email}</span></td>
                                                    <td>{contact.subject}</td>
                                                    <td>{contact.description}</td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div class="form-group mb-0 mt-2">
                                    <button type='submit' class="btn btn-primary float-right pad-aa">Submit <i class="fa fa-arrow-right"></i></button>
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
