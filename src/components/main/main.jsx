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
class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path='/Login' component={Login}></Route>
                <Route path='/Signup' component={Signup}></Route>
               <Route path='/Dummy' component={Dummy}></Route>
               <Route path='/Listdata' component={Listdata}></Route>
               <Route path='/Doughnutchart' component={Doughnutchart}></Route>
               <Route path='/Dashboard' component={Dashboard}></Route>
               <Route path='/CommentsAdd' component={CommentsAdd}></Route>
               <Route path='/EmployeeList' component={EmployeeList}></Route>
            </Switch>
        );
    }

}

export default Main;