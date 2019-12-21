import React, { Component } from 'react';
import './listdata.css';

class Listdata extends Component {
    render() {
        return (
            <div className="container" id="ListContainer">
                <table className="table table-bordered tablelist">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">PostId</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>1</td>
                            <td>1</td>
                            <td>id labore ex et quam laborum</td>
                            <td>Eliseo@gardner.biz</td>
                            <td>laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor
                        quam autem quasi\nreiciendis et nam sapiente accusantium</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Listdata;