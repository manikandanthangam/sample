import React, { Component } from 'react';
import axios from 'axios';
import './employee.css';
import CommonTable from '../../core_components/commontable';

class EmployeeList extends Component {
    listData = [];
    headerData = ['name', 'age', 'email', 'phone number', 'info', 'date of joining', 'street', 'city', 'country', 'region', 'zip']

    constructor(props){
        super(props);

        this.state = {
            isDataReceived : false,
        }

        axios.get("http://localhost:3001/employee").then(
            (response) => {
                // console.log(response);
                let resultdata = response.data.data;
                let resultcount = response.data.count;
                if(resultdata && resultcount > 0){
                    this.listData = resultdata;
                    this.setState({isDataReceived : true});
                }
            }
        )
        .catch( function(error){
            console.log(error);
        }
        )
        .finally( function(){
            //always it will executed
        }
        )


    }

    render() {
        return (
            <div className="container" id="ListContainer">
                <div className="row">
                    <CommonTable data={this.listData} header={this.headerData}></CommonTable>
                </div>
            </div>
        );
    }

}

export default EmployeeList;
