import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { onUserSubmit } from "../../redux/modules/Admin/userSlice";
import { useDispatch } from 'react-redux'

const UserMaster = () => {
  const [isLoading, setIsLoading] = useState("true");
  const [isformLoading, setIsFormLoading] = useState("true");
  const [userData, setUserData] = useState({ userName: '', password: '', mobile: '', email: '' });
  const [errors, setErrors] = useState({ userName: '', password: '', mobile: '', email: '' });

  const roleData = [
    {
      roleName: 'Admin',
      modules: ['Module Access 1', 'Module Access 2', 'Module Access 3', 'Module Access 4'],
    },
    {
      roleName: 'Data Analyst',
      modules: ['Module Access 1', 'Module Access 2', 'Module Access 3', 'Module Access 4', 'Module Access 4', 'Module Access 4'],
    },
    {
      roleName: 'Accountant',
      modules: ['Module Access 1', 'Module Access 2', 'Module Access 3'],
    },
    {
      roleName: 'Manager',
      modules: ['Module Access 1', 'Module Access 2', 'Module Access 3', 'Module Access 4', 'Module Access 4', 'Module Access 4', 'Module Access 4'],
    },
  ];
  const dispatch = useDispatch();

  const handleChange = (e, fieldName) => {
    setUserData({
      ...userData,
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
    for (const key in userData) {
      if (userData[key] === '') {
        newErrors[key] = 'This field is required';
        isValid = false;
      } else {
        newErrors[key] = '';
      }
    }

    // Email and Phone validation using the regexEmail and regexPhone pattern
    const regexEmail = /[a-zA-Z0-9]+([\_\.\-{1}])?[a-zA-Z0-9]+\@[a-zA-Z0-9]+(\.[a-zA-Z\.]+)/g;
    const regexPhone = /^\(?([0-9]{3})\)?([0-9]{3})?([0-9]{4})$/g;

    if (!regexEmail.test(userData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!regexPhone.test(userData.mobile)) {
      newErrors.mobile = 'Invalid phone number format';
      isValid = false;
    }
    setErrors(newErrors);

    if (isValid) {
      dispatch(onUserSubmit(userData));
    }
  }

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">User Master</h4>
                </div>
                <div className="card-body position-relative">
                  {!isformLoading ? (
                    <div style={{ height: "400px" }}>
                      <Loader classType={"absoluteLoader"} />
                    </div>
                  ) : (
                    <div className="container mt-3">
                      <form onSubmit={handleSubmit} >
                        <div class="row">
                          <div class="col-sm-4 form-group mb-2">
                            <label for="name-f">Email</label>
                            <input
                              type="email"
                              class="form-control"
                              name="fname"
                              onChange={(e) => handleChange(e, 'email')}
                              id="name-f"
                              placeholder=""
                            />
                            <p className="text-danger">{errors.email}</p>
                          </div>

                          <div class="col-sm-4 form-group mb-2">
                            <label for="name-f">Mobile</label>
                            <input
                              type="text"
                              class="form-control"
                              name="fname"
                              id="name-f"
                              onChange={(e) => handleChange(e, 'mobile')}
                              placeholder=""
                            />
                            <p className="text-danger">{errors.mobile}</p>
                          </div>

                          <div class="col-sm-4 form-group mb-2">
                            <label for="name-f">Username</label>
                            <input
                              type="text"
                              class="form-control"
                              name="fname"
                              id="name-f"
                              placeholder=""
                              onChange={(e) => handleChange(e, 'userName')}
                            />
                            <p className="text-danger">{errors.userName}</p>
                          </div>

                          <div class="col-sm-4 form-group mb-2">
                            <label for="name-f">Password</label>
                            <input
                              type="password"
                              class="form-control"
                              name="fname"
                              id="name-f"
                              placeholder=""
                              onChange={(e) => handleChange(e, 'password')}
                            />
                            <p className="text-danger">{errors.password}</p>
                          </div>

                          <div class="col-lg-12 br pt-2">
                            <label for="name-f">Client</label>

                            <div class="row ml-4">
                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                <label class="form-check-label" for="flexCheckDefault3">
                                  Client 1</label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                <label class="form-check-label" for="flexCheckDefault4">
                                  Client 1</label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                  Client 1</label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                <label class="form-check-label" for="flexCheckDefault5">
                                  Client 1</label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                  Client 1</label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                                <label class="form-check-label" for="flexCheckDefault6">
                                  Client 1</label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                                <label class="form-check-label" for="flexCheckDefault7">
                                  Client 1</label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
                                <label class="form-check-label" for="flexCheckDefault8">
                                  Client 1</label>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-12 br pt-2">
                            <label for="name-f">Role</label>

                            <div class="row ml-4">
                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="radio" name="gridRadios" value="option1" checked="" />
                                <label class="form-check-label">
                                  Admin
                                </label>
                              </div>


                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="radio" name="gridRadios" value="option1" checked="" />
                                <label class="form-check-label">
                                  Data Analyst
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="radio" name="gridRadios" value="option1" checked="" />
                                <label class="form-check-label">
                                  Accountant
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input class="form-check-input" type="radio" name="gridRadios" value="option1" checked="" />
                                <label class="form-check-label">
                                  Manager
                                </label>
                              </div>
                              <div class="col-sm-4 mt-2 mb-4">
                                <button class="btn btn-primary float-right pad-aa" >
                                  Submit <i class="fa fa-arrow-right"></i>
                                </button>
                              </div>
                            </div>
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
                <div class="card-header">
                  <h4 class="card-title">User List</h4>
                </div>

                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table header-border table-responsive-sm">
                      <thead>
                        <tr>
                          <th>Role Name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Username</th>
                          <th>Clients</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Admin<a href="javascript:void();"></a>
                          </td>
                          <td>thisisdummy@gmail.com</td>
                          <td>9876543210</td>
                          <td>Dummy User</td>
                          <td><div class="d-flex">
                            <span class="badge badge-secondary mr-10">Client 1</span>
                            <span class="badge badge-secondary mr-10">Client 2</span>
                          </div></td>
                          <td><a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a></td>
                        </tr>
                        <tr>
                          <td>Data Analyst<a href="javascript:void();"></a>
                          </td>
                          <td>thisisdummy@gmail.com</td>
                          <td>9876543210</td>
                          <td>Dummy User</td>
                          <td><div class="d-flex">
                            <span class="badge badge-secondary mr-10">Client 1</span>
                            <span class="badge badge-secondary mr-10">Client 2</span>
                          </div></td>
                          <td><a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a></td>
                        </tr>
                        <tr>
                          <td>Accountant<a href="javascript:void();"></a>
                          </td>
                          <td>thisisdummy@gmail.com</td>
                          <td>9876543210</td>
                          <td>Dummy User</td>
                          <td><div class="d-flex">
                            <span class="badge badge-secondary mr-10">Client 1</span>
                            <span class="badge badge-secondary mr-10">Client 2</span>
                          </div></td>
                          <td><a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a></td>
                        </tr>
                        <tr>
                          <td>Manager<a href="javascript:void();"></a>
                          </td>
                          <td>thisisdummy@gmail.com</td>
                          <td>9876543210</td>
                          <td>Dummy User</td>

                          <td><div class="d-flex">
                            <span class="badge badge-secondary mr-10">Client 1</span>
                            <span class="badge badge-secondary mr-10">Client 2</span>

                          </div></td>
                          <td><a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a></td>
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
    </>
  );
};

export default UserMaster;
