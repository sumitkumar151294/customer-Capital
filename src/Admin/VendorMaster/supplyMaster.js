import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onVendorSubmit } from "../../redux/modules/Admin/vendorSlice";
import Loader from "../Loader/Loader";
import { CSVLink } from "react-csv";

const SupplyMaster = () => {
  const vendorList = [
    {
      SupplierName: "Jaswant Rawat",
      SupplierClientID: "#26589",
      Username: "JOJO",
      Password: "************",
      MinThresholdAmount: "₹500000",
      status: "Active",
    },
    {
      SupplierName: "Manish Gautam",
      SupplierClientID: "#58746",
      Username: "MG",
      Password: "************",
      MinThresholdAmount: "₹500000",
      status: "Active",
    },
    {
      SupplierName: "Naveen Jha",
      SupplierClientID: "#09808",
      Username: "It's Naveen Jha",
      Password: "************",
      MinThresholdAmount: "₹500000",
      status: "Active",
    },
    {
      SupplierName: "Vithal Chaudhary",
      SupplierClientID: "#45686",
      Username: "Mr.Vithal",
      Password: "************",
      MinThresholdAmount: "₹500000",
      status: "Non-Active",
    },
    {
      SupplierName: "Vithal Chaudhary",
      SupplierClientID: "#45686",
      Username: "Mr.Vithal",
      Password: "************",
      MinThresholdAmount: "₹500000",
      status: "Active",
    },
    {
      SupplierName: "Vithal Chaudhary",
      SupplierClientID: "#45686",
      Username: "Mr.Vithal",
      Password: "************",
      MinThresholdAmount: "₹500000",
      status: "Active",
    },
  ];
  const headers = [
    { label: "SupplierName", key: "SupplierName" },
    { label: "SupplierClientID	", key: "SupplierClientID" },
    { label: "Username", key: "Username" },
    { label: "Password", key: "Password" },
    { label: "MinThresholdAmount", key: "MinThresholdAmount" },
    { label: "status", key: "status" },
  ];

  const [vendorData, setVendorData] = useState({
    name: "",
    secret: "",
    id: "",
    username: "",
    password: "",
    endPoint: "",
    code: "",
    status: "",
    amount: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    secret: "",
    id: "",
    username: "",
    password: "",
    endPoint: "",
    code: "",
    status: "",
    amount: "",
  });
  const [isLoading, setIsLoading] = useState("true");
  const [isformLoading, setIsFormLoading] = useState("true");

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // for filtering the data into searchbar
  const filteredVendorList = vendorList.filter((vendor) =>
    Object.values(vendor).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleChange = (e, fieldName) => {
    setVendorData({
      ...vendorData,
      [fieldName]: e.target.value,
    });

    // Remove the error message when the user starts typing
    setErrors({
      ...errors,
      [fieldName]: "",
    });
  };
  //  Submit Button for handle  input fields data
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };

    // Check if fields are empty and set corresponding error messages
    for (const key in vendorData) {
      if (vendorData[key] === "") {
        newErrors[key] = "This field is Required ";
        isValid = false;
      } else {
        newErrors[key] = "";
      }
    }
    // Email validation using the regexEmail pattern
    // const regexEmail = /[a-zA-Z0-9]+([\_\.\-{1}])?[a-zA-Z0-9]+\@[a-zA-Z0-9]+(\.[a-zA-Z\.]+)/g;
    // if (!regexEmail.test(vendorData.secret)) {
    //     newErrors.secret = 'Invalid email format';
    //     isValid = false;
    // }
    setErrors(newErrors);

    if (isValid) {
      dispatch(onVendorSubmit(vendorData));
    }
  };

  // for edit the table data
  const handleEdit = (vendor) => {
    debugger;
    setVendorData({
      name: vendor.SupplierName,
      secret: vendor.secret,
      id: vendor.SupplierClientID,
      username: vendor.Username,
      password: vendor.Password,
      endPoint: vendor.endPoint,
      code: vendor.code,
      status: vendor.status,
      amount: vendor.MinThresholdAmount,
    });
  };

  return (
    <>
      <div class="content-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12 col-xxl-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Supplier Master</h4>
                </div>
                <div class="card-body position-relative">
                  {!isformLoading ? (
                    <div style={{ height: "200px" }}>
                      <Loader classType={"absoluteLoader"} />
                    </div>
                  ) : (
                    <div class="container mt-3">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className={`col-sm-4 form-group mb-2 $`}>
                            <label htmlFor="name-f">Supplier Name</label>
                            <input
                              type="text"
                              value={vendorData.name}
                              className={` ${
                                errors.name ? "border-danger" : "form-control"
                              }`}
                              name="fname"
                              id="name-f"
                              placeholder=""
                              onChange={(e) => handleChange(e, "name")}
                            />
                            <p className="text-danger">{errors.name}</p>
                          </div>

                          <div className="col-sm-4 form-group mb-2">
                            <label htmlFor="name-l">Supplier Client ID</label>
                            <input
                              type="text"
                              value={vendorData.id}
                              className={` ${
                                errors.id ? "border-danger" : "form-control"
                              }`}
                              name="lname"
                              id="name-l"
                              placeholder=""
                              onChange={(e) => handleChange(e, "id")}
                            />
                            <p className="text-danger">{errors.id}</p>
                          </div>

                          <div className="col-sm-4 form-group mb-2">
                            <label htmlFor="text">Supplier Client Secret</label>
                            <input
                              type="text"
                              className={` ${
                                errors.secret ? "border-danger" : "form-control"
                              }`}
                              // name="text"
                              // id="text"
                              placeholder=""
                              onChange={(e) => handleChange(e, "secret")}
                            />
                            <p className="text-danger">{errors.secret}</p>
                          </div>

                          <div className="col-sm-4 form-group mb-2">
                            <label htmlFor="text">Username</label>
                            <input
                              type="text"
                              value={vendorData.username}
                              className={` ${
                                errors.username
                                  ? "border-danger"
                                  : "form-control"
                              }`}
                              placeholder=""
                              onChange={(e) => handleChange(e, "username")}
                            />
                            <p className="text-danger">{errors.username}</p>
                          </div>

                          <div className="col-sm-4 form-group mb-2">
                            <label htmlFor="">Password</label>
                            <input
                              type="password"
                              value={vendorData.password}
                              className={` ${
                                errors.password
                                  ? "border-danger"
                                  : "form-control"
                              }`}
                              onChange={(e) => handleChange(e, "password")}
                            />
                            <p className="text-danger">{errors.password}</p>
                          </div>

                          <div className="col-sm-4 form-group mb-2">
                            <label htmlFor="status">Status</label>
                            <select
                              className={` ${
                                errors.status
                                  ? "form-select-error"
                                  : "form-select"
                              }`}
                              aria-label="Default select example"
                              name="status"
                              value={vendorData.status}
                              onChange={(e) => handleChange(e, "status")}
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              <option value="Active">Active</option>
                              <option value="Non-Active">Non-Active</option>
                            </select>
                            <p className="text-danger">{errors.status}</p>
                          </div>

                          <div className="col-sm-4 form-group mb-2">
                            <label htmlFor="zip">End Point</label>
                            <input
                              type="text"
                              className={` ${
                                errors.endPoint
                                  ? "border-danger"
                                  : "form-control"
                              }`}
                              name="Zip"
                              id="zip"
                              placeholder=""
                              onChange={(e) => handleChange(e, "endPoint")}
                            />
                            <p className="text-danger">{errors.endPoint}</p>
                          </div>

                          <div className="col-sm-4 form-group mb-2">
                            <label htmlFor="pass">Authorization Code</label>
                            <input
                              type="password"
                              name="password"
                              className={` ${
                                errors.code ? "border-danger" : "form-control"
                              }`}
                              id="pass"
                              placeholder=""
                              onChange={(e) => handleChange(e, "code")}
                            />
                            <p className="text-danger">{errors.code}</p>
                          </div>
                          <div className="col-sm-4 form-group mb-2">
                            <label htmlFor="amount">
                              Min. Threshold Amount
                            </label>
                            <input
                              type="text"
                              name="text"
                              value={vendorData.amount}
                              className={` ${
                                errors.amount ? "border-danger" : "form-control"
                              }`}
                              id="amount"
                              placeholder=""
                              onChange={(e) => handleChange(e, "amount")}
                            />
                            <p className="text-danger">{errors.amount}</p>
                          </div>

                          <div className="col-sm-12 form-group mb-0 mt-2">
                            <button
                              type="submit"
                              className="btn btn-primary float-right pad-aa"
                            >
                              Submit <i className="fa fa-arrow-right"></i>
                            </button>
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
                  <h4 className="card-title">Supplier List</h4>
                  <div class="customer-search mb-sm-0 mb-3">
                    <div class="input-group search-area">
                      <input
                        type="text"
                        class="form-control only-high"
                        placeholder="Search here......"
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                      <span class="input-group-text">
                        <a href="javascript:void(0)">
                          <i class="flaticon-381-search-2"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center flex-wrap">
                    <CSVLink data={vendorList} headers={headers}>
                      <button className="btn btn-primary btn-sm btn-rounded me-3 mb-2">
                        <i className="fa fa-file-excel me-2"></i>export
                      </button>
                    </CSVLink>
                  </div>
                </div>

                <div className="card-body position-relative">
                  {!isLoading ? (
                    <div style={{ height: "200px" }}>
                      <Loader classType={"absoluteLoader"} />
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table header-border table-responsive-sm">
                        <thead>
                          <tr>
                            <th>Supplier Name </th>
                            <th>Supplier Client ID </th>
                            <th>Username </th>
                            <th>Password</th>
                            <th>Min. Threshold Amount </th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredVendorList.length > 0 ? (
                            filteredVendorList.map((vendor, index) => (
                              <tr key={index}>
                                <td>{vendor.SupplierName}</td>
                                <td>{vendor.SupplierClientID}</td>
                                <td>
                                  <span className="text-muted">
                                    {vendor.Username}
                                  </span>
                                </td>

                                <td>{vendor.Password}</td>
                                <td>{vendor.MinThresholdAmount}</td>

                                <td>
                                  <span
                                    className={`badge ${
                                      vendor.status === "Active"
                                        ? "badge-success"
                                        : "badge-danger"
                                    }`}
                                  >
                                    {vendor.status}
                                  </span>
                                </td>
                                <td>
                                  <div className="d-flex">
                                    <a
                                      className="btn btn-primary shadow btn-xs sharp me-1"
                                      onClick={() => handleEdit(vendor)}
                                    >
                                      <i className="fas fa-pencil-alt"></i>
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-danger shadow btn-xs sharp"
                                    >
                                      <i className="fa fa-trash"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="6" className="text-center">
                                No data found
                              </td>
                            </tr>
                          )}
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

export default SupplyMaster;
