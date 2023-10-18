import React, { useState } from 'react';
import Loader from '../Loader/Loader';

const  CreateCategory=()=> {
    const [isLoading, setIsLoading] = useState('true')
    const [isformLoading, setIsFormLoading] = useState('true')
  const [createCategory, setCreateCategoryData] = useState({
    categoryName: '',
    vendorCategory: '',
    status: '',
  });


  

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    const data ={
        createCategory
    }

    console.log(data);
  }



  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Create Category</h4>
              </div>
              <div className="card-body position-relative">
              {!isLoading ? (
                                        <div style={{ height: '400px' }}>
                                            <Loader classType={'absoluteLoader'} />
                                        </div>
                                    ) : (
                <div className="container mt-3">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-4 form-group mb-2">
                        <label htmlFor="name-f">Category Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="categoryName"
                          id="name-f"
                          placeholder=""
                          onChange={(e) =>
                            setCreateCategoryData({
                              ...createCategory,
                              categoryName: e.target.value,
                            })
                          }   
                          required
                        
                        />
                      </div>
                      <div className="col-sm-4 form-group mb-2">
                        <label htmlFor="vendor-category">Select Vendor Category</label>
                        <select
                          className="form-select"
                          id="vendor-category"
                          name="vendorCategory"
                          onChange={(e) =>
                            setCreateCategoryData({
                              ...createCategory,
                              vendorCategory: e.target.value,
                            })
                          }   
                          aria-label="Default select example"
                        >
                          <option value="">Select</option>
                          <option value="E-Commerce">E-Commerce</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Kitchen Appliances">Kitchen Appliances</option>
                          <option value="Health">Health</option>
                          <option value="Insurance">Insurance</option>
                        </select>
                      </div>
                      <div className="col-sm-4 form-group mb-2">
                        <label htmlFor="status">Select Status</label>
                        <select
                          className="form-select"
                          id="status"
                          name="status"
                          onChange={(e) =>
                            setCreateCategoryData({
                              ...createCategory,
                              status: e.target.value,
                            })
                          }   
                          aria-label="Default select example"
                        >
                          <option value="">Select</option>
                          <option value="Active">Active</option>
                          <option value="In-Active">In-Active</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4 mt-2 mb-4">
                      <button className="btn btn-primary float-right pad-aa" type="submit" onClick={handleSubmit}>
                        Submit <i className="fa fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
                                     )} </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Category List</h4>
              </div>
              <div className="card-body position-relative">
              {!isformLoading ? (
                                        <div style={{ height: '400px' }}>
                                            <Loader classType={'absoluteLoader'} />
                                        </div>
                                    ) : (
                <div className="table-responsive">
                  <table className="table header-border table-responsive-sm">
                    <thead>
                      <tr>
                        <th>Category Name</th>
                        <th>Vendor Category</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                                                <td>E-Commerce<a href="javascript:void();"></a>
                                                </td>
                                                <td>Home Appliance</td>
                                              
                                                <td><span class="badge badge-success">Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                        <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                    </div></td>
                                                    <td> <a href="createsubcat.html"><button class="btn btn-primary float-right pad-aa">Add <i class="fa fa-arrow-right"></i></button></a></td>
                                            </tr>
                                            <tr>
                                                <td>Electronics<a href="javascript:void();"></a>
                                                </td>
                                                <td>Commercial Appliances</td>
                                                
                                                <td><span class="badge badge-danger">Non-Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                        <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                    </div></td>
                                                    <td> <a href="createsubcat.html"><button class="btn btn-primary float-right pad-aa">Add <i class="fa fa-arrow-right"></i></button></a></td>

                                            </tr>
                                            <tr>
                                                <td>Kitchen Appliances<a href="javascript:void();"></a>
                                                </td>
                                                <td>E-Commerce</td>
                                                
                                                <td><span class="badge badge-success">Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                        <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                    </div></td>
                                                    <td> <a href="createsubcat.html"><button class="btn btn-primary float-right pad-aa">Add <i class="fa fa-arrow-right"></i></button></a></td>

                                            </tr>
                                            <tr>
                                                <td>Health<a href="javascript:void();"></a>
                                                </td>
                                                <td>Medical Insurance</td>
                                               
                                                <td><span class="badge badge-danger">Non-Active</span>
                                                </td>
                                                <td><div class="d-flex">
                                                        <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                                                    </div></td>
                                                    <td> <a href="createsubcat.html"><button class="btn btn-primary float-right pad-aa">Add <i class="fa fa-arrow-right"></i></button></a></td>

                                            </tr>                    </tbody>
                  </table>
                </div>
                                     )} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;
