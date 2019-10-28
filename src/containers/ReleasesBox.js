import React, {Component} from "react";
import ReleasesList from "../components/ReleasesList";

class ReleasesBox extends Component {

  render() {
    return (
      <div className="releases-box">
        <h1>Releases Box</h1>
        <ReleasesList/>
      </div>
    )
  }

}

export default ReleasesBox;