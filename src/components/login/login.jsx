import React from 'react';
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <div id="loginPage">
                <form>
                    <div className="form-group">
                        <label htmlFor="username"><i className="fas fa-user"></i> Username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><i className="fas fa-key"></i> Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;