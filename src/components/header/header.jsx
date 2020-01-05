import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/Login">Login</a> */}
                            <Link to={'/Login'} className="nav-link">Login <i className="fas fa-sign-in-alt"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Signup'} className="nav-link">Signup <i className="fas fa-user-plus"></i></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/Dummy'} className='nav-link'>Dummy <i className="fas fa-vial"></i></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/Listdata'} className='nav-link'>Comments List <i className="far fa-comment-dots"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Doughnutchart'} className="nav-link">Doughnut Chart <i className="fas fa-chart-pie"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/CommentsAdd'} className="nav-link">Comments Add <i className="fas fa-plus-square"></i></Link>
                        </li>
                        <li className="list-item">
                            <Link to={'/EmployeeList'} className="nav-link">Employee List <i className="fas fa-clipboard-list"></i></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;