import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Blog = () => {
    const [blogData, setBlogData] = useState({pageName:'', shortDescription:'', longDescription:'' });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(onBlogSubmit(blogData));
    };

    return (
        <div class="content-body">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between">
                                <h4 class="card-title">Blog Master</h4>
                            </div>

                            <div class="card-body ">
                                <form>
                                    <div class="row">

                                        <div class="col-sm-3 form-group mb-2">
                                            <label for="name-f">Author Name</label>
                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="" required />
                                        </div>
                                        <div class="col-sm-3 form-group mb-2">
                                            <label for="name-l">Blog Date</label>
                                            <input type="date" class="form-control" name="bdate" id="name-l" placeholder="" required />
                                        </div>
                                        <div class="col-sm-6 form-group mb-2">
                                            <label for="heading">Heading 1 </label>
                                            <input type="text" class="form-control" name="heading" id="heading" placeholder="" required />
                                        </div>

                                        <div class="col-sm-12 input-group mb-2">
                                            <div class="form-file">
                                                <input type="file" class="form-file-input form-control" />
                                            </div>
                                            <span class="input-group-text">Upload</span>
                                        </div>
                                    </div>
                                </form>

                                <div class="form-group mb-2 if">
                                    <label for="name-f">Long Description</label>
                                    <textarea name="textarea" id="textarea" cols="60" rows="10" class="form-control bg-transparent" placeholder=""></textarea>
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
    )
}

export default Blog
