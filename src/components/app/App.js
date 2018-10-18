import React, { Component } from "react";
import SwapiService from "../../db/swapi";

class App extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    const swapi = new SwapiService();

    swapi.getAllPeople().then(body => {
      this.setState({ people: body });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="list-group">
          {this.state.people.map(item => (
            <li
              key={item.url}
              className="list-group-item list-group-item-action"
            >
              {item.name}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
