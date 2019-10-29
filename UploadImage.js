import React, { Component } from "react";
import { Button } from "reactstrap";

class UploadImage extends Component {
  render() {
    return (
      <div>
        <h3> Choose file to send to IPFS </h3>
        <form onSubmit={this.onSubmit}>
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