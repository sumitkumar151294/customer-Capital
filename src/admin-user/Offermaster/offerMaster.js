import React, { useState } from "react";
import pizz1 from "../../assets/img/pizz1.jpg";

const OfferMasterComponent = () => {
  const [formData, setFormData] = useState({
    placement: "",
    title: "",
    subtitle: "",
    link: "",
    displayOrder: "",
    status: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.placement.length === 0 ||
      formData.title.length === 0 ||
      formData.subtitle.length === 0 ||
      formData.link.length === 0 ||
      formData.displayOrder.length === 0 ||
      formData.status.length === 0
    ) {
      setError("All fields are required");
      return;
    } else {
      setFormData("");
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Offer Master</h4>
              </div>
              <div className="card-body ">
                <div className="container-fluid">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-3 form-group mb-2">
                        <label htmlFor="status">Placement</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="placement"
                          value={formData.placement}
                          onChange={handleChange}
                        >
                          <option value="">Select</option>
                          <option value="Active">Top</option>
                          <option value="Active">Middle</option>
                          <option value="Non-Active">Bottom</option>
                        </select>
                        {error && <div className="text-danger">{error}</div>}
                      </div>
                      <div className="col-sm-5 form-group mb-2">
                        <label htmlFor="name-f">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          id="name-f"
                          placeholder=""
                          required=""
                          value={formData.title}
                          onChange={handleChange}
                        />
                        {error && <div className="text-danger">{error}</div>}
                      </div>
                      <div className="col-sm-4 form-group mb-2">
                        <label htmlFor="name-l">Subtitle</label>
                        <input
                          type="text"
                          className="form-control"
                          name="subtitle"
                          id="name-l"
                          placeholder=""
                          required=""
                          value={formData.subtitle}
                          onChange={handleChange}
                        />
                        <div className="text-danger">{error}</div>
                      </div>
                      <div className="col-sm-5 form-group mb-2">
                        <label htmlFor="email">Link</label>
                        <input
                          type="email"
                          className="form-control"
                          name="link"
                          id="email"
                          placeholder=""
                          required=""
                          value={formData.link}
                          onChange={handleChange}
                        />
                        {error && <div className="text-danger">{error}</div>}
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
                          onChange={handleChange}
                        />
                        {error && <div className="text-danger">{error}</div>}
                      </div>
                      <div className="col-sm-4 form-group mb-2">
                        <label htmlFor="pass">Upload Image</label>
                        <div className="input-group">
                          <div className="form-file">
                            <input
                              type="file"
                              className="form-file-input form-control"
                            />
                          </div>
                          <span className="input-group-text">Upload</span>
                        </div>
                        {error && <div className="text-danger">{error}</div>}
                      </div>
                      <div className="col-sm-3 form-group mb-2">
                        <label htmlFor="status">Status</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                        >
                          <option value="">Select</option>
                          <option value="Active">Active</option>
                          <option value="Non-Active">Non-Active</option>
                        </select>
                        {error && <div className="text-danger">{error}</div>}
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
      <div className="container-fluid pt-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                  <div className="card-header">
                    <h4 className="card-title">Offer List</h4>
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

export default OfferMasterComponent;
