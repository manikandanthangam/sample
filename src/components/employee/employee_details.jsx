import React, { Component } from 'react';
import './employee.css';
import {Link} from 'react-router-dom';

class EmployeeDetails extends Component {
    render() {
        let employeeResultData = [{
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
        }];
        let employeeData = employeeResultData[0];
        let employeeLabels = ['_id', 'name', 'age', 'email', 'phone number', 'info', 'date of joining', 'street', 'city', 'country', 'region', 'zip'];
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
                    <Link to={'/EmployeeList'} className="btn btn-primary btn-profileview"><i className="fa fa-hand-o-left"></i> Back</Link>
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