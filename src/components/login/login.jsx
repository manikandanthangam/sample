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
                    if (response.data.Status > 0) {
                        let userInputJSON = { email: email, password: password };
                        console.log(response);
                        let token = response.data;
                        console.log(token);
                        sessionStorage.setItem('token', token);
                        this.getUser(userInputJSON);
                        // this.props.history('/');


                    } else {
                        swal("Warning", "Email is invalid", "warning");
                        this.props.history('/');
                    }
                }
            ).catch((error) => { console.log(error); }
            ).finally(() => {// console.log("completed");
            });
        }
    }

    userLoggedIn() {
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            const token = sessionStorage.getItem('token') | '';
            config.headers.Authorization = token;

            return config;
        });
    }

    getUser(userInputData) {
        axios.post("http://localhost:3001/users/checkexist", userInputData).then(
            (response) => {
                console.log(response);
                if (response.data.Status > 0) {
                    this.props.history.push('/');
                    let token = response.data.token;
                    console.log(token);
                    sessionStorage.setItem('token', token);
                    this.userLoggedIn();

                    swal("Success", "User data fetched successfully", "success");
                } else {
                    swal("Warning", "Incorrect email or password", "warning");
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
                                <input type="text" name="email" id="email" className="form-control" value={'testemail1@test.com'} />
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