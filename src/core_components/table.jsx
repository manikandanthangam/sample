import React, { Component } from 'react';

class Table extends Component {
    commentsListData = [];
    constructor(props) {
        super(props);

        this.commentsListData = this.props.data;
        // console.log(this.commentsListData);

    }

    render() {
        let commentListArr = [];
        for (let eachData of this.commentsListData) {
            let eachRowData = <tr>
                <td>{eachData.postId}</td>
                <td>{eachData.id}</td>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>{eachData.body}</td>
            </tr>
            commentListArr.push(eachRowData);
        }
        // console.log(commentListArr);


        return (
            <div className="TableContainer" id="TableContainer">
                <table className="table table-bordered tablelist">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">PostId</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commentListArr}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;