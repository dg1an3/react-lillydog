import React, { Component } from "react";
import { Button } from "reactstrap";
import BasicFilm from "react-film";

class ImageStrip extends Component {
  render() {
    return (
      <div>
        <h3>Current entries:</h3>
        <BasicFilm>
          <img
            alt="Cat 01"
            src="https://raw.githubusercontent.com/dg1an3/dg1an3.github.io/master/lilly_goof.png?raw=true"
            style={{ height: 200 }}
          />
          <img
            alt="Cat 02"
            src="https://raw.githubusercontent.com/dg1an3/dg1an3.github.io/master/lilly_chimkin.png?raw=true"
            style={{ height: 200 }}
          />
          <img
            alt="Cat 03"
            src="https://raw.githubusercontent.com/dg1an3/dg1an3.github.io/master/lilly_sleepy.png?raw=true"
            style={{ height: 200 }}
          />
        </BasicFilm>
      </div>
    );
  }
}

export default ImageStrip;
