import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { onCategorySubmit } from "../../redux/modules/Admin/categorySlice";
import { CSVLink } from "react-csv";

const CreateCategory = () => {
  const [isLoading, setIsLoading] = useState("true");
  const [isformLoading, setIsFormLoading] = useState("true");
  const [createCategory, setCreateCategory] = useState({
    categoryName: "",
    vendorCategory: "",
    status: "",
    brand: "",
  });
  const [errors, setErrors] = useState({
    categoryName: "",
    vendorCategory: "",
    status: "",
    brand: "",
  });

  const dispatch = useDispatch();
  let tableData = [
    {
      category: "E-Commerce",
      supplier: "Qucksilver",
      company: "Amazon",
    },
    {
      category: "E-Commerce",
      supplier: "Supplier 2",
      company: "Flipcart",
    },
    {
      category: "Shopping",
      supplier: "Supplier 3",
      company: "Nykaa",
    },
    {
      category: "Food",
      supplier: "Supplier 4",
      company: "KFC",
    },
  ];
  const headers = [
    { label: "category", key: "category" },
    { label: "supplier", key: "supplier" },
    { label: "company", key: "company" },
  ];

  const handleChange = (e, fieldName) => {
    setCreateCategory({
      ...createCategory,
      [fieldName]: e.target.value,
    });

    // Remove the error message when the user starts typing
    setErrors({
      ...errors,
      [fieldName]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { ...errors };

    // Check if fields are empty and set corresponding error messages
    for (const key in createCategory) {
      if (createCategory[key] === "") {
        newErrors[key] = "This field is required";
        isValid = false;
      } else {
        newErrors[key] = "";
      }
    }
    setErrors(newErrors);

    if (isValid) {
      dispatch(onCategorySubmit(createCategory));
    }
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  Create And Update & Brand Mapping
                </h4>
              </div>
              <div className="card-body position-relative">
                {!isLoading ? (
                  <div style={{ height: "400px" }}>
                    <Loader classType={"absoluteLoader"} />
                  </div>
                ) : (
                  <div className="container mt-3">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-3 form-group mb-2">
                          <label htmlFor="name-f">Category Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="categoryName"
                            id="name-f"
                            placeholder=""
                            onChange={(e) => handleChange(e, "categoryName")}
                          />
                          <p className="text-danger">{errors.categoryName}</p>
                        </div>
                        <div className="col-sm-3 form-group mb-2">
                          <label htmlFor="vendor-category">Supplier Name</label>
                          <select
                            className="form-select"
                            id="vendor-category"
                            name="vendorCategory"
                            onChange={(e) => handleChange(e, "vendorCategory")}
                            aria-label="Default select example"
                          >
                            <option value="">Select</option>
                            <option value="E-Commerce">E-Commerce</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Kitchen Appliances">
                              Kitchen Appliances
                            </option>
                            <option value="Health">Health</option>
                            <option value="Insurance">Insurance</option>
                          </select>
                          <p className="text-danger">{errors.vendorCategory}</p>
                        </div>
                        <div className="col-sm-3 form-group mb-2">
                          <label htmlFor="vendor-category">
                            Supplier Brand
                          </label>
                          <select
                            className="form-select"
                            id="vendor-category"
                            name="vendorCategory"
                            onChange={(e) => handleChange(e, "brand")}
                            aria-label="Default select example"
                          >
                            <option value="">Select</option>
                            <option value="E-Commerce">E-Commerce</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Kitchen Appliances">
                              Kitchen Appliances
                            </option>
                            <option value="Health">Health</option>
                            <option value="Insurance">Insurance</option>
                          </select>
                          <p className="text-danger">{errors.brand}</p>
                        </div>
                        <div className="col-sm-3 form-group mb-2">
                          <label htmlFor="status">Select Status</label>
                          <select
                            className="form-select"
                            id="status"
                            name="status"
                            onChange={(e) => handleChange(e, "status")}
                            aria-label="Default select example"
                          >
                            <option value="">Select</option>
                            <option value="Active">Active</option>
                            <option value="In-Active">In-Active</option>
                          </select>
                          <p className="text-danger">{errors.status}</p>
                        </div>
                      </div>
                      <div class="col-sm-4 mt-2 mb-4">
                        <button class="btn btn-primary float-right pad-aa">
                          Submit <i class="fa fa-arrow-right"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-0">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="container mt-2 mb-2">
                <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                  <div class="card-header">
                    <h4 class="card-title">Category List</h4>
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
                    <CSVLink data={tableData} headers={headers}>
                      <button className="btn btn-primary btn-sm btn-rounded me-3 mb-2">
                        <i className="fa fa-file-excel me-2"></i>export
                      </button>
                    </CSVLink>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table header-border table-responsive-sm">
                    <thead>
                      <tr>
                        <th>Category Name</th>
                        <th>Supplier Name</th>

                        <th>Supplier Brand</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item) => (
                        <tr>
                          <td>{item.category}</td>
                          <td>
                            {item.supplier}
                            <a href="javascript:void();"></a>
                          </td>
                          <td>{item.company}</td>

                          <td>
                            <div class="d-flex">
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

export default CreateCategory;
