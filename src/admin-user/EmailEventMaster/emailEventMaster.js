import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onEmailEventSubmit } from "../../redux/modules/UserAdmin/emailEventSlice";
import Loader from "../../Admin/Loader/Loader";

const EmailEventMaster = () => {
  const [isLoading, setIsLoading] = useState("true");

  const [name, setName] = useState({
    eventName: "",
    smsBody: "",
    subject: "",
    mailBody: "",
  });

  const [errors, setErrors] = useState({
    eventName: "",
    smsBody: "",
    subject: "",
    mailBody: "",
  });
  const handleChange = (e, fieldName) => {
    setName({
      ...name,
      [fieldName]: e.target.value,
    });

    setErrors({
      ...errors,
      [fieldName]: "",
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e?.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };

    for (const key in name) {
      if (name[key] === "") {
        newErrors[key] = "This field is required";
        isValid = false;
      } else {
        newErrors[key] = "";
      }
    }
    setErrors(newErrors);

    if (isValid) dispatch(onEmailEventSubmit(name));
  };

  const tableData = [
    {
      variable: "%firstname%",
      meaning: "FirstName",
    },
    {
      variable: "%lastname%",
      meaning: "LastName",
    },
    {
      variable: "%name%",
      meaning: "Name",
    },
    {
      variable: "%number%",
      meaning: "Mobile Number",
    },
    {
      variable: "%email%",
      meaning: "Email",
    },
    {
      variable: "%orderid%",
      meaning: "Order ID",
    },
    {
      variable: "%suborderid%",
      meaning: "Sub Order ID",
    },
    {
      variable: "%suborderid%",
      meaning: "Sub Order ID",
    },
    {
      variable: "%suborderid%",
      meaning: "Sub Order ID",
    },
    {
      variable: "%suborderid%",
      meaning: "Sub Order ID",
    },
    {
      variable: "%suborderid%",
      meaning: "Sub Order ID",
    },
    {
      variable: "%suborderid%",
      meaning: "Sub Order ID",
    },
    {
      variable: "%suborderid%",
      meaning: "Sub Order ID",
    },
  ];
  const tableInfo = [
    {
      id: 1,
      status: "Order Confirmed",
      date: "12-20-2023",
      placeholders: ["%orderid%", "%firstname%", "%lastname%"],
    },
    {
      id: 2,
      status: "OTP",
      date: "12-20-2023",
      placeholders: ["%firstname%", "%lastname%"],
    },
    {
      id: 3,
      status: "Welcome",
      date: "12-20-2023",
      placeholders: ["%firstname%", "%lastname%"],
    },
    {
      id: 4,
      status: "Order Delivered",
      date: "12-20-2023",
      placeholders: ["%orderid%", "%firstname%", "%lastname%"],
    },
  ];

  return (
    <div className="content-body">
      {!isLoading ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <div className="card">
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                  <div className="card-header">
                    <h4 className="card-title">Email Event Master</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-7 col-xxl-7">
                    <div className="card">
                      <div className="card-body pt-0">
                        <div class="col-sm-12 form-group mb-2">
                          <label for="name-f">Event Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            onChange={(e) => handleChange(e, "eventName")}
                            id="name-f"
                            placeholder=""
                            required=""
                          />
                          <p className="text-danger">{errors.eventName}</p>
                        </div>
                        <div className=" form-group mb-2">
                          <label htmlFor="name-f">SMS Body</label>
                          <div className=" bootstrap-tagsinput">
                            <input
                              className=""
                              onChange={(e) => handleChange(e, "smsBody")}
                              type="text"
                              data-role="tagsinput"
                            />
                            <p className="text-danger">{errors.smsBody}</p>
                          </div>
                        </div>
                        <div className="form-group mb-2">
                          <label htmlFor="name-f">Subject</label>
                          <div className=" bootstrap-tagsinput">
                            <input
                              className="input-tags"
                              type="text"
                              onChange={(e) => handleChange(e, "subject")}
                              data-role="tagsinput"
                            />
                            <p className="text-danger">{errors.subject}</p>
                          </div>
                        </div>
                        <div className="form-group mb-2">
                          <label htmlFor="name-f">Mail Body</label>
                          <div className=" bootstrap-tagsinput">
                            <input
                              className="input-tags"
                              onChange={(e) => handleChange(e, "mailBody")}
                              type="text"
                              data-role="tagsinput"
                            />
                            <p className="text-danger">{errors.mailBody}</p>
                          </div>
                        </div>
                        <div className="form-group mb-0 mt-2">
                          <button
                            className="btn btn-primary float-right pad-aa"
                            onClick={() => handleSubmit()}
                          >
                            Submit <i className="fa fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-5 col-xxl-5">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between">
                        <h4 className="card-title">Keywords</h4>
                        <div className="customer-search mb-sm-0 mb-3">
                          <div className="input-group search-area">
                            <input
                              type="text"
                              className="form-control only-high"
                              placeholder="Search by Email....."
                            />
                            <span className="input-group-text">
                              <a href="javascript:void(0)">
                                <i className="flaticon-381-search-2"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="klaa">
                          <table className="table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th>Variable</th>
                                <th>Meaning</th>
                              </tr>
                            </thead>
                            {tableData.length > 0 ? (
                              <tbody>
                                {tableData.map((item) => (
                                  <tr>
                                    <td>{item.variable}</td>
                                    <td>{item.meaning}</td>
                                  </tr>
                                ))}
                              </tbody>
                            ) : (
                              <tr>
                                <td colSpan="6" className="text-center">
                                  No data found
                                </td>
                              </tr>
                            )}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table header-border table-responsive-sm">
                      <thead>
                        <tr>
                          <th>S.NO</th>
                          <th>Event Name</th>
                          <th>Date</th>
                          <th>Subject</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {tableInfo.length > 0 ? (
                        <tbody>
                          {tableInfo.map((item) => (
                            <tr>
                              <td>
                                {item.id}
                                <a href="javascript:void();"></a>
                              </td>
                              <td>{item.status}</td>

                              <td>{item.date}</td>
                              <td>{item.placeholders}%</td>
                              <td>
                                <div class="d-flex">
                                  <a
                                    href="#"
                                    class="btn btn-primary shadow btn-xs sharp me-1"
                                  >
                                    <i class="fas fa-pencil-alt"></i>
                                  </a>
                                  <a
                                    href="#"
                                    class="btn btn-danger shadow btn-xs sharp"
                                  >
                                    <i class="fa fa-trash"></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center">
                            No data found
                          </td>
                        </tr>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailEventMaster;
