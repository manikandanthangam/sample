import React, { Component } from 'react';

class Dummy1 extends Component {
    constructor (props) {
        super(props);
        console.log(this.props.name);
    }

    render(){
        return(
            <p>Dummy 1 {this.props.name} page</p>
        );
    }
}

export default Dummy1;