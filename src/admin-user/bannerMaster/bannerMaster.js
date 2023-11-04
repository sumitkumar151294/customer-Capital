import React, { useState } from "react";
import pizz1 from "../../assets/img/pizz1.jpg";
import { useDispatch } from "react-redux";
import { onBannerMasterSubmit } from "../../redux/modules/UserAdmin/BannerMasterSlice";
import Loader from "../../Admin/Loader/Loader";

const BannerList = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState("true");
  const [formData, setFormData] = useState({
    placement: "",
    image: "",
    title: "",
    subtitle: "",
    link: "",
    displayOrder: "",
    status: "",
  });
  const [errors, setErrors] = useState({
    placement: "",
    title: "",
    subtitle: "",
    link: "",
    displayOrder: "",
    image: "",
    status: "",
  });

  const handleChange = (e, fieldName) => {
    setFormData({
      ...formData,
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
    for (const key in formData) {
      if (formData[key] === "") {
        newErrors[key] = "This field is required";
        isValid = false;
      } else {
        newErrors[key] = "";
      }
    }

    setErrors(newErrors);

    if (isValid) {
      dispatch(onBannerMasterSubmit(formData));
    }
  };

  const offerListData = [
    {
      image: pizz1,
      title: "Get the most out of it",
      subtitle: "we provide the best offer and vouchers",
      link: "https://demo1.way2webhost.com/LC-user-admin/bannermaster.html",
      displayOrder: "2",
      status: "Active",
    },
    {
      image: pizz1,
      title: "Get the most out of it",
      subtitle: "we provide the best offer and vouchers",
      link: "https://demo1.way2webhost.com/LC-user-admin/bannermaster.html",
      displayOrder: "2",
      status: "Active",
    },
    {
      image: pizz1,
      title: "Get the most out of it",
      subtitle: "we provide the best offer and vouchers",
      link: "https://demo1.way2webhost.com/LC-user-admin/bannermaster.html",
      displayOrder: "2",
      status: "Active",
    },
    {
      image: pizz1,
      title: "Get the most out of it",
      subtitle: "we provide the best offer and vouchers",
      link: "https://demo1.way2webhost.com/LC-user-admin/bannermaster.html",
      displayOrder: "2",
      status: "Active",
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
                <div className="card-header">
                  <h4 className="card-title">Banner Master</h4>
                </div>
                <div className="card-body ">
                  <div className="container-fluid">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-3 form-group mb-2">
                          <label htmlFor="status">Banner Placement</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="placement"
                            value={formData.placement}
                            onChange={(e) => handleChange(e, "placement")}
                          >
                            <option value="">Select</option>
                            <option value="Active">Top</option>
                            <option value="Non-Active">Bottom</option>
                          </select>
                          <p className="text-danger">{errors.placement}</p>
                        </div>
                        <div className="col-sm-5 form-group mb-2">
                          <label htmlFor="name-f">Banner Title</label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="name-f"
                            placeholder=""
                            required=""
                            value={formData.title}
                            onChange={(e) => handleChange(e, "title")}
                          />
                          <p className="text-danger">{errors.title}</p>
                        </div>
                        <div className="col-sm-4 form-group mb-2">
                          <label htmlFor="name-l">Banner Subtitle</label>
                          <input
                            type="text"
                            className="form-control"
                            name="subtitle"
                            id="name-l"
                            placeholder=""
                            required=""
                            value={formData.subtitle}
                            onChange={(e) => handleChange(e, "subtitle")}
                          />
                          <p className="text-danger">{errors.subtitle}</p>
                        </div>
                        <div className="col-sm-5 form-group mb-2">
                          <label htmlFor="email">Banner Link</label>
                          <input
                            type="email"
                            className="form-control"
                            name="link"
                            id="email"
                            placeholder=""
                            required=""
                            value={formData.link}
                            onChange={(e) => handleChange(e, "link")}
                          />
                          <p className="text-danger">{errors.link}</p>
                        </div>
                        <div className="col-sm-3 form-group mb-2">
                          <label htmlFor="email">Display Order</label>
                          <input
                            type="email"
                            className="form-control"
                            name="displayOrder"
                            id="email"
                            placeholder=""
                            required=""
                            value={formData.displayOrder}
                            onChange={(e) => handleChange(e, "displayOrder")}
                          />
                          <p className="text-danger">{errors.displayOrder}</p>
                        </div>
                        <div className="col-sm-4 form-group mb-2">
                          <label htmlFor="pass">Upload Image</label>
                          <div className="input-group">
                            <div className="form-file">
                              <input
                                type="file"
                                className="form-file-input form-control"
                                value={formData.image}
                                onChange={(e) => handleChange(e, "image")}
                              />
                            </div>
                            <span className="input-group-text">Upload</span>
                          </div>
                          <p className="text-danger">{errors.image}</p>
                        </div>
                        <div className="col-sm-3 form-group mb-2">
                          <label htmlFor="status">Status</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="status"
                            value={formData.status}
                            onChange={(e) => handleChange(e, "status")}
                          >
                            <option value="">Select</option>
                            <option value="Active">Active</option>
                            <option value="Non-Active">Non-Active</option>
                          </select>
                          <p className="text-danger">{errors.status}</p>
                        </div>
                        <div className="col-sm-12 form-group mb-0 mt-2">
                          <button
                            className="btn btn-primary float-right pad-aa"
                            type="submit"
                          >
                            Submit <i className="fa fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container-fluid pt-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                  <div className="card-header">
                    <h4 className="card-title">Banner List</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table header-border table-responsive-sm">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Subtitle</th>
                          <th>Link</th>
                          <th>Display Order</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {offerListData.length > 0 ? (
                        <tbody>
                          {offerListData.map((item) => (
                            <tr>
                              <td>
                                <img
                                  src={item.image}
                                  style={{ width: "50px" }}
                                  alt="pizza"
                                />
                              </td>
                              <td>
                                <strong>{item.title}</strong>
                              </td>
                              <td>{item.subtitle}</td>
                              <td>{item.link} </td>
                              <td> {item.displayOrder} </td>
                              <td>
                                <span className="badge badge-success">
                                  {item.status}
                                </span>
                              </td>
                              <td>
                                <div className="d-flex">
                                  <a
                                    href="#"
                                    className="btn btn-primary shadow btn-xs sharp me-1"
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
      </div>
    </div>
  );
};

export default BannerList;
