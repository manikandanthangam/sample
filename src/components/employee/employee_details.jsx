import React, { Component } from 'react';
import axios from 'axios';
import './employee.css';
import {Link} from 'react-router-dom';

class EmployeeDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDataReceived:false
        }
    }

    employeeGetData = {
        "name": "Aurora",
        "age": 53,
        "email": "ante.blandit@disparturient.ca",
        "date of joining": "10/06/2019",
        "phone number": "1628101902299",
        "street": "493 Iaculis Rd.",
        "city": "Lewiston",
        "zip": "42591-180",
        "region": "Maine",
        "country": "Sudan",
        "info": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
        "employeeid": 101
    };
    
    EditProfile() {
        // alert("edit");
        let inputData = this.employeeGetData;
        axios.put("http://localhost:3001/employee/update", inputData).then(
            (response) => {
                console.log(response);
                let resultStatus = response.status;
                let resultData  = response.data;
                if(resultStatus === "success"){
                    alert(resultStatus+" -> "+resultData);
                }
            }
        )
        .catch(
            (error) => {
                console.log(error);
        }
        ).finally(
            () => {
                // console.log("completed");
            }

        );
    }

    DeleteProfile() {
        axios.delete("http://localhost:3001/employee/delete/"+ this.employeeGetData._id).then(
            (response) => {
                console.log(response);
                let resultStatus = response.status;
                let resultID = response.id;
                if(resultStatus === "success"){
                    alert(resultStatus+" -> "+resultID);
                }
            }
        )
        .catch(
            (error) => {
                console.log(error);
        }
        ).finally(
            () => {
                // console.log("completed");
            }

        );
    }

    render() {
        // employeeGetData = [{
        //     "name": "Aurora",
        //     "age": 53,
        //     "email": "ante.blandit@disparturient.ca",
        //     "date of joining": "10/06/2019",
        //     "phone number": "1628101902299",
        //     "street": "493 Iaculis Rd.",
        //     "city": "Lewiston",
        //     "zip": "42591-180",
        //     "region": "Maine",
        //     "country": "Sudan",
        //     "info": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
        //     "employeeid": 101
        // }];
        let employeeData = this.employeeGetData;
        // let employeeLabels = ['_id', 'name', 'age', 'email', 'phone number', 'info', 'date of joining', 'street', 'city', 'country', 'region', 'zip'];
        let employeeLabels = Object.keys(employeeData);
        let viewProfileData = [];
        viewProfileData = employeeLabels.map((eachLabel) => {
            // console.log(employeeData["name"]);
            return <tr>
                <td className="profileLabel">{eachLabel}</td>
                <td className="profileData">{employeeData[eachLabel]}</td>
            </tr>
        });

        

        return (
            <div className="container profileview-container">
                
                <div className="row profileview-row">
                <div className="profileview-backlink">
                    <Link to={'/EmployeeList'} className="btn btn-primary btn-profileview"><i className="fas fa-hand-point-left"></i><i className="fa fa-hand-o-left"></i> Back</Link>
                    <span className="delete-profile" onClick={() => this.DeleteProfile()}><i className="fas fa-trash-alt"></i></span>
                    <span className="edit-profile" onClick={() => this.EditProfile()}><i className="fas fa-user-edit"></i></span>
                </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 profileview-img">
                        <img className="img-responsive" src="../assets/profile.jpg" alt='profile' title='profile' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 profileview-content">
                        <table className="table table-bordered tablelist">
                            <tbody>
                                {viewProfileData}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default EmployeeDetails;