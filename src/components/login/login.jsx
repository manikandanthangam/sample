import React from 'react';
import './login.css';
import swal from 'sweetalert';
import axios from 'axios';

class Login extends React.Component {
    SubmitLoginFun() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === "") {
            swal("Warning", "Enter email", "warning");
        } else if (this.isEmail(email) === false) {
            swal("Warning", "Enter valid email", "warning");
        } else if (password === "") {
            swal("Warning", "Enter password", "warning");
        } else {
            axios.post("http://localhost:3001/users/checkexist", { email: email }).then(
                (response) => {
                    if (response.data.Status) {
                        let userInputJSON = { email: email, password: password };
                        this.getUser(userInputJSON);
                    } else {
                        swal("Warning", "Email is invalid", "warning");
                    }
                }
            ).catch((error) => { console.log(error); }
            ).finally(() => {// console.log("completed");
            });
        }
    }

    getUser(userInputData) {
        axios.post("http://localhost:3001/users/checkexist", userInputData).then(
            (response) => {
                if (response.data.Status) {
                    swal("Success", "User data fetched successfully", "success");
                    console.log(response.data);
                } else {
                    swal("Warning", "Incorrect password", "warning");
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
            <div className="container" id="LoginContainer">
                <form className="FormContainer" id="LoginForm" type="POST" action="">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group"><h3 className="form-title">Sign In</h3></div>
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
                                <label className="" htmlFor="password"><i className="fas fa-key"></i> Password</label>
                                <input type="password" name="password" id="password" className="form-control" />
                                <div className="feedback"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group SubmitBtnContainer">
                                <input type="button" name="LoginSubmitBtn" id="LoginSubmitBtn" className="btn btn-primary" value="Submit" onClick={() => this.SubmitLoginFun()} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;