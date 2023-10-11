import React, { useState } from 'react'
import Loader from '../Loader/Loader'

const AllocationMaster = () => {
    const [isLoading, setIsLoading] = useState('true')
    return (
        <div class="content-body">
            {!isLoading ? (
                <Loader />
            ) : (
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-12 col-xxl-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Allocation Master</h4>
                                </div>
                                <div class="card-body ">
                                    <form>
                                        <div class="row">

                                            <div class="col-sm-4 form-group mb-2">
                                                <label for="name-f">Select Allocation</label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Select</option>
                                                    <option value="First Client">First Client</option>
                                                    <option value="Second Client">Second Client</option>
                                                    <option value="Third Client">Third Client</option>
                                                </select>
                                            </div>

                                        </div>


                                    </form>

                                    <div class="row top-top">
                                        <div class="col-lg-4">
                                            <div class="form-check mt-2 padd">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                                <label class="form-check-label fnt-17" for="flexCheckDefault1">
                                                    Select All  </label>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 br">
                                            <div class="form-check mt-2 bm-b">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                                <label class="form-check-label" for="flexCheckDefault2">
                                                    Head Category</label>
                                            </div>



                                            <div class="row ml-4">
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                    <label class="form-check-label" for="flexCheckDefault3">
                                                        Client Category1</label>
                                                </div>


                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                                    <label class="form-check-label" for="flexCheckDefault4">
                                                        Client Category2</label>
                                                </div>



                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Client Category3</label>
                                                </div>


                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                                    <label class="form-check-label" for="flexCheckDefault5">
                                                        Client Category4</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Client Category4</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                                                    <label class="form-check-label" for="flexCheckDefault6">
                                                        Client Category4</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                                                    <label class="form-check-label" for="flexCheckDefault7">
                                                        Client Category4</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
                                                    <label class="form-check-label" for="flexCheckDefault8">
                                                        Client Category4</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
                                                    <label class="form-check-label" for="flexCheckDefault9">
                                                        Client Category4</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
                                                    <label class="form-check-label" for="flexCheckDefault10">
                                                        Client Category4</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                    <label class="form-check-label" for="flexCheckDefault11">
                                                        Client Category4</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />
                                                    <label class="form-check-label" for="flexCheckDefault12">
                                                        Client Category4</label>
                                                </div>


                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault13" />
                                                    <label class="form-check-label" for="flexCheckDefault13">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
                                                    <label class="form-check-label" for="flexCheckDefault14">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />
                                                    <label class="form-check-label" for="flexCheckDefault15">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />
                                                    <label class="form-check-label" for="flexCheckDefault16">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault17" />
                                                    <label class="form-check-label" for="flexCheckDefault17">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault18" />
                                                    <label class="form-check-label" for="flexCheckDefault18">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault19" />
                                                    <label class="form-check-label" for="flexCheckDefault19">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault20" />
                                                    <label class="form-check-label" for="flexCheckDefault20">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault21" />
                                                    <label class="form-check-label" for="flexCheckDefault21">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                                                    <label class="form-check-label" for="flexCheckDefault22">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault23" />
                                                    <label class="form-check-label" for="flexCheckDefault23">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault24" />
                                                    <label class="form-check-label" for="flexCheckDefault24">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault25" />
                                                    <label class="form-check-label" for="flexCheckDefault25">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault26" />
                                                    <label class="form-check-label" for="flexCheckDefault26">
                                                        Client Category4</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27" />
                                                    <label class="form-check-label" for="flexCheckDefault27">
                                                        Client Category4</label>
                                                </div>

                                                <div class="col-sm-4 mt-2 mb-4">
                                                    <button class="btn btn-primary float-right pad-aa">Add <i class="fa fa-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
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

export default AllocationMaster
