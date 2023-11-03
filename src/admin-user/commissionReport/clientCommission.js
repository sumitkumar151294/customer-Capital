import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onClientCommissionSubmit } from "../../redux/modules/UserAdmin/ClientCommissionSlice";
import Loader from "../../Admin/Loader/Loader";
import { DateRangePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";

const ClientCommissionReport = () => {
  const [isLoading, setIsLoading] = useState("true");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onClientCommissionSubmit());
  }, []);
  const tableData = [
    {
      Supplier: "Quick Silver",
      Brand: "Amazon",
      ProductName: "Amazon Gift Pay",
      NoOfVouchers: 12,
      TotalFaceValue: "₹5000",
      TotalPaidAmount: "₹5000",
      CommissionPercentage: "2%",
      CommissionAmount: "₹100",
    },
    {
      Supplier: "Quick Silver",
      Brand: "Amazon",
      ProductName: "Amazon Gift Pay",
      NoOfVouchers: 12,
      TotalFaceValue: "₹5000",
      TotalPaidAmount: "₹5000",
      CommissionPercentage: "2%",
      CommissionAmount: "₹100",
    },
    {
      Supplier: "Quick Silver",
      Brand: "Amazon",
      ProductName: "Amazon Gift Pay",
      NoOfVouchers: 12,
      TotalFaceValue: "₹5000",
      TotalPaidAmount: "₹5000",
      CommissionPercentage: "2%",
      CommissionAmount: "₹100",
    },
    {
      Supplier: "Quick Silver",
      Brand: "Amazon",
      ProductName: "Amazon Gift Pay",
      NoOfVouchers: 12,
      TotalFaceValue: "₹5000",
      TotalPaidAmount: "₹5000",
      CommissionPercentage: "2%",
      CommissionAmount: "₹100",
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
                  <div className="d-flex justify-content-between align-items-center  flex-wrap">
                    <div className="card-header">
                      <h4 className="card-title">Client Commission Report</h4>
                    </div>
                    <div className="ddop">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select Supplier</option>
                        <option value="First Client">Qwik Silver</option>
                        <option value="Second Client">Supplier 2</option>
                        <option value="Third Client">Supplier 3</option>
                      </select>
                    </div>
                    <div className="ddop">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select Brand</option>
                        <option value="First Client">Amazon</option>
                        <option value="Second Client">Flipkart</option>
                        <option value="Third Client">Nykaa</option>
                      </select>
                    </div>
                    {/* <div className="example">
                      <label for="name-f">Date Range With Time</label>

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DateRangePicker"]}>
                          <DateRangePicker />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div> */}

                    <div className="d-flex align-items-center flex-wrap">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary btn-sm btn-rounded me-3 mb-2"
                      >
                        <i className="fa fa-file-excel me-2"></i>Export
                      </a>
                    </div>
                    <div className="example">

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DateRangePicker"]}>
                          <DateRangePicker />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table header-border table-responsive-sm">
                      <thead>
                        <tr>
                          <th>Supplier</th>
                          <th>Brand</th>
                          <th>Product Name</th>
                          <th>No. of Vouchers</th>
                          <th>Total Face Value</th>
                          <th>Total Paid Amount</th>
                          <th>Commission%</th>
                          <th>Commission Amount</th>
                        </tr>
                      </thead>
                      {tableData.length > 0 ? (
                        <tbody>
                          {tableData.map((item) => (
                            <tr>
                              <td>{item.Supplier}</td>
                              <td>
                                {item.Brand} <a href="javascript:void();"></a>
                              </td>
                              <td> {item.ProductName} </td>
                              <td>{item.NoOfVouchers}</td>
                              <td>{item.TotalFaceValue}</td>
                              <td>{item.TotalPaidAmount}</td>
                              <td>{item.CommissionPercentage}</td>
                              <td>{item.CommissionAmount}</td>
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

export default ClientCommissionReport;
