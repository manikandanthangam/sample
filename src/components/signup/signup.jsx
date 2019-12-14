import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
    showThisAlert(){
        alert('Show This Alert');
    }
    showArrowFunAlert(){
        alert('Show Arrow Function Alert');
    }

    SignupSubmitFun(){
        // /*var FirstName   = $.trim($("#first_name").val());
        // var LastName    = $.trim($("#last_name").val());
        // var Email       = $.trim($("#email").val());
        // var Phone       = $.trim($("#phone_number").val());
        // var Password    = $.trim($("#password").val());
        // var ConfirmPassword = $.trim($("#confirm_password").val());
    
        
        // $(".row .feedback").removeClass("alert-danger");
        // $(".row .feedback").text("").hide();
        // if(FirstName == ""){
        //     $("#first_name").parent().find(".feedback").text("First name is required").show();
        //     $("#first_name").parent().find(".feedback").addClass("alert-danger");
        //     $("#first_name").focus();
        //     return false;
        // } else if(LastName == ""){
        //     $("#last_name").parent().find(".feedback").text("Last name is required").show();
        //     $("#last_name").parent().find(".feedback").addClass("alert-danger");
        //     $("#last_name").focus();
        //     return false;
        // } else if(Email == ""){
        //     $("#email").parent().find(".feedback").text("Email is required").show();
        //     $("#email").parent().find(".feedback").addClass("alert-danger");
        //     $("#email").focus();
        //     return false;
        // } else if(!isEmail(Email)){
        //     $("#email").parent().find(".feedback").text("Email is invalid").show();
        //     $("#email").parent().find(".feedback").addClass("alert-danger");
        //     $("#email").focus();
        //     return false;
        // } else if(Phone == ""){
        //     $("#phone_number").parent().find(".feedback").text("Phone is required").show();
        //     $("#phone_number").parent().find(".feedback").addClass("alert-danger");
        //     $("#phone_number").focus();
        //     return false;
        // } else if(Password == ""){
        //     $("#password").parent().find(".feedback").text("Password is required").show();
        //     $("#password").parent().find(".feedback").addClass("alert-danger");
        //     $("#password").focus();
        //     return false;
        // }  else if(ConfirmPassword == ""){
        //     $("#confirm_password").parent().find(".feedback").text("Confirm password is required").show();
        //     $("#confirm_password").parent().find(".feedback").addClass("alert-danger");
        //     $("#confirm_password").focus();
        //     return false;
        // }  else if(Password != ConfirmPassword){
        //     $("#confirm_password").parent().find(".feedback").text("Password and Confirm password should be same").show();
        //     $("#confirm_password").parent().find(".feedback").addClass("alert-danger");
        //     $("#confirm_password").focus();
        //     return false;
        // } else {
        //     // #("#SignupForm").submit();
        // }
        // */
    }
    
    // isEmail(email) {
    //   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //   return regex.test(email);
    // }

    render() {
        return(
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
                        <label className="" htmlhtmlFor="first_name"><i className="fas fa-id-badge"></i> First name</label>
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
                        <input type="button" name="SignupSubmitBtn" id="SignupSubmitBtn" className="btn btn-primary" value="Submit" onClick={()=>this.SignupSubmitFun()} />
                    </div>
                </div>
            </div>
        </form>
    </div>
        );
    }
}

export default Signup;
