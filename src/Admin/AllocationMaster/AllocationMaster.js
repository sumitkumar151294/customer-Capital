import React, { useState } from 'react'
import Loader from '../Loader/Loader'
import { useDispatch } from 'react-redux';
import { onAllocateMasterSubmit } from '../../redux/modules/Admin/allocateMasterSlice';

const AllocationMaster = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState('true')
    const [formData, setFormData] = useState({
        modules: {
            Amazon: false,
            Flipcart: false,
            Myntra: false,
            Ajio: false,
            UrbanMonkey: false,
            Bewakoof: false,
            Adidas: false,
            Snapdeal: false,
            FirstCry: false,
            IndiaMart: false,
            BigBasket: false,
            Nykaa: false,
            TataCliq: false,
            Shopclues: false,
            Croma: false,
            Pepperfry: false,
            Dukaan: false,
            Decathlon: false,
            Urbanic: false,
            Zivame: false,
            VishalMegaMart: false,

        },
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "selectAll") {
            const updatedModules = { ...formData.modules };
            for (const key in updatedModules) {
                updatedModules[key] = checked;
            }
            setFormData({
                ...formData,
                modules: updatedModules,
            });
        } else if (type === "checkbox") {
            setFormData({
                ...formData,
                modules: {
                    ...formData.modules,
                    [name]: checked,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const isSelectAllChecked = Object.values(formData.modules).every(
        (module) => module
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(onAllocateMasterSubmit(formData));
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
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="selectAll"
                                                    value={formData.modules.selectAll}
                                                    id="flexCheckDefault1"
                                                    checked={isSelectAllChecked}
                                                    onChange={handleInputChange}
                                                />
                                                <label
                                                    className="form-check-label fnt-17"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    Select All
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 br">
                                            <div class="form-check mt-2 bm-b">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                                <label class="form-check-label" for="flexCheckDefault2">
                                                    E-Commerce</label>
                                            </div>

                                            <div className="row ml-4">
                                                {Object.entries(formData.modules).map(
                                                    ([module, checked]) => (
                                                        <div
                                                            className="form-check mt-2 col-lg-3"
                                                            key={module}
                                                        >
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                name={module}
                                                                value={checked}
                                                                id={`flexCheckDefault-${module}`}
                                                                checked={checked}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor={`flexCheckDefault-${module}`}
                                                            >
                                                                {module
                                                                    .replace(/([A-Z])/g, " $1")
                                                                    .split(" ")
                                                                    .map(
                                                                        (word) =>
                                                                            word.charAt(0).toUpperCase() +
                                                                            word.slice(1).toLowerCase()
                                                                    )
                                                                    .join(" ")}
                                                            </label>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            <div class="col-sm-4 mt-2 mb-4">
                                                <button type='submit' class="btn btn-primary float-right pad-aa" onClick={handleSubmit}>Add <i class="fa fa-arrow-right"></i></button>
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
