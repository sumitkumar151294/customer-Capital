import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { onBlogSubmit } from '../../redux/modules/Admin/blogSlice';
import Loader from '../Loader/Loader'

const Blog = () => {
    const [isLoading, setIsLoading] = useState('true')
    const [blogData, setBlogData] = useState({ name: '', date: '', heading: '', image: '', longDescription: '' });
    const [errors, setErrors] = useState({ name: '', date: '', heading: '', image: '', longDescription: '' });
    const dispatch = useDispatch();

    const handleChange = (e, fieldName) => {
        setBlogData({
            ...blogData,
            [fieldName]: e.target.value,
        });

        // Remove the error message when the user starts typing
        setErrors({
            ...errors,
            [fieldName]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = { ...errors };

        // Check if fields are empty and set corresponding error messages
        for (const key in blogData) {
            if (blogData[key] === '') {
                newErrors[key] = 'This field is required';
                isValid = false;
            } else {
                newErrors[key] = '';
            }
        }
        setErrors(newErrors);

        if (isValid) {
            dispatch(onBlogSubmit(blogData));
        }
    };

    return (
        <div class="content-body">
            {!isLoading ? (
                <Loader />
            ) : (
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
                                                <input type="text" class="form-control" name="fname" id="name-f" placeholder="" onChange={(e) => handleChange(e, "name")} />
                                                <p className="text-danger">{errors.name}</p>
                                            </div>
                                            <div class="col-sm-3 form-group mb-2">
                                                <label for="name-l">Blog Date</label>
                                                <input type="date" class="form-control" name="bdate" id="name-l" placeholder="" onChange={(e) => handleChange(e, "date")} />
                                                <p className="text-danger">{errors.date}</p>
                                            </div>
                                            <div class="col-sm-6 form-group mb-2">
                                                <label for="heading">Heading 1 </label>
                                                <input type="text" class="form-control" name="heading" id="heading" placeholder="" onChange={(e) => handleChange(e, "heading")} />
                                                <p className="text-danger">{errors.heading}</p>
                                            </div>

                                            <div class="col-sm-12 input-group mb-2">
                                                <div class="form-file">
                                                    <input type="file" class="form-file-input form-control" onChange={(e) => handleChange(e, "image")} />
                                                </div>
                                                <span class="input-group-text">Upload</span>
                                            </div>
                                            <p className="text-danger">{errors.image}</p>
                                        </div>
                                    </form>

                                    <div class="form-group mb-2 if">
                                        <label for="name-f">Long Description</label>
                                        <textarea name="textarea" id="textarea" cols="60" rows="10" class="form-control bg-transparent" placeholder="" onChange={(e) => handleChange(e, "longDescription")}></textarea>
                                        <p className="text-danger">{errors.longDescription}</p>
                                    </div>

                                    <div class="form-group mb-0 mt-2">
                                        <button type='submit' class="btn btn-primary float-right pad-aa" onClick={handleSubmit}>Submit <i class="fa fa-arrow-right"></i></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Blog
