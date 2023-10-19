import React, { useState } from "react";
import Loader from "../Loader/Loader";

const UserMaster = () => {
  const [isLoading, setIsLoading] = useState("true");
  const [isformLoading, setIsFormLoading] = useState("true");
  const [userData, setUserData] = useState({ userName: '', password: '', mobile: '', email: '' });
  const [errors, setErrors] = useState({ userName: '', password: '', mobile: '', email: '' });

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
      // write the logic here
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
                      <form>
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
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault3"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault3"
                                >
                                  Company 1
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault4"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault4"
                                >
                                  Company 1
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Company 1
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault5"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault5"
                                >
                                  Company 1
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Company 1
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault6"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault6"
                                >
                                  Company 1
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault7"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault7"
                                >
                                  Company 1
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault8"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault8"
                                >
                                  Company 1
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-12 br pt-2">
                            <label for="name-f">Role</label>

                            <div class="row ml-4">
                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault3"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault3"
                                >
                                  Role Module 1
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault4"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault4"
                                >
                                  Role Module 2
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Role Module 3
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault5"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault5"
                                >
                                  Role Module 4
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Role Module 4
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault6"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault6"
                                >
                                  Role Module 4
                                </label>
                              </div>

                              <div class="form-check mt-2 col-lg-3">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault7"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault7"
                                >
                                  Role Module 4
                                </label>
                              </div>

                              <div class="col-sm-4 mt-2 mb-4">
                                <button class="btn btn-primary float-right pad-aa" onClick={handleSubmit}>
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

        <div className="container-fluid pt-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Role Module Access List</h4>
                </div>
                <div className="card-body position-relative">
                  {!isLoading ? (
                    <Loader classType={"absoluteLoader"} />
                  ) : (
                    <div className="table-responsive">
                      <table className="table header-border table-responsive-sm">
                        <thead>
                          <tr>
                            <th>Role Name</th>
                            <th style={{ textAlign: "center" }}>Modules</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Admin<a href="javascript:void();"></a>
                            </td>

                            <td>
                              <div class="d-flex"></div>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 1
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 2
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 3
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 4
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Data Analyst<a href="javascript:void();"></a>
                            </td>
                            <td>
                              <div class="d-flex"></div>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 1
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 2
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 3
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 4
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 4
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 4
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Accountant<a href="javascript:void();"></a>
                            </td>
                            <td>
                              <div class="d-flex"></div>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 1
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 2
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 3
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Manager<a href="javascript:void();"></a>
                            </td>
                            <td>
                              <div class="d-flex"></div>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 1
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 2
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 3
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 4
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 4
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 4
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-success">
                                Module Access 4
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
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
