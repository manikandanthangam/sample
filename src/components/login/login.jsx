import React from 'react';
import './login.css';

class Login extends React.Component {
    /*SubmitLoginFun() {
        var LoginEmail = $.trim($("#email").val());
        var LoginPassword = $.trim($("#password").val());
        $(".row .feedback").removeClass("alert-danger");
        $(".row .feedback").text("").hide();
        if(LoginEmail == ""){
            $("#email").parent().find(".feedback").text("Email is required").show();
            $("#email").parent().find(".feedback").addClass("alert-danger");
            $("#email").focus();
            return false;
        } else if(!isEmail(LoginEmail)){
            $("#email").parent().find(".feedback").text("Email is invalid").show();
            $("#email").parent().find(".feedback").addClass("alert-danger");
            $("#email").focus();
            return false;
        } else if(LoginPassword == ""){
            $("#password").parent().find(".feedback").text("Password is required").show();
            $("#password").parent().find(".feedback").addClass("alert-danger");
            $("#password").focus();
            return false;
        } else {
            // #("#LoginForm").submit();
        }
    
    }
    
    isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }*/

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