import React, { Component } from 'react';
import './comments.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class commentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataReceived: false,
        }
    }

    commentGetData = {
        "_id": "5e0843ca80deef85c0a8ef18",
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }

    EditComment() {
        let inputData = this.commentGetData;
        axios.put('http://localhost:3001/comments/update', inputData).then(
            (response) => {
                let resultStatus = response.status;
                if (resultStatus === "success") {
                    console.log(response);
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
                    // console.log("finished");
                }
            );
    }

    DeleteComment() {
        axios.delete('http://localhost:3001/comments/delete/' + this.commentGetData.id).then(
            (response) => {
                let resultStatus = response.status;
                if (resultStatus === "success") {
                    console.log(response);
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
                    // console.log("finished");
                }
            )
    }
    render() {
        let commentLabels = Object.keys(this.commentGetData);
        let viewCommentData = [];
        viewCommentData = commentLabels.map(
            (eachLabel) => {
                return <tr>
                    <td className="commentLabel">{eachLabel}</td>
                    <td className="commentData">{this.commentGetData[eachLabel]}</td>
                </tr>
            }
        );

        return (
            <div className="container commentsview-container">
                <div className="row commentview-row">
                    <div className="commentview-backlink">
                        <Link to={'/ListData'} className="btn btn-primary btn-commentview"><i className="fas fa-hand-point-left"></i><i className="fa fa-hand-o-left"></i> Back</Link>
                        <span className="delete-comment" onClick={() => this.DeleteComment()}><i className="fas fa-trash-alt"></i></span>
                        <span className="edit-comment" onClick={() => this.EditComment()}><i className="fas fa-user-edit"></i></span>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 commentview-content">
                        <table className="table table-bordered tablelist">
                            <tbody>
                                {viewCommentData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default commentDetails;