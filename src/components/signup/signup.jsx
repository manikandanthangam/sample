import React, { Component } from 'react';
import './signup.css';
import swal from 'sweetalert';
import axios from 'axios';

class Signup extends Component {
    showThisAlert() {
        alert('Show This Alert');
    }
    showArrowFunAlert() {
        alert('Show Arrow Function Alert');
    }

    SignupSubmitFun() {
        let first_name = document.getElementById("first_name").value;
        let last_name = document.getElementById("last_name").value;
        let email = document.getElementById("email").value;
        let phone_number = document.getElementById("phone_number").value;
        let password = document.getElementById("password").value;
        let confirm_password = document.getElementById("confirm_password").value;

        if (first_name === "") {
            swal("Warning", "Enter first name", "warning");
        } else if (last_name === "") {
            swal("Warning", "Enter last name", "warning");
        } else if (email === "") {
            swal("Warning", "Enter email", "warning");
        } else if (this.isEmail(email) === false) {
            swal("Warning", "Enter valid email", "warning");
        } else if (phone_number === "") {
            swal("Warning", "Enter phone number", "warning");
        } else if (password === "") {
            swal("Warning", "Enter password", "warning");
        } else if (confirm_password === "") {
            swal("Warning", "Enter confirm password", "warning");
        } else if (password !== confirm_password) {
            swal("Warning", "Password and Confirm password should be same", "warning");
        } else {
            axios.post("http://localhost:3001/users/checkexist", { email: email }).then(
                (response) => {
                    if (response.data.Status === 1) {
                        swal("Warning", "Email already created, please try with different email", "warning");
                    } else {
                        let userInputJSON = { first_name: first_name, last_name: last_name, email: email, password: password, phone_number: phone_number };                        
                        this.createUser(userInputJSON);
                    }
                }
            ).catch((error) => { console.log(error); }
            ).finally(() => {// console.log("completed");
            });


        }
    }

    createUser(userInputData) {
        axios.post("http://localhost:3001/users/create", userInputData).then(
            (response) => {
                if (response.status) {
                    swal("Success", "User created successfully!", "warning");
                    console.log(response);
                } else {
                    swal("Failed - " + response.status, "User creation failed!", "failed");

                }
            }
        ).catch((error) => { console.log(error); }
        ).finally(() => {// console.log("completed");
        });
    }

    isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    render() {
        return (
            <div className="container" id="SignupContainer">
                <form className="FormContainer" id="SignupForm" type="POST" action="">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group"><h3 className="form-title">Signup</h3></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="" htmlFor="first_name"><i className="fas fa-id-badge"></i> First name</label>
                                <input type="text" name="first_name" id="first_name" className="form-control" />
                                <div className="feedback"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="" htmlFor="last_name"><i className="fas fa-id-badge"></i> Last name</label>
                                <input type="text" name="last_name" id="last_name" className="form-control" />
                                <div className="feedback"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="" htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
                                <input type="text" name="email" id="email" className="form-control" />
                                <div className="feedback"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="" htmlFor="phone_number"><i className="fas fa-mobile-alt"></i> Phone number</label>
                                <input type="telephone" name="phone_number" id="phone_number" className="form-control" />
                                <div className="feedback"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="" htmlFor="password"><i className="fas fa-key"></i> Password</label>
                                <input type="password" name="password" id="password" className="form-control" />
                                <div className="feedback"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="" htmlFor="confirm_password"><i className="fas fa-key"></i> Confirm password</label>
                                <input type="password" name="confirm_password" id="confirm_password" className="form-control" />
                                <div className="feedback"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group SubmitBtnContainer">
                                <input type="button" name="SignupSubmitBtn" id="SignupSubmitBtn" className="btn btn-primary" value="Submit" onClick={() => this.SignupSubmitFun()} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;
