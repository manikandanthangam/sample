import React, { Component } from 'react';
import swal from 'sweetalert';
import { EmpConsumer } from '../provider/provider';

class Dummy1 extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.name);
        this.buttonNumber = this.props.data;
        console.log("data: "+this.props.data);
        this.state = {
            isDataReceived: false }
    }

    sweetSample1(button){
        console.log("here");
        console.log(button);
        if(button === "1"){
            swal("Here's a message!");
        } else {
            swal("Here's a message!", "It's pretty, isn't it?")
        }
        this.setState({ isDataReceived: true });

    }

    componentWillMount(){
        console.log("component will mount");
    }
    componentDidMount(){
        console.log("component did mount");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    

    componentWillUpdate(){
        console.log("component will update");
    }
    componentDidUpdate(){
        console.log("component did update");
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