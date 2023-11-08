import React, { useState } from 'react'
import Loader from '../Loader/Loader'

const CustomerList = () => {
    const customerList = [
        {
            name: 'Jaswant Rawat',
            customerId: 'AD2566',
            email: 'jaswant@way2webworld.com',
            points: 'Pts - 1202',
            placeOrder: 'Amazon Voucher',
            date: '09-13-2023',
            lastSignIn: '28 Minutes Ago',
        },
        {
            name: 'Jaswant Rawat',
            customerId: 'AD2566',
            email: 'jaswant@way2webworld.com',
            points: 'Pts - 1202',
            placeOrder: 'Amazon Voucher',
            date: '09-13-2023',
            lastSignIn: '28 Minutes Ago',
        },
        {
            name: 'Jaswant Rawat',
            customerId: 'AD2566',
            email: 'jaswant@way2webworld.com',
            points: 'Pts - 1202',
            placeOrder: 'Amazon Voucher',
            date: '09-13-2023',
            lastSignIn: '28 Minutes Ago',
        },
        {
            name: 'Jaswant Rawat',
            customerId: 'AD2566',
            email: 'jaswant@way2webworld.com',
            points: 'Pts - 1202',
            placeOrder: 'Amazon Voucher',
            date: '09-13-2023',
            lastSignIn: '28 Minutes Ago',
        },
    ];

    const [isLoading, setIsLoading] = useState('true')

    return (

        <div class="content-body">
            {!isLoading ? (
                <Loader />
            ) : (
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-xl-12 col-xxl-12">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                    <h4 class="card-title">Customer List</h4>
                                </div>

                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table header-border table-responsive-sm">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Customer ID</th>
                                                    <th>Email</th>
                                                    <th>Points</th>
                                                    <th>Place Order</th>
                                                    <th>Date</th>
                                                    <th>Last Sign In</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {customerList.map((item) => (
                                                    <tr>
                                                        <td>{item.name}</td>
                                                        <td>{item.customerId}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.points}</td>
                                                        <td>{item.placeOrder}</td>
                                                        <td>{item.date}</td>
                                                        <td>{item.lastSignIn}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomerList
