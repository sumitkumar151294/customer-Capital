import React from 'react'
import pizz1 from '../../assets/img/pizz1.jpg'

const Orders = () => {
    const productList = [
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        },
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        },
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        },
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        },
        {
            imgSrc: pizz1,
            description: 'Amazon Voucher',
            originalPrice: '₹ 2000',
            discountedPrice: '₹ 200',
            discountPercentage: '5%',
            points: 'Pts - 559',
            date: '09-13-2023',
        }
    ]
    return (
        <div class="content-body">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between">
                                <h4 class="card-title">Orders</h4>
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
                                            {productList.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <img src={item.imgSrc} style={{ width: '50px' }} alt={`Item ${index + 1}`} />
                                                    </td>
                                                    <td>{item.description}</td>
                                                    <td>{item.originalPrice}</td>
                                                    <td>{item.discountedPrice}</td>
                                                    <td>{item.discountPercentage}</td>
                                                    <td>{item.points}</td>
                                                    <td>{item.date}</td>
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
        </div>
    )
}

export default Orders
