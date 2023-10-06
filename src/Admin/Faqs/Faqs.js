import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { onFaqsSubmit } from '../../redux/modules/Admin/faqsSlice';

const Faqs = () => {
    const [faqData, setFaqData] = useState({ category: '', question: '', answer: '' });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(onFaqsSubmit(faqData));
    };

    return (
        <div class="content-body">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between">
                                <h4 class="card-title">FAQ's Master</h4>
                            </div>

                            <div class="card-body ">
                                <form>
                                    <div class="row">
                                        <div class="col-sm-4 form-group mb-2">
                                            <label for="name-l">Category</label>
                                            <input type="text" class="form-control" name="bdate" id="name-l" placeholder="" onChange={(e) => setFaqData({ ...faqData, category: e.target.value })} required />
                                        </div>
                                        <div class="col-sm-12 form-group mb-2">
                                            <label for="name-f">Question</label>
                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="" onChange={(e) => setFaqData({ ...faqData, question: e.target.value })} required />
                                        </div>

                                        <div class="col-sm-12 form-group mb-2">
                                            <label for="name-f">Answer</label>
                                            <textarea name="textarea" id="textarea" cols="60" rows="10" class="form-control bg-transparent" placeholder="" onChange={(e) => setFaqData({ ...faqData, answer: e.target.value })} ></textarea>
                                        </div>
                                    </div>
                                </form>
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

export default Faqs
