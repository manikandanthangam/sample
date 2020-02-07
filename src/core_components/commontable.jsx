import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import XLSX from 'xlsx';
import swal from 'sweetalert';
import axios from 'axios';

class CommonTable extends Component {
    tableListData = [];
    tableXLSData = {};
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.tablelistHeader = this.props.header;
        this.tableListData = this.props.data;
        this.viewComponent = this.props.view;
        // console.log(this.tableListData);
        // let listStatusValue = {};
        // let listDataValue = {};
        // let dataXLSX = [];
        // let tableHeader = [];
        // tableHeader = this.tablelistHeader.map((eachElement) => {
        //     return <th key={eachElement}>{eachElement}</th>;
        // });

        // let dataList = Object.keys(this.tableListData);
        // for (let keyLoop = 0; keyLoop < dataList.length; keyLoop++) {
        //     let eachData = this.tablelistHeader[keyLoop];
        //     let tableHeader = [];
        //     tableHeader = this.tablelistHeader.map((eachElement) => {
        //         return eachrowData = {eachElement : eachData[eachElement]};
        //     });
        //     dataXLSX.push({ eachrowData });
        // }


        this.state = {
            page: 1,
            limit: 10,
            id: '',
            isDataReceived: false
        };
        // console.log("state status: " + JSON.stringify(this.state));
        this.onChange = this.onChange.bind(this);
        this.saveComment = this.saveComment.bind(this);
    }

    onChange(event) {
        console.log(event.target.id);
        console.log(event.target.value);
    }

    PaginateListFun(pageValue) {
        this.setState({ page: pageValue });
    }

    exportAsXLSX() {
        swal("Export");
        var worksheet = XLSX.utils.json_to_sheet(this.tableListData);
        var new_workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");
        /* save to file */
        XLSX.writeFile(new_workbook, 'SheetJS.xlsx');
    }

    editComment(eventData) {
        // console.log(eventData.target.id);
        // console.log(eventData);
        // console.log(eventData.target);
        let dataId = String(eventData.target.id).split('_')[1];
        // let elementId = String(eventData.target.id);
        // let headData = document.getElementById(elementId).getAttribute("data");
        // console.log(dataId);
        // Split _
        // eachHeadData enable _ id enable
        this.setState({ id: dataId });

    }
    saveComment(eventData) {
        // let autoId = this.state.id;
        let autoId = String(eventData.target.id).split('_')[1];
        // console.log(autoId);
        let updatedData = {};
        updatedData["_id"] = autoId;
        this.tablelistHeader.map((eachElement) => {
            if (eachElement !== "view") {
                updatedData[eachElement] = document.getElementById(eachElement + "_" + autoId).value;
            }
        });
        // console.log(updatedData);
        axios.put("http://localhost:3001/comments/update", updatedData).then(
            (response) => {
                if (response.error) {
                    swal("Update failed!", response.error, "warning");
                } else {
                    let data = { isDataReceived: true, id: '' };
                    swal("Success", "Comment Updated Successfully!", "success");
                    this.setState(data);
                }
            }
        ).catch((error) => { console.log(error); }
        ).finally(() => {// console.log("completed");
        });

    }
    deleteComment(autoId) {
        console.log(autoId);
    }

    render() {
        this.tableListData = this.props.data;
        let tableHeader = [];
        tableHeader = this.tablelistHeader.map((eachElement) => {
            return <th key={eachElement}>{eachElement}</th>;
        });

        let tableBodyData = [];
        let tablePageData = [];
        let start = (this.state.page - 1) * this.state.limit;
        start = (start < 0) ? 0 : start;
        let end = start + this.state.limit;
        tablePageData = this.tableListData.slice(start, end);
        let firstPage = 0;
        let prevPage = this.state.page - 1;
        let nextPage = this.state.page + 1;
        let lastPage = this.tableListData.length / this.state.limit;
        for (let eachBodyData of tablePageData) {
            let eachBodyContent = this.tablelistHeader.map((eachHeadData) => {
                let eachId = eachBodyData["_id"];
                if (eachHeadData === "view") {
                    return <td key={eachId + 'eachHeadData'}>
                        <Link className="tableView" to={this.viewComponent + "/" + eachId}><i className="fas fa-eye"></i></Link>
                        <button className="commentEdit" id={"edit_" + eachId} data={eachHeadData} onClick={(event) => this.editComment(event)}><i id={'editI_' + eachId} data={eachHeadData} className="fas fa-edit"></i></button>
                        <button className="commentSave" id={"save_" + eachId} onClick={(event) => this.saveComment(event)}><i id={"saveI_" + eachId} className="fas fa-save"></i></button>
                    </td>;
                } else {
                    let uniqueKeyId = eachHeadData + "_" + eachId;
                    return <td key={eachId + eachHeadData}>
                        {/* <div id={"lbl_" + eachHeadData + "_" + eachId}>{eachBodyData[eachHeadData]}</div> */}
                        <div id={"input_" + uniqueKeyId} >
                            <input type='text' disabled={this.state.id !== eachId} name={uniqueKeyId} id={uniqueKeyId} defaultValue={eachBodyData[eachHeadData]} />
                        </div>
                    </td>;
                }

            });
            tableBodyData.push(<tr key={eachBodyData["_id"]}>{eachBodyContent}</tr>);
        }

        let tablePaginationData = [1, 2, 3, 4, 5, 6];
        let tablePaginationBtns = [];
        let BtnCommonClass = "btn btn-primary pagination-buttons ";
        let BtnNormalClass = "btn-normal";
        let BtnActiveClass = "btn-active";
        tablePaginationBtns.push(<input key={'<<'} type="button" className={BtnCommonClass} value="<<" onClick={() => this.PaginateListFun(firstPage)} />);
        tablePaginationBtns.push(<input key={'<'} type="button" className={BtnCommonClass} value="<" onClick={() => this.PaginateListFun(prevPage)} />);
        for (let eachPaginationData of tablePaginationData) {
            let BtnAdditionalClass = BtnCommonClass;
            if (eachPaginationData === this.state.page) {
                BtnAdditionalClass += BtnActiveClass;
            } else {
                BtnAdditionalClass += BtnNormalClass;
            }
            tablePaginationBtns.push(<input key={eachPaginationData} type="button" className={BtnAdditionalClass} value={eachPaginationData} onClick={() => this.PaginateListFun(eachPaginationData)} />);
        }

        tablePaginationBtns.push(<input key={'>'} type="button" className="btn btn-primary pagination-buttons" value=">" onClick={() => this.PaginateListFun(nextPage)} />);
        tablePaginationBtns.push(<input key={'>>'} type="button" className="btn btn-primary pagination-buttons" value=">>" onClick={() => this.PaginateListFun(lastPage)} />);

        return (
            <div className="TableContainer" id="TableContainer">
                <div className="row pagination-row">
                    <div className="col-md-8 pagination-cols">
                        {tablePaginationBtns}
                    </div>
                    <div className="col-md-2 pagination-cols">
                        <select className="">
                            <option value="">All</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div className="col-md-2 Export-cols">
                        <input type="button" name="exportBtn" id="exportBtn" className="btn btn-primary exportBtn" value="Export as XLSX" onClick={() => this.exportAsXLSX()} />
                    </div>
                </div>

                <table className="table table-bordered tablelist">
                    <thead>
                        <tr>
                            {tableHeader}
                        </tr>
                    </thead>
                    <tbody>
                        {tableBodyData}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CommonTable;