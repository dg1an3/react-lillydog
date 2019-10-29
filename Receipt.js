import React, { Component } from "react";
import { Button } from "reactstrap";

class Receipt extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <Button onClick={this.onClick}>Get Transaction Receipt</Button>
        <table bordered responsive>
          <thead>
            <tr>
              <th>Tx Receipt Category</th>
              <th> </th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IPFS Hash stored on Ethereum</td>
              <td> : </td>
              <td>{this.props.ipfsHash}</td>
            </tr>
            <tr>
              <td>Ethereum Contract Address</td>
              <td> : </td>
              <td>{this.props.ethAddress}</td>
            </tr>
            <tr>
              <td>Tx # </td>
              <td> : </td>
              <td>{this.props.transactionHash}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Receipt;
