import React, {Component} from 'react';
import './comments.css';

class CommentsAdd extends Component {


    render() {
        return(
            <div className="container" id="CommentsContainer">
            <form className="FormContainer" id="CommentsForm" type="POST" action="">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group"><h3 className="form-title">Add Comments</h3></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="inputLabel" htmlFor="postId"><i className="fas fa-envelope"></i> postId</label>
                            <input type="number" name="postId" id="postId" className="form-control" />
                            <div className="feedback"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="inputLabel" htmlFor="comment_id"><i className="fas fa-key"></i> id</label>
                            <input type="number" name="comment_id" id="comment_id" className="form-control" />
                            <div className="feedback"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="inputLabel" htmlFor="comment_title"><i className="fas fa-envelope"></i> title</label>
                            <input type="text" name="comment_title" id="comment_title" className="form-control" />
                            <div className="feedback"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="inputLabel" htmlFor="comment_name"><i className="fas fa-key"></i> name</label>
                            <input type="text" name="comment_name" id="comment_name" className="form-control" />
                            <div className="feedback"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="inputLabel" htmlFor="comment_body"><i className="fas fa-envelope"></i> body</label>
                            <textarea name="comment_body" id="comment_body" className="form-control" cols="10" rows="5"></textarea>
                            <div className="feedback"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group SubmitBtnContainer">
                            <input type="button" name="CommentsSubmitBtn" id="CommentsSubmitBtn" className="btn btn-primary" value="Add Comment" onClick={() => this.SubmitCommentsFun()} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}

export default CommentsAdd;