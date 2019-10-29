import React, { Component } from "react";
import { render } from "react-dom";
import { Button } from "reactstrap";
import ImageStrip from "./ImageStrip";
import Receipt from "./Receipt";
import UploadImage from "./UploadImage";
import "./style.css";

class App extends Component {
  state = {
    ipfsHash: null,
    buffer: "",
    ethAddress: "",
    transactionHash: "",
    txReceipt: ""
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lilly Picture Contest!</h1>
          <em>Brought to you by blockchain!</em>
        </header>
        <ImageStrip />        
        <hr />
        <UploadImage />
        <hr />
        <Receipt ipfsHash="whwhwhw" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
