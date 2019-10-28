import React, { Component } from "react";
import ReleasesList from "../components/ReleasesList";

class ReleasesBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Western Stars",
          url: "https://www.imdb.com/title/tt10687158/?ref_=rlm"
        },
        {
          id: 2,
          name: "Doctor Sleep",
          url: "https://www.imdb.com/title/tt5606664/?ref_=rlm"
        },
        {
          id: 3,
          name: "Sorry We Missed You",
          url: "https://www.imdb.com/title/tt8359816/?ref_=rlm"
        },
        {
          id: 4,
          name: "After The Wedding",
          url: "https://www.imdb.com/title/tt7985692/?ref_=rlm"
        },
        {
          id: 5,
          name: "Brittany Runs a Marathon",
          url: "https://www.imdb.com/title/tt7671064/?ref_=rlm"
        }
      ]
    }
  }

  render() {
    return (
      <div className="releases-box">
        <table>
          <thead><tr><th>Upcoming Film Releases for UK</th></tr></thead>
          <tbody>
            <tr>
              <ReleasesList data={this.state.data} />
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases > ></a></td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }

}

export default ReleasesBox;