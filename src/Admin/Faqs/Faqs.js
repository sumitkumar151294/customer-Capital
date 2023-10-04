import React from 'react'

const Faqs = () => {
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
                                            <input type="text" class="form-control" name="bdate" id="name-l" placeholder="" required />
                                        </div>
                                        <div class="col-sm-12 form-group mb-2">
                                            <label for="name-f">Question</label>
                                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="" required />
                                        </div>

                                        <div class="col-sm-12 form-group mb-2">
                                            <label for="name-f">Answer</label>
                                            <textarea name="textarea" id="textarea" cols="60" rows="10" class="form-control bg-transparent" placeholder=""></textarea>
                                        </div>
                                    </div>
                                </form>
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

export default Faqs
