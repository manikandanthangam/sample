import React, { Component } from 'react';
import Dummy1 from './dummy1';
class Dummy extends Component {
    render() {
        return (
            <div>
                <p>Dummy page</p>
                <Dummy1 name="hello" data="1"></Dummy1>
                <Dummy1 name="hnfgn" data="2"></Dummy1>

                <Dummy1 name="hegbfgllo" data="3"></Dummy1>

                <Dummy1 name="gg" data="4"></Dummy1>

            </div>
        );
    }
}

export default Dummy;