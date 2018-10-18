import React, { Component } from "react";
//import peopleSwapi from "./db/swapi";

class App extends Component {
  state = {
    people: []
  };

  peopleSwapi(url) {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          console.log("torba");
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(body => {
        this.setState({ people: body.results });
      })
      .catch(err => {
        console.log("че то не то --- ", err);
      });
  }

  componentDidMount() {
    this.peopleSwapi("https://swapi.co/api/people/");
  }

  render() {
    return (
      <div className="App">
        {this.state.people.map(item => (
          <li key={item.url}>{item.name}</li>
        ))}
      </div>
    );
  }
}

export default App;
