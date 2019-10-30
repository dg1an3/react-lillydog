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
  
  handleSubmit = async (buffer) => {
    alert("submitted!" + buffer.length);
    event.preventDefault();

    //bring in user's metamask account address     
    const accounts = await web3.eth.getAccounts();

    //obtain contract address from storehash.js      
    const ethAddress = await storehash.options.address;
    this.setState({ ethAddress });
    //save document to IPFS,return its hash#, and set hash# to state      
    await ipfs.add(this.state.buffer, (err, ipfsHash) => {
      console.log(err, ipfsHash);
      //setState by setting ipfsHash to ipfsHash[0].hash        
      this.setState({ ipfsHash: ipfsHash[0].hash });
      // call Ethereum contract method "sendHash" and .send IPFS hash to ethereum contract        
      //return the transaction hash from the ethereum contract      
      const decoded = bs58.decode(this.state.ipfsHash)
      const bytesFromBase58 = "0x" + decoded.slice(2).toString('hex')
      const encodedParam = web3.eth.abi.encodeParameter('bytes32', bytesFromBase58);
      storehash.methods.submit(encodedParam).send({
        from: accounts[0]
      }, (error, transactionHash) => {
        console.log(transactionHash);
        this.setState({ transactionHash });
      });
    })
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
        <UploadImage
          onSubmit={this.handleSubmit} />
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
