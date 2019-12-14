import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import Signup from '../signup/signup';
import Dummy from '../dummy/dummy';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path='/Login' component={Login}></Route>
                <Route path='/Signup' component={Signup}></Route>
               <Route path='/Dummy' component={Dummy}></Route>
            </Switch>
        );
    }

}

export default Main;