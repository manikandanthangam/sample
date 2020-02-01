import React, { Component } from 'react';
import axios from 'axios';


import './listdata.css';
// import Table from '../../core_components/table';
import CommonTable from '../../core_components/commontable';

class Listdata extends Component {

  commentsData = [];


  constructor(props) {
    super(props);
    this.state = {
      isDataRecieved: false,
    };
    axios.get('http://localhost:3001/comments/get').then((response) => {
      // handle success
      // console.log(response.data.data);
      if (response.data && response.data.data) {
        let myData = response.data.data;
        // console.log(myData);
        this.commentsData = myData;
        this.setState({ isDataRecieved: true });

      }
      // this.commentsData = response.data.data;
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });


    // this.getData = this.getData.bind(this);
    // this.getData();
  }

  getData() {
  }
  headerData = ["postId", "id", "name", "body", "view"];

  render() {
    console.log('render called');
    console.log(this.commentsData);
    return (
      <div className="container" id="ListContainer">
        <div className="row">
          <CommonTable data={this.commentsData} header={this.headerData} view="./commentDetails"></CommonTable>
        </div>
      </div>

    );
  }
}

export default Listdata;