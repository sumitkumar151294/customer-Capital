import React from 'react'

const Email = () => {
    return (
        <div class="content-body">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between">
                                <h4 class="card-title">Email Templates</h4>


                                <div class="dropdown-side">
                                    <div class="form-group mb-2">

                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>User List &nbsp;<i class="fa fa-angle-down"></i></option>
                                            <option value="About us">Jaswant Rawat</option>
                                            <option value="Privacy Policy">Manish Gautam</option>
                                            <option value="Terms and Conditions">Naveen Jha</option>

                                            <option value="Contact us">Ritesh Gautam</option>
                                            <option value="LC Loyality Program">Ankit Sharma</option>

                                        </select>
                                    </div>

                                </div>

                                <div class="dropdown-side">
                                    <div class="form-group mb-2">

                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Event List &nbsp;<i class="fa fa-angle-down"></i></option>
                                            <option value="About us">Register</option>
                                            <option value="Privacy Policy">OTP </option>
                                            <option value="Terms and Conditions">Order Confirmation</option>



                                        </select>
                                    </div>

                                </div>

                            </div>


                            <div class="card-body ">
                                <div class="form-group mb-2">
                                    <label for="name-f">Subject</label>
                                    <input type="text" class="form-control" name="fname" id="name-f" placeholder="" required/>
                                </div>

                                <div class="form-group mb-2 if">
                                    <label for="name-f">Long Description</label>
                                    <textarea name="textarea" id="textarea" cols="60" rows="10" class="form-control bg-transparent" placeholder=""></textarea>
                                </div>

                                <div class="form-group mb-0 mt-2">
                                    <button class="btn btn-primary float-right pad-aa">Submit <i class="fa fa-arrow-right"></i></button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Email
