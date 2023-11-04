import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onAbandonedSubmit } from "../../redux/modules/UserAdmin/AbandonedCartSlice";
import Loader from "../../Admin/Loader/Loader";

const AbandonedCartReport = () => {
  const [isLoading, setIsLoading] = useState("true");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onAbandonedSubmit());
  }, []);
  const customerDetail = [
    {
      name: "Rinkal@codeztechnolabs.com",
      email: "jaswantjojo21@gmail.com ",
      mobile: "9876543210  ",
      cartValue: "₹5000",
      status: "Pending",
      action: "Notify",
    },
  ];
  const productDetail = [
    {
      sno: "1",
      brandName: "Amazon",
      faceValue: " ₹2000  ",
      qty: "3",
      sku: "#45555    ",
      disAmt: "₹250",
    },
    {
      sno: "1",
      brandName: "Amazon",
      faceValue: " ₹2000  ",
      qty: "3",
      sku: "#45555    ",
      disAmt: "₹250",
    },
    {
      sno: "1",
      brandName: "Amazon",
      faceValue: " ₹2000  ",
      qty: "3",
      sku: "#45555    ",
      disAmt: "₹250",
    },
    {
      sno: "1",
      brandName: "Amazon",
      faceValue: " ₹2000  ",
      qty: "3",
      sku: "#45555    ",
      disAmt: "₹250",
    },
    {
      sno: "1",
      brandName: "Amazon",
      faceValue: " ₹2000  ",
      qty: "3",
      sku: "#45555    ",
      disAmt: "₹250",
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
                <div className="container-fluid">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="card-header">
                      <h4 className="card-title">Abandoned Cart Report</h4>
                    </div>
                    <div className="customer-search mb-sm-0 mb-3">
                      <div className="input-group search-area">
                        <input
                          type="text"
                          className="form-control only-high"
                          placeholder="Mobile/Email/Name"
                        />
                        <span className="input-group-text">
                          <a href="javascript:void(0)">
                            <i className="flaticon-381-search-2"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="example">
                      <input
                        type="text"
                        className="form-control input-daterange-timepicker"
                        name="daterange"
                        defaultValue="01/01/2015 1:30 PM - 01/01/2015 2:00 PM"
                      />
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary btn-sm btn-rounded me-3 mb-2"
                      >
                        <i className="fa fa-file-excel me-1"></i>Export
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-body p-0">
                  {customerDetail.map((item) => (
                    <div className="d-flex justify-content-between weak">
                      <div className="1st">
                        <h6>Name</h6>
                        <p>{item.name}</p>
                      </div>

                      <div className="1st">
                        <h6>Email</h6>
                        <p>{item.email}</p>
                      </div>

                      <div className="1st">
                        <h6>Mobile</h6>
                        <p>{item.mobile}</p>
                      </div>

                      <div className="1st">
                        <h6>Total Cart Value</h6>
                        <p>{item.cartValue}</p>
                      </div>

                      <div className="1st">
                        <h6>Status</h6>
                        <span className="btn btn-danger btn-xxs">
                          {item.status}
                        </span>
                      </div>

                      <div className="1st">
                        <h6>Action</h6>
                        <button
                          type="button"
                          className="btn btn-rounded btn-secondary btn-xxs"
                        >
                          <i className="fa fa-info"></i> &nbsp;{item.action}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {productDetail.length > 0 ? (
                  <div className="card-body theorder">
                    {productDetail.map((item) => (
                      <div class="row">
                        <div class="col-lg-1">
                          <h5>S.NO</h5>
                          <p>{item.sno}</p>
                        </div>

                        <div class="col-lg-3">
                          <h5>Brand Name</h5>
                          <p>{item.brandName}</p>
                        </div>

                        <div class="col-lg-3">
                          <h5>Face Value</h5>
                          <p>{item.faceValue}</p>
                        </div>

                        <div class="col-lg-1">
                          <h5>QTY</h5>
                          <p>{item.qty}</p>
                        </div>

                        <div class="col-lg-2">
                          <h5>SKU</h5>
                          <p>{item.sku}</p>
                        </div>

                        <div class="col-lg-2">
                          <h5>Discounted Amt.</h5>
                          <p>{item.disAmt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No data found
                    </td>
                  </tr>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AbandonedCartReport;
