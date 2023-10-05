import React from 'react'
import pizz1 from '../../assets/img/pizz1.jpg'

const ProductCatalouge = () => {
    return (
        <div class="content-body">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between">
                                <h4 class="card-title">Product Catalouge</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table header-border table-responsive-sm">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Selling Price</th>
                                                <th>Saving</th>
                                                <th>Discount</th>
                                                <th>Points</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src={pizz1} style={{ width: '50px' }} /><br />
                                                </td>
                                                <td>Amazon Voucher<a href="javascript:void();"></a>
                                                </td>
                                                <td>₹ 2000</td>
                                                <td>₹ 200
                                                </td>
                                                <td>5%</td>
                                                <td>Pts - 559</td>

                                                <td>09-13-2023</td>
                                            </tr>
                                            <tr>
                                                <td><img src={pizz1} style={{ width: '50px' }} /><br />
                                                </td>
                                                <td>Amazon Voucher<a href="javascript:void();"></a>
                                                </td>
                                                <td>₹ 2000</td>
                                                <td>₹ 200
                                                </td>
                                                <td>5%</td>
                                                <td>Pts - 559</td>

                                                <td>09-13-2023</td>
                                            </tr>
                                            <tr>
                                                <td><img src={pizz1} style={{width:'50px'}} /><br />
                                                </td>
                                                <td>Amazon Voucher<a href="javascript:void();"></a>
                                                </td>
                                                <td>₹ 2000</td>
                                                <td>₹ 200
                                                </td>
                                                <td>5%</td>
                                                <td>Pts - 559</td>

                                                <td>09-13-2023</td>
                                            </tr>
                                            <tr>
                                                <td><img src={pizz1} style={{width:'50px'}} /><br />
                                                </td>
                                                <td>Amazon Voucher<a href="javascript:void();"></a>
                                                </td>
                                                <td>₹ 2000</td>
                                                <td>₹ 200
                                                </td>
                                                <td>5%</td>
                                                <td>Pts - 559</td>

                                                <td>09-13-2023</td>
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

export default ProductCatalouge
