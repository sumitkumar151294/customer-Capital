import React from 'react'

const SupplierBrandList = () => {
    return (
        <>
            <div className='content-body' style={{}}>
                <div className="container-fluid">


                    <div className="row">
                        <div className="col-xl-12 col-xxl-12">
                            <div className="card d-flex justify-content-between">
                                <div className="container-fluid mt-2 mb-2">

                                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                                        <div className="card-header">
                                            <h4 className="card-title">Supplier Brands</h4>




                                        </div>
                                        <div className="customer-search mb-sm-0 mb-3">
                                            <div className="input-group search-area">
                                                <input type="text" className="form-control only-high" placeholder="Search here......" />
                                                <span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2"></i></a></span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <a href="javascript:void(0);" className="btn btn-primary btn-sm btn-rounded me-3 mb-2"><i className="fa fa-file-excel me-2"></i>Export</a>

                                        </div>
                                    </div>
                                </div>



                                <div className="card-body ">
                                    <form>
                                        <div className="row">

                                            <div className="col-sm-3 form-group mb-2">
                                                <label for="name-f">Select Suppliers</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option >Select</option>
                                                    <option value="First Client">All</option>

                                                    <option value="First Client">Qwik cilver</option>
                                                    <option value="Second Client">Supplier 2</option>
                                                    <option value="Third Client">Supplier 3</option>


                                                </select>
                                            </div>

                                            <div className="col-lg-9 d-flex justify-content-end m-auto mb-2">


                                                <span className="mrr">
                                                    <button type="button" className="btn btn-success btn-sm">Active <span className="btn-icon-end">125</span>
                                                    </button>
                                                </span>


                                                <span className="mrr">
                                                    <button type="button" className="btn btn-danger btn-sm">Deprecated <span className="btn-icon-end">50</span>
                                                    </button>
                                                </span>

                                                <span className="mrr">
                                                    <button type="button" className="btn btn-warning btn-sm">Deactive <span className="btn-icon-end">10</span>
                                                    </button>
                                                </span>
                                                <span className="mrr">
                                                    <button type="button" className="btn btn-primary btn-sm">New <span className="btn-icon-end">105</span>
                                                    </button>

                                                </span>

                                                <span className="mrr">
                                                    <button type="button" className="btn btn-secondary btn-sm">Total <span className="btn-icon-end">280</span>
                                                    </button>

                                                </span>


                                            </div>
                                        </div>


                                    </form>


                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="">
                                                <div className="card-header">
                                                    <h4 className="card-title">Supplier Brand Lists</h4>
                                                </div>

                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table header-border table-responsive-sm">
                                                            <thead >
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Brands</th>
                                                                    <th>Supplier Margin% </th>
                                                                    <th>Status</th>
                                                                    <th>Action</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1<a href="javascript:void();"></a>
                                                                    </td>

                                                                    <td>Havells
                                                                    </td>
                                                                    <td><div className="input-group mb-2 w-11">
                                                                        <input type="number" className="form-control htt " placeholder="2%" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" />
                                                                        <div className="input-group-append">
                                                                            <button className="btn btn-outline-primary btn-sm group-btn" type="button">Update</button>
                                                                        </div>
                                                                    </div></td>

                                                                    <td><span className="badge badge-success">Active</span>
                                                                    </td>

                                                                    <td> <div className="can-toggle">
                                                                        <input id="a" type="checkbox" />
                                                                        <label for="a">
                                                                            <div className="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
                                                                        </label>
                                                                    </div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2<a href="javascript:void();"></a>
                                                                    </td>

                                                                    <td>Zara
                                                                    </td>
                                                                    <td><div className="input-group mb-2 w-11">
                                                                        <input type="number" className="form-control htt " placeholder="2%" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" />
                                                                        <div className="input-group-append">
                                                                            <button className="btn btn-outline-primary btn-sm group-btn" type="button">Update</button>
                                                                        </div>
                                                                    </div></td>


                                                                    <td><span className="badge badge-danger">Non-Active</span></td>

                                                                    <td> <div className="can-toggle">
                                                                        <input id="b" type="checkbox" />
                                                                        <label for="b">
                                                                            <div className="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
                                                                        </label>
                                                                    </div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3<a href="javascript:void();"></a>
                                                                    </td>

                                                                    <td>Behrouz
                                                                    </td>
                                                                    <td><div className="input-group mb-2 w-11">
                                                                        <input type="number" className="form-control htt " placeholder="2%" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" />
                                                                        <div className="input-group-append">
                                                                            <button className="btn btn-outline-primary btn-sm group-btn" type="button">Update</button>
                                                                        </div>
                                                                    </div></td>


                                                                    <td><span className="badge badge-success">Active</span>
                                                                    </td>
                                                                    <td> <div className="can-toggle">
                                                                        <input id="c" type="checkbox" />
                                                                        <label for="c">
                                                                            <div className="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
                                                                        </label>
                                                                    </div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4<a href="javascript:void();"></a>
                                                                    </td>

                                                                    <td>Apollo Pharmacy
                                                                    </td>
                                                                    <td><div className="input-group mb-2 w-11">
                                                                        <input type="number" className="form-control htt" placeholder="2%" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" />
                                                                        <div className="input-group-append">
                                                                            <button className="btn btn-outline-primary btn-sm group-btn" type="button">Update</button>
                                                                        </div>
                                                                    </div></td>

                                                                    <td><span className="badge badge-danger">Non-Active</span></td>


                                                                    <td> <div className="can-toggle">
                                                                        <input id="d" type="checkbox" />
                                                                        <label for="d">
                                                                            <div className="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
                                                                        </label>
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
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default SupplierBrandList;