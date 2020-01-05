import React, { Component } from 'react';
import axios from 'axios';
import './employee.css';
import CommonTable from '../../core_components/commontable';
import { Link } from 'react-router-dom';

class EmployeeList extends Component {
    listData = [];
    headerData = ['_id', 'name', 'age', 'email', 'phone number', 'info', 'date of joining', 'street', 'city', 'country', 'region', 'zip'];

    constructor(props) {
        super(props);

        this.state = {
            isDataReceived: false,
        }

        axios.get("http://localhost:3001/employee").then(
            (response) => {

                // console.log(response);
                let resultdata = response.data.data;
                let resultcount = response.data.count;
                if (resultdata && resultcount > 0) {
                    this.listData = resultdata;
                    this.setState({ isDataReceived: true });
                }
            }
        )
            .catch(function (error) {
                console.log(error);
            }
            )
            .finally(function () {
                //always it will executed
            }
            )
    }

    render() {

        let tableviewData = [];
        for (let eachviewData of this.listData) {
            tableviewData.push(<div className="col-12 col-sm-6 col-md-6 col-lg-3 profile-container">
                <div className="profile-content">
                    <div className="profile-data profile-img"><img className="img-responsive" src="../assets/profile.jpg" alt='profile' title='profile' /></div>
                    <div className="profile-data profile-name">{eachviewData["name"]}</div>
                    <div className="profile-data profile-id">{eachviewData["employeeid"]}</div>
                    <div className="profile-data profile-view">
                        <Link to={'/EmployeeDetails'} className="btn btn-primary btn-profileview">View</Link>
                    </div>
                </div>
            </div>);
        }

        return (
            <div className="container" id="ListViewContainer">
                <div className="row">
                    {tableviewData}
                    {/* <div className="col-12 col-sm-6 col-md-6 col-lg-3 profile-container">
                        <div className="profile-data profile-img"><img src="../assets/profile.jpg" alt='profile' title='profile' /></div>
                        <div className="profile-data profile-name">Employee name</div>
                        <div className="profile-data profile-view">
                            <input type="button" className="btn btn-primary btn-profileview" value="View" />
                        </div>
                    </div> */}
                </div>

                <div className="row employeetable">
                    <CommonTable data={this.listData} header={this.headerData}></CommonTable>
                </div>
            </div>
        );
    }

}

export default EmployeeList;
