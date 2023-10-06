import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { onCmsSubmit } from '../../redux/modules/Admin/cmsSlice';

const CMS = () => {
    const [cmsData, setCmsData] = useState({ pageName: '', shortDescription: '', longDescription: '' });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(onCmsSubmit(cmsData));
    };

    return (
        <>
            <div class="content-body">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-xl-12 col-xxl-12">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                    <h4 class="card-title">CMS</h4>

                                    <div class="dropdown-side">
                                        <div class="form-group mb-2">

                                            <select class="form-select"
                                                name='pageName'
                                                value={cmsData.pageName}
                                                onChange={(e) => setCmsData({ ...cmsData, pageName: e.target.value })}
                                                aria-label="Default select example">
                                                <option selected>Select Page Name &nbsp;<i class="fa fa-angle-down"></i></option>
                                                <option value="About us">About us</option>
                                                <option value="Privacy Policy">Privacy Policy</option>
                                                <option value="Terms and Conditions">Terms and Conditions</option>
                                                <option value="Contact us">Contact us</option>
                                                <option value="LC Loyality Program">LC Loyality Program</option>

                                            </select>
                                        </div>

                                    </div>

                                </div>

                                <div class="card-body ">
                                    <div class="form-group mb-2">
                                        <label for="name-f">Short Description</label>
                                        <textarea name="textarea" id="textarea" cols="60" rows="10" class="form-control bg-transparent" placeholder="" onChange={(e) => setCmsData({ ...cmsData, shortDescription: e.target.value })}></textarea>
                                    </div>

                                    <div class="form-group mb-2 if">
                                        <label for="name-f">Long Description</label>
                                        <textarea name="textarea" id="textarea" cols="60" rows="10" class="form-control bg-transparent" placeholder="" onChange={(e) => setCmsData({ ...cmsData, longDescription: e.target.value })}></textarea>
                                    </div>

                                    <div class="form-group mb-0 mt-2">
                                        <button type='submit' class="btn btn-primary float-right pad-aa" onClick={handleSubmit}>Submit <i class="fa fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CMS
