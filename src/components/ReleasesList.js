import React, { Component } from "react";
import Release from "./Release";

class ReleasesList extends Component {

  render() {

    const releaseNodes = this.props.data.map(release => {
      return <Release name={release.name} url={release.url} key={release.id}></Release>
    })

    return (
      <td>
        <ul>
          {releaseNodes}
        </ul>
      </td>
    )
  }

}

export default ReleasesList;