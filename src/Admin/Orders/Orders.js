import React from 'react'
import pizz1 from '../../assets/img/pizz1.jpg'

const Orders = () => {
    return (
        <div class="content-body">
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
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Price </th>
                                                <th>Points Used</th>
                                                <th>Saving</th>
                                                <th>Discount</th>
                                                <th>Gift ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src={pizz1} style={{ width: '50px' }} /><br />
                                                </td>
                                                <td>Amazon Pay<a href="javascript:void();"></a>
                                                </td>
                                                <td>₹2000</td>
                                                <td> Pts - 20
                                                </td>
                                                <td>₹ 200</td>
                                                <td>5%
                                                </td>
                                                <td>#52533</td>
                                            </tr>
                                            <tr>
                                                <td><img src={pizz1} style={{ width: '50px' }} /><br />
                                                </td>
                                                <td>Amazon Pay<a href="javascript:void();"></a>
                                                </td>
                                                <td>₹2000</td>
                                                <td> Pts - 20
                                                </td>
                                                <td>₹ 200</td>
                                                <td>5%
                                                </td>
                                                <td>#52533</td>
                                            </tr>
                                            <tr>
                                                <td><img src={pizz1} style={{ width: '50px' }} /><br />
                                                </td>
                                                <td>Amazon Pay<a href="javascript:void();"></a>
                                                </td>
                                                <td>₹2000</td>
                                                <td> Pts - 20
                                                </td>
                                                <td>₹ 200</td>
                                                <td>5%
                                                </td>
                                                <td>#52533</td>
                                            </tr>
                                            <tr>
                                                <td><img src={pizz1} style={{ width: '50px' }} /><br />
                                                </td>
                                                <td>Amazon Pay<a href="javascript:void();"></a>
                                                </td>
                                                <td>₹2000</td>
                                                <td> Pts - 20
                                                </td>
                                                <td>₹ 200</td>
                                                <td>5%
                                                </td>
                                                <td>#52533</td>
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

export default Orders
