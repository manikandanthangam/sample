import React, { Component } from 'react';
import axios from 'axios';
import './employee.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class EmployeeDetails extends Component {
    detailId = "";
    employeeGetData = [];
    constructor(props) {
        super(props);
        let editableStatusValues = { _id: false, name: false, age: false, email: false, "date of joining": false, "phone number": false, street: false, city: false, zip: false, region: false, country: false, info: false, employeeid: false }
        let editableDataValues = { _id: "id", name: "name", age: "", email: "", "date of joining": "", "phone number": "", street: "", city: "", zip: "", region: "", country: "", info: "", employeeid: "" }

        this.state = {
            isDataReceived: false, editableStatus: editableStatusValues, editableData: editableDataValues
        }
        this.detailId = this.props.match.params.id;
        this.getEmployee();
        // this.changeData = this.changeData.bind(this);
    }

    // employeeGetData = {
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
    // };

    getEmployee() {
        axios.get("http://localhost:3001/employee/getone/" + this.detailId).then(
            (response) => {
                console.log(response);
                if (response.data !== null) {
                    this.employeeGetData = response.data.data;
                    this.setState({ isDataReceived: true, editableData: this.employeeGetData });
                }
            }
        )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
            .finally(
                () => {
                    console.log("completed");
                }
            );
    }

    EditProfile(editLabel) {
        // let value = editLabel.eachLabel;
        // let data = { isDataReceived: true, editableStatus: { [value]: true } };
        let currentStates = this.state.editableStatus;
        currentStates[editLabel] = true;
        let data = { isDataReceived: true, editableStatus: currentStates };
        this.setState(data);
    }

    changeData(eventData) {
        console.log(eventData.target.name);
        console.log(eventData.target.value);
        let inputName = eventData.target.name;
        let inputValue = eventData.target.value;
        let currentData = this.state.editableData;
        currentData[inputName] = inputValue;
        let data = { isDataReceived: true, editableData: currentData };
        this.setState(data);
    }

    UpdateProfile() {
        let updateProfileData = [];
        let profileInputJSON = {}

        let employeeLabelsList = Object.keys(this.employeeGetData);
        for (let keyLoop = 0; keyLoop <= employeeLabelsList.length; keyLoop++) {
            let eachLabel = employeeLabelsList[keyLoop];
            if (eachLabel !== "_id" && eachLabel !== "__v") {
                // profileInputJSON[eachLabel] = document.getElementById(eachLabel);
                // console.log(document.getElementById(eachLabel).value);
            }
        }

        // let viewProfileData = [];
        // viewProfileData = employeeLabelsList.map((eachLabel) => {
        //     return profileInputJSON[eachLabel] = document.getElementById(eachLabel);
        // });
        // console.log(viewProfileData);

        updateProfileData.push(profileInputJSON);
        console.log(updateProfileData);
        console.log(employeeLabelsList);

        // alert("edit");
        let inputData = this.employeeGetData;
        axios.put("http://localhost:3001/employee/update", inputData).then(
            (response) => {
                console.log(response);
                let resultStatus = response.status;
                let resultData = response.data;
                if (resultStatus === "success") {
                    alert(resultStatus + " -> " + resultData);
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
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this employee!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((UserConfirmation) => {
                if (UserConfirmation) {
                    this.DeleteProfileConfirm();
                } else {
                    //   swal("Your imaginary file is safe!");
                }
            });
    }

    DeleteProfileConfirm() {
        axios.delete("http://localhost:3001/employee/delete/" + this.employeeGetData._id).then(
            (response) => {
                console.log(response);
                let resultError = response.data.error;
                if (resultError === null) {
                    swal("Deleted successfully!", "There is " + response.data.data.deletedCount + " record deleted", "success");
                    document.location.href = "http://localhost:3000/EmployeeList";
                } else {
                    swal("Delete failed!", response.error, "warning");
                }
            })
            .catch((error) => { console.log(error); })
            .finally(() => { // console.log("completed"); 
            });
    }

    render() {
        // console.log(this.state);
        let employeeData = this.state.editableData;
        let editableStatus = this.state.editableStatus;
        // let employeeLabels = ['_id', 'name', 'age', 'email', 'phone number', 'info', 'date of joining', 'street', 'city', 'country', 'region', 'zip'];
        let employeeLabels = Object.keys(employeeData);
        let viewProfileData = [];

        viewProfileData = employeeLabels.map((eachLabel) => {
            let eachRowData = "";
            if (eachLabel !== "__v") {
                // let labelCls = "labelEditable";
                let valueCls = "valueEditable";
                let iconCls = "fas fa-edit valueEditableIcon";
                if (eachLabel === "_id") {
                    // labelCls = "labelNonEditable";
                    valueCls = "valueNonEditable";
                    iconCls = "fas fa-edit valueNonEditableIcon";
                }
                let disabledInput = "";
                if (editableStatus[eachLabel] === false) {
                    disabledInput = "disabled";
                }

                eachRowData = <tr>
                    <td className="profileLabel">{eachLabel}</td>
                    <td className="profileData">
                        {/* <div className={labelCls}><i className="fas fa-edit" onClick={()=> this.EditProfile({eachLabel})}></i> {employeeData[eachLabel]} </div> */}
                        <div className={valueCls}><input type="text" name={eachLabel} id={eachLabel} className='profileInputData' value={employeeData[eachLabel]} disabled={disabledInput} onChange={(event) => this.changeData(event)} /> <i className={iconCls} onClick={() => this.EditProfile(eachLabel)}></i></div>
                    </td>
                </tr>
            }
            return eachRowData;
        });

        return (
            <div className="container profileview-container">
                <form name="profileUpdate" id="profileUpdate" action="">
                    <div className="row profileview-row">
                        <div className="profileview-backlink">
                            <Link to={'/EmployeeList'} className="btn btn-primary btn-profileview"><i className="fas fa-hand-point-left"></i><i className="fa fa-hand-o-left"></i> Back</Link>
                            <span className="delete-profile" onClick={() => this.DeleteProfile()}><i className="fas fa-trash-alt"></i></span>
                            <span className="edit-profile" onClick={() => this.UpdateProfile()}><i className="fas fa-save"></i></span>
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
                </form>
            </div>
        );
    }
}

export default EmployeeDetails;