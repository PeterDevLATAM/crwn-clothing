import "./directory.styles.scss";
import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import SECTIONS_DATA from "../../sections.data";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = { sections:SECTIONS_DATA };
  }

  render() {
      console.log(this.state)
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps}) => {
          return <MenuItem key={id} {...otherProps}/>;
        })}
      </div>
    );
  }
}
