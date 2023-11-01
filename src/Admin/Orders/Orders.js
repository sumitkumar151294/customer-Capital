import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
const Orders = () => {
  const dispatch = useDispatch();
  const [supplier, setSupplier] = useState();
  const [client, setClient] = useState();
  const productList = [
    {
      brand: "Amazon",
      TotalNoVouchers: "₹ 2 ",
      TotalFaceValue: " ₹1000	",
      Margin: "5%	",
      TotalMarginValue: "₹50",
    },
    {
      brand: "Flipkart",
      TotalNoVouchers: "₹ 6 ",
      TotalFaceValue: " ₹500	",
      discountPercentage: "5%",
      Margin: "1%	",
      TotalMarginValue: "₹10",
    },
    {
      brand: "Nykaa	",
      TotalNoVouchers: " 3 ",
      TotalFaceValue: " ₹1000	",
      discountPercentage: "5%",
      Margin: "10%	",
      TotalMarginValue: "₹100",
    },
    {
      brand: "Myntra	",
      TotalNoVouchers: " 2 ",
      TotalFaceValue: " ₹500	",
      Margin: "5%	",
      TotalMarginValue: "₹50",
    },
  ];
  const [isLoading, setIsLoading] = useState("true");

  return (
    <div class="content-body">
      {!isLoading ? (
        <Loader />
      ) : (
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12 col-xxl-12">
              <div class="card">
                <div class="container-fluid">
                  <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                    <div class="card-header">
                      <h4 class="card-title">Orders</h4>
                    </div>
                    <div class="customer-search mb-sm-0 mb-3">
                      <div class="input-group search-area">
                        <input
                          type="text"
                          class="form-control only-high"
                          placeholder="Search here......"
                        />
                        <span class="input-group-text">
                          <a href="javascript:void(0)">
                            <i class="flaticon-381-search-2"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center flex-wrap">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-primary btn-sm btn-rounded me-3 mb-2"
                      >
                        <i class="fa fa-file-excel me-2"></i>Export
                      </a>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                    <div class="col-sm-3 form-group mb-2">
                      <label for="name-f">Supplier</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        value={supplier}
                        onChange={(e) => setSupplier(e.target.value)}
                      >
                        <option selected>Select</option>
                        <option value="First Client">Quicksilver</option>
                        <option value="Second Client">Supplier 2</option>
                        <option value="Third Client">Supplier 3</option>
                      </select>
                    </div>

                    <div class="col-sm-3 form-group mb-2">
                      <label for="name-f">Client</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                      >
                        <option selected>Select</option>
                        <option value="First Client">Client 1</option>
                        <option value="Second Client">Client 2</option>
                        <option value="Third Client">Client 3</option>
                      </select>
                    </div>
                    <div class="col-sm-3 form-group mb-2">
                      <label for="name-f">Date Range With Time</label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DateRangePicker"]}>
                          <DateRangePicker />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table header-border table-responsive-sm">
                      <thead>
                        <tr>
                          <th>Brand</th>
                          <th>Total No. Vouchers </th>
                          <th>Total Face Value</th>
                          <th>Margin</th>
                          <th>Total Margin Value</th>
                        </tr>
                      </thead>
                      {productList.map((item) => (
                        <tbody>
                          <tr>
                            <td>
                              {item.brand}
                              <a href="javascript:void();"></a>
                            </td>
                            <td>{item.TotalNoVouchers}</td>
                            <td> {item.TotalFaceValue}</td>
                            <td>{item.Margin}</td>
                            <td>{item?.TotalMarginValue}</td>
                          </tr>
                        </tbody>
                      ))}
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

export default Orders;
