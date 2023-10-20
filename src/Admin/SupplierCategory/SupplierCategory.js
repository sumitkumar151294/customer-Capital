import React, { useState } from 'react';
import Loader from '../Loader/Loader';

const SupplierCategoryList = () => {
  const [isLoading, setIsLoading] = useState('true')
  const [isformLoading, setIsFormLoading] = useState('true')
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Supplier Category List</h4>
              </div>
              <div className="card-body position-relative">
                {!isLoading ? (
                  <div style={{ height: '500px' }}>
                    <Loader classType={'absoluteLoader'} />
                  </div>
                ) : (
                  <form>
                    <div className="row">
                      <div className="col-sm-3 form-group mb-2">
                        <label htmlFor="select-vendors">Select Vendors</label>
                        <select className="form-select" id="select-vendors" aria-label="Default select example">
                          <option selected>Select</option>
                          <option value="Qwik cilver">Qwik cilver</option>
                          <option value="Vendor 2">Vendor 2</option>
                          <option value="Vendor 3">Vendor 3</option>
                        </select>
                      </div>

                      <div className="col-lg-9 d-flex justify-content-end m-auto mb-2">
                        <span className="mrr">
                          <button type="button" className="btn btn-success mr-2">
                            Active <span className="btn-icon-end">125</span>
                          </button>
                        </span>
                        <span className="mrr">
                          <button type="button" className="btn btn-danger mr-2">
                            Deprecated <span className="btn-icon-end">50</span>
                          </button>
                        </span>
                        <span className="mrr">
                          <button type="button" className="btn btn-warning mr-2">
                            New <span className="btn-icon-end">105</span>
                          </button>
                        </span>
                        <span className="mrr">
                          <button type="button" className="btn btn-secondary">
                            Total <span className="btn-icon-end">280</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </form>
                )}

                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Client List</h4>
                      </div>
                      <div className="card-body  position-relative">
                        {!isformLoading ? (
                          <div style={{ height: '400px' }}>
                            <Loader classType={'absoluteLoader'} />
                          </div>
                        ) : (
                          <div className="table-responsive">
                            <table className="table header-border table-responsive-sm text-center">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Categories</th>
                                  <th>Brands</th>
                                  <th>Discount</th>
                                  <th>Margin</th>
                                  <th>Reward</th>
                                  <th>Action</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Electronic</td>
                                  <td>Havells</td>
                                  <td>5%</td>
                                  <td>2%</td>
                                  <td>3%</td>
                                  <td>
                                    <button className="btn btn-primary float-right pad-aa">Submit</button>
                                  </td>
                                  <td>
                                    <div className="can-toggle">
                                      <input id="a" type="checkbox" />
                                      <label htmlFor="a">
                                        <div className="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2<a href="javascript:void();"></a>
                                  </td>
                                  <td>Fashion</td>
                                  <td>Zara
                                  </td>
                                  <td>5%</td>
                                  <td>2%</td>
                                  <td>3%</td>
                                  <td>        <button class="btn btn-primary float-right pad-aa">Submit</button>
                                  </td>

                                  <td> <div class="can-toggle">
                                    <input id="b" type="checkbox" />
                                    <label for="b">
                                      <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
                                    </label>
                                  </div></td>
                                </tr>
                                <tr>
                                  <td>3<a href="javascript:void();"></a>
                                  </td>
                                  <td>Dining</td>
                                  <td>Behrouz
                                  </td>
                                  <td>5%</td>
                                  <td>2%</td>
                                  <td>3%</td>
                                  <td>        <button class="btn btn-primary float-right pad-aa">Submit</button>
                                  </td>

                                  <td> <div class="can-toggle">
                                    <input id="c" type="checkbox" />
                                    <label for="c">
                                      <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
                                    </label>
                                  </div></td>
                                </tr>
                                <tr>
                                  <td>4<a href="javascript:void();"></a>
                                  </td>
                                  <td>Wellness</td>
                                  <td>Apollo Pharmacy
                                  </td>
                                  <td>5%</td>
                                  <td>2%</td>
                                  <td>3%</td>
                                  <td>        <button class="btn btn-primary float-right pad-aa">Submit</button>
                                  </td>

                                  <td> <div class="can-toggle">
                                    <input id="d" type="checkbox" />
                                    <label for="d">
                                      <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
                                    </label>
                                  </div></td>
                                </tr>                              </tbody>
                            </table>
                          </div>
                        )}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierCategoryList;
