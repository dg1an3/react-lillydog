import React, { Component } from "react";
import { Button } from "reactstrap";
import { Buffer } from "buffer";

class UploadImage extends Component {
 //Take file input from user
  captureFile = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    let reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => this.convertToBuffer(reader)
  };

  //Convert the file to buffer to store on IPFS 
  convertToBuffer = async (reader) => {
    //file is converted to a buffer for upload to IPFS        
    this.buffer = await Buffer.from(reader.result);
  };  

  render() {
    return (
      <div>
        <h3> Choose file to send to IPFS </h3>
        <form onSubmit={() => this.props.onSubmit(this.buffer)}>
          <input type="file" onChange={this.captureFile} />
          <Button bsStyle="primary" type="submit">
            Send it
          </Button>
        </form>
      </div>
    );
  }
}

export default UploadImage;