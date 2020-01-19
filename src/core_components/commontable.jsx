import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CommonTable extends Component {
    tableListData = [];
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.tablelistHeader = this.props.header;
        this.tableListData = this.props.data;
        this.viewComponent = this.props.view;
        // console.log(this.tableListData);
        this.state = {
            page: 1,
            limit: 10
        };
    }

    PaginateListFun(pageValue){
        this.setState({ page: pageValue });
    }

    render() {
        this.tableListData = this.props.data;

        console.log(this.props.data);
        let tableHeader = [];
        tableHeader = this.tablelistHeader.map((eachElement) => {
            // console.log(eachElement);
            return <th>{eachElement}</th>;
        });

        // let tableBody = [];
        // for (let eachData of this.tableListData) {
        //     let eachRowData = <tr>
        //         <td>{eachData.postId}</td>
        //         <td>{eachData.id}</td>
        //         <td>{eachData.name}</td>
        //         <td>{eachData.email}</td>
        //         <td>{eachData.body}</td>
        //     </tr>
        //     tableBody.push(eachRowData);
        // }
        // console.log(tableBody);
        // tableBody = this.tableListData.map((eachElement) => {
        // console.log(eachElement.id);
        // return false;
        // console.log(eachElement.header);
        // return <tr>
        //     <td>{eachElement.postId}</td>
        //     <td>{eachElement.id}</td>
        //     <td>{eachElement.name}</td>
        //     <td>{eachElement.email}</td>
        //     <td>{eachElement.body}</td>
        // </tr>
        // });
        let tableBodyData = [];
        let tablePageData = [];
        let start = (this.state.page-1) * this.state.limit;
        start = (start < 0) ? 0 : start;
        let end   = start + this.state.limit;
        // console.log(start);
        // console.log(end);
        // console.log(this.state.page);
        // console.log("start"+start);
        // console.log("end"+end);
        tablePageData   =   this.tableListData.slice(start, end);
        console.log(tablePageData);
        let firstPage    =   0;
        let prevPage    =   this.state.page-1;
        let nextPage    =   this.state.page+1;
        let lastPage    =   this.tableListData.length/this.state.limit;
        for (let eachBodyData of tablePageData) {
            let eachBodyContent = this.tablelistHeader.map((eachHeadData) => {
                let eachId = eachBodyData["_id"]
                if(eachHeadData === "view"){
                    return <td><Link className="tableView" to={this.viewComponent+"/"+eachId}><i className="fas fa-eye"></i></Link></td>;
                } else {
                    return <td>{eachBodyData[eachHeadData]}</td>;
                }
                
            });
            tableBodyData.push(<tr>{eachBodyContent}</tr>);
        }

        let tablePaginationData = [1, 2, 3, 4, 5, 6];
        let tablePaginationBtns = [];
        let BtnCommonClass = "btn btn-primary pagination-buttons ";
        let BtnNormalClass = "btn-normal";
        let BtnActiveClass = "btn-active";
        tablePaginationBtns.push(<input type="button" className={BtnCommonClass} value="<<" onClick={() => this.PaginateListFun(firstPage)} />);
        tablePaginationBtns.push(<input type="button" className={BtnCommonClass} value="<" onClick={() => this.PaginateListFun(prevPage)} />);
        for (let eachPaginationData of tablePaginationData) {
            let BtnAdditionalClass = BtnCommonClass;
            if (eachPaginationData === this.state.page) {
                BtnAdditionalClass += BtnActiveClass;
            } else {
                BtnAdditionalClass += BtnNormalClass;
            }
            // console.log(BtnAdditionalClass);
            tablePaginationBtns.push(<input type="button" className={BtnAdditionalClass} value={eachPaginationData} onClick={() => this.PaginateListFun(eachPaginationData)} />);
        }
        
        tablePaginationBtns.push(<input type="button" className="btn btn-primary pagination-buttons" value=">" onClick={() => this.PaginateListFun(nextPage)} />);
        tablePaginationBtns.push(<input type="button" className="btn btn-primary pagination-buttons" value=">>" onClick={() => this.PaginateListFun(lastPage)} />);

        console.log(this.tableListData);
        // console.log(tableBodyData);
        return (
            <div className="TableContainer" id="TableContainer">
                <div className="row pagination-row">
                    <div className="col-md-8 pagination-cols">
                        {tablePaginationBtns}
                    </div>
                    <div className="col-md-8 pagination-cols">
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