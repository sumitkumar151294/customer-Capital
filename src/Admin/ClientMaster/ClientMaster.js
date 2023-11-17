import React, { useState } from "react";
import "../HomeAdmin/Admin.css";
import { useDispatch } from "react-redux";
import { onClientMasterSubmit } from "../../redux/modules/Admin/clientMasterSlice";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const ClientMaster = () => {
  const clientMasterList = [
    {
      contactName: "Jaswant Rawat",
      contactNumber: "9650531790",
      contactEmail: "jaswant@way2webworld.com",
      clientId: "#98878",
      status: "Active",
    },
    {
      contactName: "Manish Gautam",
      contactNumber: "7838345657",
      contactEmail: "manishgautam.1@way.webworld.com",
      clientId: "#98788",
      status: "Non-Active",
    },
    {
      contactName: "Naveen Jha",
      contactNumber: "9876680901",
      contactEmail: "naveenjha@way2webworld.com",
      clientId: "#78899",
      status: "Active",
    },
    {
      contactName: "Vithal Chaudhary",
      contactNumber: "7890654321",
      contactEmail: "vithalchaudhary@way2webworld.com",
      clientId: "#98766",
      status: "Non-Active",
    },
  ];

  const [isLoading, setIsLoading] = useState("true");
  const [isformLoading, setIsFormLoading] = useState("true");

  const [clientData, setClientData] = useState({ name: "", number: "", email: "", ipAddress: "", color: "", logoLink: "", theme: "", stagingKey: "", stagingSecretKey: "", productionKey: "", productionSecretKey: "", status: "", password: "", userName: "" });
  const [errors, setErrors] = useState({ name: "", number: "", email: "", ipAddress: "", color: "", logoLink: "", theme: "", stagingKey: "", stagingSecretKey: "", productionKey: "", productionSecretKey: "", status: "", password: "", userName: "" });

  const dispatch = useDispatch();

  const handleChange = (e, fieldName) => {
    setClientData({
      ...clientData,
      [fieldName]: e.target.value,
    });

    // Remove the error message when the user starts typing
    setErrors({
      ...errors,
      [fieldName]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };

    // Check if fields are empty and set corresponding error messages
    for (const key in clientData) {
      if (clientData[key] === '') {
        newErrors[key] = 'This field is required';
        isValid = false;
      } else {
        newErrors[key] = '';
      }
    }

    // Email validation using the regexEmail pattern
    const regexEmail = /[a-zA-Z0-9]+([\_\.\-{1}])?[a-zA-Z0-9]+\@[a-zA-Z0-9]+(\.[a-zA-Z\.]+)/g;
    if (!regexEmail.test(clientData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    setErrors(newErrors);

    if (isValid) {
      dispatch(onClientMasterSubmit(clientData));
    }
  };

  return (
    <div className="content-body">
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title headdd txxt ">Client Master</h4>
              </div>

              <div className="card-body cardd-body position-relative">
              {!isformLoading ? (
                  <div style={{ height: "400px" }}>
                    <Loader classType={"absoluteLoader"} />
                  </div>
                  ) : (
                    <div class="container-fluid cont-fluid">
                      <form onSubmit={handleSubmit}>
                        <div class="row">
                        <div class="col-sm-4 form-group mb-2">
                          <label for="contact-name">Contact Name</label>
                          <input
                            type="text"
                            class="form-control"
                            name="contactName"
                            id="contact-name"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'name')}
                          />
                          <p className="text-danger">{errors.name}</p>
                        </div>
                        <div class="col-sm-4 form-group mb-2">
                          <label for="contact-number">Contact Number</label>
                          <input
                            type="text"
                            class="form-control"
                            name="contactNumber"
                            id="contact-number"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'number')}
                          />
                          <p className="text-danger">{errors.number}</p>
                        </div>
                        <div class="col-sm-4 form-group mb-2">
                          <label for="contact-email">Contact Email</label>
                          <input
                            type="email"
                            class="form-control"
                            name="contactEmail"
                            id="contact-email"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'email')}
                          />
                          <p className="text-danger">{errors.email}</p>
                        </div>





                        <div class="col-sm-4 form-group mb-2">
                          <label for="contact-name">Username</label>
                          <input
                            type="text"
                            class="form-control"
                            name="username"
                            id="user-name"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'userName')}
                          />
                          <p className="text-danger">{errors.userName}</p>
                        </div>

                      <div class="col-sm-4 form-group mb-2">
                          <label for="contact-name">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="password"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'password')}
                          />
                          <p className="text-danger">{errors.password}</p>
                        </div>


                        <div class="col-sm-4 form-group mb-2">
                          <label for="status">Status</label>
                          <select
                            class="form-select"
                            name="status"
                            value={clientData?.status}
                            onChange={(e) => handleChange(e, 'status')}
                            id="status"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value="Active">Active</option>
                            <option value="Non-Active">Non-Active</option>
                          </select>
                          <p className="text-danger">{errors.status}</p>
                        </div>

                      <div className="row mt-3" >
                        <h3 style={{ borderBottom: "1px solid #ededed" }}>Theme Details</h3>

                        <div className="col-sm-3 form-group mb-2">
                          <label for="color">Color</label>
                          <input
                            type="color"
                            class="form-control"
                            name="color"
                            id="color"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'color')}
                          />
                          <p className="text-danger">{errors.color}</p>
                        </div>

                        <div className="col-sm-6 form-group mb-2">
                        <label for="logo">Logo Link</label>
                          <input
                            type="text"
                            class="form-control"
                            name="logo"
                            id="logo"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'logoLink')}
                          />
                          <p className="text-danger">{errors.logoLink}</p>
                        </div>

                        <div className="col-sm-3 form-group mb-2">
                        <label for="status">Select Theme</label>
                          <select
                            class="form-select"
                            value={clientData?.theme}
                            onChange={(e) => handleChange(e, 'theme')}
                            aria-label="Default select example"
                          >
                            <option selected>Select Theme</option>
                            <option value="Active">Theme 1</option>
                            <option value="Non-Active">Theme 2</option>
                            <option value="Non-Active">Theme 3</option>
                            <option value="Non-Active">Theme 4</option>
                          </select>
                          <p className="text-danger">{errors.theme}</p>
                        </div>

                      </div>

                      <div className="row mt-3" >
                        <h3 style={{ borderBottom: "1px solid #ededed" }}>Database Credentials</h3>

                        <div className="col-lg-4">

                          <h4 className="range-font" >Database IP Address</h4>
                          <div className="col-sm-12 form-group mb-2">
                          <input
                            type="text"
                            class="form-control"
                            name="ipAddress"
                            id="ipAddress"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'ipAddress')}
                          />
                          <p className="text-danger">{errors.ipAddress}</p>
                          </div>



                        </div>

                        <div className="col-lg-4 ">

                          <h4 className="range-font">Database User ID</h4>
                          <div className="col-sm-12 form-group mb-2">
                          <input
                            type="text"
                            class="form-control"
                            name="userId"
                            id="userId"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'userId')}
                          />
                          <p className="text-danger">{errors.userId}</p>
                          </div>



                        </div>

                        <div className="col-lg-4 ">

                          <h4 className="range-font">Database User Password</h4>
                          <div className="col-sm-12 form-group mb-2">
                          <input
                            type="text"
                            class="form-control"
                            name="userPassword"
                            id="userPassword"
                            placeholder=""
                            onChange={(e) => handleChange(e, 'userPassword')}
                          />
                          <p className="text-danger">{errors.ipAddress}</p>
                          </div>



                        </div>


                      </div>




                      <div className="row mt-3" >
                        <h3 style={{ borderBottom: "1px solid #ededed" }}>Razorpay Payment Gateway</h3>

                        <div className="col-lg-6 mt-2">
                          <div className="row p-0">
                            <h4 className="range-font">Staging</h4>
                            <div className="col-sm-12 form-group mb-2">
                            <input
                                  type="text"
                                  class="form-control"
                                  name="stagingKey"
                                  id="staging-key"
                                  placeholder="Key"
                                  onChange={(e) => handleChange(e, 'stagingKey')}
                                />
                                <p className="text-danger">{errors.stagingKey}</p>
                            </div>

                            <div className="col-sm-12 form-group mb-2">
                            <input
                                  type="text"
                                  class="form-control"
                                  name="stagingSecretKey"
                                  id="staging-secret-key"
                                  placeholder="Secret Key"
                                  onChange={(e) => handleChange(e, 'stagingSecretKey')}
                                />
                                <p className="text-danger">{errors.stagingSecretKey}</p>
                            </div>
                          </div>
                        </div>


                        <div className="col-lg-6 mt-2">
                          <div className="row p-0">
                            <h4 className="range-font">Production</h4>
                            <div className="col-sm-12 form-group mb-2">
                            <input
                                  type="text"
                                  class="form-control"
                                  name="productionKey"
                                  id="production-key"
                                  placeholder="Key"
                                  onChange={(e) => handleChange(e, 'productionKey')}
                                />
                                <p className="text-danger">{errors.productionKey}</p>
                            </div>

                            <div className="col-sm-12 form-group mb-2">
                            <input
                                  type="text"
                                  class="form-control"
                                  name="productionSecretKey"
                                  id="production-secret-key"
                                  placeholder="Secret Key"
                                  onChange={(e) => handleChange(e, 'productionSecretKey')}
                                />
                                <p className="text-danger">{errors.productionSecretKey}</p>
                            </div>
                          </div>
                        </div>

                      </div>


                      <div className="col-sm-12 form-group mb-0 mt-2">
                        <button className="btn btn-primary float-right pad-aa">Add <i className="fa fa-arrow-right"></i></button>
                      </div>

                    </div>
                  </form>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="container-fluid pt-0">
            <div class="row">
        <div class="col-lg-12">
                        <div class="card">
                             <div class="container-fluid mt-2 mb-2">

<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
    <div class="card-header">
                                <h4 class="card-title">Client List</h4>
                            </div>
            <div class="customer-search mb-sm-0 mb-3">
                <div class="input-group search-area">
                    <input type="text" class="form-control only-high" placeholder="Search here......"/>
                    <span class="input-group-text"><a href="javascript:void(0)"><i class="flaticon-381-search-2"></i></a></span>
                </div>
            </div>
			
			 <div class="d-flex align-items-center flex-wrap">
                <a href="javascript:void(0);" class="btn btn-primary btn-sm btn-rounded me-3 mb-2"><i class="fa fa-file-excel me-2"></i>Export</a>
              
            </div>
            
        </div>
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
                                                <th>Login</th>
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
                                                     <td>        <a  class="btn btn-secondary btn-sm float-right"><i class="fa fa-user"></i>&nbsp;Login</a>
</td>
                                                    <td>        <Link to='/LC-admin/clientbrandlist' class="btn btn-primary btn-sm float-right"><i class="fa fa-eye"></i>&nbsp;Brands</Link>
</td>
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
                                                    <td>        <a  class="btn btn-secondary btn-sm float-right"><i class="fa fa-user"></i>&nbsp;Login</a>
</td>
                                                   <td>        <Link to='/LC-admin/clientbrandlist' class="btn btn-primary btn-sm float-right"><i class="fa fa-eye"></i>&nbsp;Brands</Link>
</td>
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
                                                    <td>        <a  class="btn btn-secondary btn-sm float-right"><i class="fa fa-user"></i>&nbsp;Login</a>
</td>
                                                    <td>        <Link to='/LC-admin/clientbrandlist' class="btn btn-primary btn-sm float-right"><i class="fa fa-eye"></i>&nbsp;Brands</Link>
</td>
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
                                                    <td>        <a  class="btn btn-secondary btn-sm float-right"><i class="fa fa-user"></i>&nbsp;Login</a>
</td>
                                                    <td>        <Link to='/LC-admin/clientbrandlist' class="btn btn-primary btn-sm float-right"><i class="fa fa-eye"></i>&nbsp;Brands</Link>
</td>
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
  );
};

export default ClientMaster;
