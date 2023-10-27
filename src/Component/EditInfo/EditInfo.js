import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { onUpdateSubmit } from '../../redux/modules/loginSlice';


const EditInfo = () => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({ fname: '', lname: '', mobile: '', email: '', password: '', gender: '' })
    const [errors, setErrors] = useState({ fname: '', lname: '', mobile: '', email: '', password: '', gender: '' });

    const handleChange = (e, fieldname) => {
        setUserData({
            ...userData,
            [fieldname]: e.target.value,
        });

        // Remove the error message when the user starts typing
        setErrors({
            ...errors,
            [fieldname]: '',
        });

    }

    const handleSubmit = (e) => {

        e.preventDefault()
        // console.log(userData)
        // dispatch(onUpdateSubmit(userData))

        let isValid = true;
        const newErrors = { ...errors };

        // Check if fields are empty and set corresponding error messages
        for (const key in userData) {
            debugger
            if (userData[key] === '') {
                newErrors[key] = 'This field is ';
                isValid = false;
            } else {
                newErrors[key] = '';
            }
        }
        // Email validation using the regexEmail pattern
        const regexEmail = /[a-zA-Z0-9]+([\_\.\-{1}])?[a-zA-Z0-9]+\@[a-zA-Z0-9]+(\.[a-zA-Z\.]+)/g;
        if (!regexEmail.test(userData.email)) {
            newErrors.secret = 'Invalid email format';
            isValid = false;

        }
        setErrors(newErrors);
        debugger
        if (isValid) {
            debugger
            dispatch(onUpdateSubmit(userData))
        }

    }

    return (
        <>
            <div class="modal fade" id="signupmodal">
                <div class="modal-dialog modal-dialog-centered loginmodalsize">
                    <div class="modal-content">
                        <div class="loginpop">
                            <button type="button" class="close modalclosebtn" data-bs-dismiss="modal">&times;</button>
                            <form onSubmit={handleSubmit} >
                                <div class="login-form">
                                    <div class="row marginrow">
                                        <div class="col-md-12 input-main">
                                            <h3>Change Your Information</h3>

                                        </div>
                                        <div class="col-md-6 input-main">
                                            <div class="floating-box ">
                                                <input name="fname" type="text" id="ctl00_txtname" class="floating-input" placeholder="First Name"
                                                    onChange={(e) => handleChange(e, 'fname')} />
                                                <span id="ctl00_RequiredFieldValidator3" style={{ display: 'none', color: 'red' }}

                                                >*</span>
                                                <p className="text-danger">{errors.fname}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6 input-main">
                                            <div class="floating-box ">
                                                <input name="lname" type="text" id="ctl00_txtlastname" class="floating-input" placeholder="Last Name"
                                                    onChange={(e) => handleChange(e, 'lname')} />
                                                <span id="ctl00_RequiredFieldValidator6" style={{ display: 'none', color: 'red' }}>*</span>
                                                <p className="text-danger">{errors.lname}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12 input-main">
                                            <div class="floating-box ">
                                                <input name="mobile" type="text" id="ctl00_txtmobile" class="floating-input" placeholder="Enter 10 digit mobile number"
                                                    onChange={(e) => handleChange(e, 'mobile')} />
                                                <span id="ctl00_RequiredFieldValidator4" style={{ display: 'none', color: 'red' }}>*</span>
                                                <p className="text-danger">{errors.mobile}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12 input-main">
                                            <div class="floating-box ">
                                                <input name="email" type="text" id="ctl00_txtemail2" class="floating-input" placeholder="Enter Email"
                                                    onChange={(e) => handleChange(e, 'email')} />
                                                <span id="ctl00_RequiredFieldValidator5" style={{ display: 'none', color: 'red' }}>*</span>
                                                <p className="text-danger">{errors.email}</p>
                                            </div>
                                        </div>

                                        <div class="col-md-12 input-main">
                                            <div class="floating-box ">
                                                <input name="password" type="password" id="ctl00_txtconfirmpassword" class="floating-input" placeholder="Confirm Password"
                                                    onChange={(e) => handleChange(e, 'password')} />
                                                <div class="showpassbtn"><i id="showpass2" class="fas fa-eye-slash"></i></div>
                                                <span id="ctl00_RequiredFieldValidator7" style={{ display: 'none', color: 'red' }}>*</span>
                                                <p className="text-danger">{errors.password}</p>

                                            </div>
                                        </div>
                                        <div class="col-md-12 input-main">
                                            <div class="radiobtnlist signupgender">
                                                <table id="ctl00_rbtnlist" border="0">
                                                    <tr>
                                                        <td>
                                                            <input
                                                                id="ctl00_rbtnlist_0"
                                                                type="radio"
                                                                name="gender"
                                                                value="Male"
                                                                checked={userData.gender === "Male"}
                                                                onChange={(e) => handleChange(e, "gender")}
                                                            />
                                                            <label for="ctl00_rbtnlist_0">Male</label>
                                                        </td>
                                                        <td>
                                                            <input
                                                                id="ctl00_rbtnlist_1"
                                                                type="radio"
                                                                name="gender"
                                                                value="Female"
                                                                checked={userData.gender === "Female"}
                                                                onChange={(e) => handleChange(e, "gender")}
                                                            />
                                                            <label for="ctl00_rbtnlist_1">Female</label>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <p className="text-danger">{errors.gender}</p>
                                        </div>

                                        <div class="col-md-12 input-main">

                                        </div>

                                        <div class="hide">

                                        </div>
                                        <div class="col-md-12 input-main">
                                            <div class="floating-box ">
                                                <input type="submit" name="ctl00$btnsignup" value="Update" id="ctl00_btnsignup" class="loginbtn" />
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>








            <div class="modal fade" id="forgetpassword">
                <div class="modal-dialog modal-dialog-centered loginmodalsize">
                    <div class="modal-content">
                        <div class="loginpop">
                            <button type="button" class="close modalclosebtn" data-bs-dismiss="modal">&times;</button>
                            <div class="login-form">
                                <div class="row marginrow">
                                    <div class="col-md-12 input-main">
                                        <h3>Change Your Password</h3>

                                    </div>
                                    <div class="col-md-6 input-main">
                                        <div class="floating-box ">
                                            <input name="ctl00$txtconfirmpassword" type="password" id="ctl00_txtconfirmpassword" class="floating-input" placeholder="Old Password" />

                                            <span id="ctl00_RequiredFieldValidator7" style={{ display: 'none', color: 'red' }}>*</span>

                                        </div>
                                    </div>

                                    <div class="col-md-6 input-main">
                                        <div class="floating-box ">
                                            <input name="#" type="password" id="ctl00_txtconfirmpassword" class="floating-input" placeholder="New Password" />
                                            <div class="showpassbtn"><i id="showpass2" class="fas fa-eye-slash"></i></div>
                                            <span id="ctl00_RequiredFieldValidator7" style={{ display: 'none', color: 'red' }}>*</span>

                                        </div>
                                    </div>



                                    <div class="col-md-12 input-main">
                                        <div class="floating-box ">
                                            <input name="#" type="password" id="ctl00_txtconfirmpassword" class="floating-input" placeholder="Confirm New Password" />
                                            <div class="showpassbtn"><i id="showpass2" class="fas fa-eye-slash"></i></div>
                                            <span id="ctl00_RequiredFieldValidator7" style={{ display: 'none', color: 'red' }}>*</span>

                                        </div>



                                    </div>


                                    <div class="col-md-12 input-main">

                                    </div>

                                    <div class="hide">

                                    </div>
                                    <div class="col-md-12 input-main">
                                        <div class="floating-box ">
                                            <input type="submit" name="ctl00$btnsignup" value="Update" id="ctl00_btnsignup" class="loginbtn" />
                                        </div>
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

export default EditInfo