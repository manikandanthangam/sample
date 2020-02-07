import React, { Component } from 'react';
const EmpContext = React.createContext();
export const EmpConsumer = EmpContext.Consumer;

class Provider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '23'
        }
    }

    render() {
        let shareData = {
            employeeId: this.state.id,
            changevalue: (value) => {
                this.setState({ id: value })
            }
        }
        return (
            // <div class='row'>Provider {this.state.id}</div>
            <EmpContext.Provider value={shareData}>{this.props.children}</EmpContext.Provider>
        );
    }

}

export default Provider;