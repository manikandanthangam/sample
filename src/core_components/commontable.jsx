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

    }

    PaginateListFun(eachPaginationData){
        alert(eachPaginationData);
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
        for (let eachBodyData of this.tableListData) {
            let eachBodyContent = this.tablelistHeader.map((eachHeadData) => {
                if(eachHeadData === "view"){
                    return <td><Link className="tableView" to={this.viewComponent}><i className="fas fa-eye"></i></Link></td>;
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
        tablePaginationBtns.push(<input type="button" className={BtnCommonClass} value="<<" onClick={() => this.PaginateListFun()} />);
        tablePaginationBtns.push(<input type="button" className={BtnCommonClass} value="<" onClick={() => this.PaginateListFun()} />);
        for (let eachPaginationData of tablePaginationData) {
            let BtnAdditionalClass = BtnCommonClass;
            if (eachPaginationData % 2 === 1) {
                BtnAdditionalClass += BtnNormalClass;
            } else {
                BtnAdditionalClass += BtnActiveClass;
            }
            console.log(BtnAdditionalClass);
            tablePaginationBtns.push(<input type="button" className={BtnAdditionalClass} value={eachPaginationData} onClick={() => this.PaginateListFun(eachPaginationData)} />);
        }
        
        tablePaginationBtns.push(<input type="button" className="btn btn-primary pagination-buttons" value=">" onClick={() => this.PaginateListFun()} />);
        tablePaginationBtns.push(<input type="button" className="btn btn-primary pagination-buttons" value=">>" onClick={() => this.PaginateListFun()} />);

        console.log(this.tableListData);
        console.log(tableBodyData);
        return (
            <div className="TableContainer" id="TableContainer">
                <div className="row pagination-row">
                    <div className="col-md-12 pagination-cols">
                        {tablePaginationBtns}
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