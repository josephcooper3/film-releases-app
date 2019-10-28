import React, {Component} from "react";
import Release from "./Release";

class ReleasesList extends Component {

  render() {
    return (
      <div className="releases-list">
        <h2>Releases List</h2>
        <Release/>
      </div>
    )
  }

}

export default ReleasesList;