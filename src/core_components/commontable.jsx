import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import XLSX from 'xlsx';
import swal from 'sweetalert';

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


        this.state = { page: 1, limit: 10 };
        // console.log("state status: " + JSON.stringify(this.state));
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

                    </td>;
                } else {
                    let uniqueKeyId = "value_"+eachHeadData+"_"+eachId;
                    return <td key={eachId + eachHeadData}>
                        <div id={"lbl_" + eachHeadData + "_" + eachId}>{eachBodyData[eachHeadData]}</div>
                        <div id={uniqueKeyId}>
                            <input type='text' name={uniqueKeyId} id={uniqueKeyId} value={eachBodyData[eachHeadData]} />
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