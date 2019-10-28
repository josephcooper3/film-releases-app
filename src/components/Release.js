import React, {Component} from "react";

class Release extends Component {

  render() {
    return (
      <a href={this.props.url}>{this.props.name}</a>
    )
  }

}

export default Release;