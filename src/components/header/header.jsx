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
                            <Link to={'/Login'} className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Signup'} className="nav-link">Signup</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/Dummy'} className='nav-link'>Dummy</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/Listdata'} className='nav-link'>Listdata</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Doughnutchart'} className="nav-link">Doughnut Chart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/CommentsAdd'} className="nav-link">Comments Add</Link>
                        </li>
                        <li className="list-item">
                            <Link to={'/EmployeeList'} className="nav-link">Employee List</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;