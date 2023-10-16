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
                                                E-Commerce</label>
                                            </div>



                                            <div class="row ml-4">
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                    <label class="form-check-label" for="flexCheckDefault3">
                                                    Amazon</label>
                                                </div>


                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                                    <label class="form-check-label" for="flexCheckDefault4">
                                                        Flipcart</label>
                                                </div>



                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Myntra</label>
                                                </div>


                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                                    <label class="form-check-label" for="flexCheckDefault5">
                                                        Ajio</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                    Urban Monkey</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                                                    <label class="form-check-label" for="flexCheckDefault6">
                                                    Bewakoof.com
</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                                                    <label class="form-check-label" for="flexCheckDefault7">
                                                    Adidas</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
                                                    <label class="form-check-label" for="flexCheckDefault8">
                                                    Snapdeal</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
                                                    <label class="form-check-label" for="flexCheckDefault9">
                                                    Snapdeal</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
                                                    <label class="form-check-label" for="flexCheckDefault10">
                                                    Snapdeal</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                    <label class="form-check-label" for="flexCheckDefault11">
                                                    First Cry
</label>
                                                </div>

                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />
                                                    <label class="form-check-label" for="flexCheckDefault12">
                                                    India Mart
</label>
                                                </div>


                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault13" />
                                                    <label class="form-check-label" for="flexCheckDefault13">
                                                    BigBasket</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
                                                    <label class="form-check-label" for="flexCheckDefault14">
                                                    BigBasket</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />
                                                    <label class="form-check-label" for="flexCheckDefault15">
                                                    BigBasket</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />
                                                    <label class="form-check-label" for="flexCheckDefault16">
                                                    Nykaa
</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault17" />
                                                    <label class="form-check-label" for="flexCheckDefault17">
                                                    Tata Cliq
</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault18" />
                                                    <label class="form-check-label" for="flexCheckDefault18">
                                                    Shopclues</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault19" />
                                                    <label class="form-check-label" for="flexCheckDefault19">
                                                    Croma</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault20" />
                                                    <label class="form-check-label" for="flexCheckDefault20">
                                                    Pepperfry
</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault21" />
                                                    <label class="form-check-label" for="flexCheckDefault21">
                                                    Dukaan</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                                                    <label class="form-check-label" for="flexCheckDefault22">
                                                    Decathlon</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault23" />
                                                    <label class="form-check-label" for="flexCheckDefault23">
                                                    Decathlon</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault24" />
                                                    <label class="form-check-label" for="flexCheckDefault24">
                                                    Urbanic</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault25" />
                                                    <label class="form-check-label" for="flexCheckDefault25">
                                                    Zivame</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault26" />
                                                    <label class="form-check-label" for="flexCheckDefault26">
                                                    Vishal Mega Mart
</label>
                                                </div>
                                                <div class="form-check mt-2 col-lg-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27" />
                                                    <label class="form-check-label" for="flexCheckDefault27">
                                                    Croma</label>
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
