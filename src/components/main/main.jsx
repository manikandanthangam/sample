import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import Signup from '../signup/signup';
import Dummy from '../dummy/dummy';
import Listdata from '../listdata/listdata';
import Doughnutchart from '../doughnutchart/doughnutchart';
import Dashboard from '../dashboard/dashboard';
import CommentsAdd from '../comments/comments_add';
import EmployeeList from '../employee/employeelist';
import EmployeeDetails from '../employee/employee_details';
import commentDetails from '../comments/comment_details';
import Provider from '../provider/provider';
import axios from 'axios';



class Main extends Component {

    constructor() {
        super();
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            const token = sessionStorage.getItem('token') | '';
            config.headers.Authorization = token;

            return config;
        });
    }
    render() {
        return (
            <div>
                <Provider>
                    <Switch>
                        <Route exact path='/' component={Dashboard}></Route>
                        <Route path='/Login' component={Login}></Route>
                        <Route path='/Signup' component={Signup}></Route>
                        <Route path='/Dummy' component={Dummy}></Route>
                        <Route path='/Listdata' component={Listdata}></Route>
                        <Route path='/Doughnutchart' component={Doughnutchart}></Route>
                        <Route path='/Dashboard' component={Dashboard}></Route>
                        <Route path='/CommentsAdd' component={CommentsAdd}></Route>
                        <Route path='/EmployeeList' component={EmployeeList}></Route>
                        <Route path='/EmployeeDetails/:id' component={EmployeeDetails}></Route>
                        <Route path='/commentDetails/:id' component={commentDetails}></Route>
                    </Switch>
                </Provider>
            </div>
        );
    }

}

export default Main;