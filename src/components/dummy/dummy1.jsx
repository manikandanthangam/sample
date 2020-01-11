import React, { Component } from 'react';
import swal from 'sweetalert';
class Dummy1 extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.name);
        this.buttonNumber = this.props.data;
        console.log("data: "+this.props.data);
    }

    sweetSample1(button){
        console.log("here");
        console.log(button);
        if(button === "1"){
            swal("Here's a message!");
        } else {
            swal("Here's a message!", "It's pretty, isn't it?")
        }
        
    }
    render() {
        return (
            <div className="container">
                <p>Dummy 1 {this.props.name} page</p>
                <input type="button" name="sweetTest1" className="btn btn-primary " value="Sample 1" onClick={()=> this.sweetSample1(this.buttonNumber)} />
            </div>
        );
    }
}

export default Dummy1;