import React, {Component} from "react";
import Release from "./Release";

class ReleasesList extends Component {

  render() {

    const releaseNodes = this.props.data.map(release => {
      return <li><Release name={release.name} url={release.url} key={release.id}></Release></li>
    })

    return (
      <div className="releases-list">
        <h2>Releases List</h2>
        <ul>
        {releaseNodes}
        </ul>
      </div>
    )
  }

}

export default ReleasesList;