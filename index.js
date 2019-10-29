import React, { Component } from "react";
import { render } from "react-dom";
import { Button } from "reactstrap";
import ImageStrip from "./ImageStrip";
import Receipt from "./Receipt";
import UploadImage from "./UploadImage";
import "./style.css";

class App extends Component {
  state = {
    ipfsHash: "initial hash",
    buffer: "initial buffer",
    ethAddress: "contract address",
    transactionHash: "tx hash",
    txReceipt: "tx receipt"
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lilly Picture Contest!</h1>
          <em>Brought to you by blockchain -- Prize: 2 Ether!</em>
        </header>
        <ImageStrip />
        <hr />
        <UploadImage />
        <hr />
        <Receipt
          ipfsHash={this.state.ipfsHash}
          ethAddress={this.state.ethAddress}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
