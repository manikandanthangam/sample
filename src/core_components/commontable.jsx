import React, { Component } from 'react';

class CommonTable extends Component {
    tableListData = [];
    constructor(props) {
        super(props);
        console.log(this.props);
        this.tablelistHeader = this.props.header;
        this.tableListData = this.props.data;
        // console.log(this.tableListData);

    }

    render() {
        this.tableListData = this.props.data;

        console.log(this.props.data);
        let tableHeader = [];
        tableHeader = this.tablelistHeader.map((eachElement) => {
            // console.log(eachElement);
            return <th>{eachElement}</th>;
        });

        let tableBody = [];
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
            let eachBodyContent = this.tablelistHeader.map((eachHeadData)=> {
                return <td>{eachBodyData[eachHeadData]}</td>;
            });
            tableBodyData.push(<tr>{eachBodyContent}</tr>);       
        }

        console.log(this.tableListData);
        console.log(tableBodyData);
        return (
            <div className="TableContainer" id="TableContainer">
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