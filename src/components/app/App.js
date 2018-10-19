import React from "react";

import Header from "../header/Header";
import RandomPlanet from "../random-planet/RandomPlanet";
import ItemList from "../item-list/ItemList";
import PersonDetails from "../person-details/PersonDetails";

import "./App.css";

class App extends React.Component {
  state = {
    showRandomPlanet: false,
    itemSelected: null
  };

  toggleShowRandomPlanet = () => {
    this.setState({ showRandomPlanet: !this.state.showRandomPlanet });
  };

  onItemSelected = (item, i) => {
    this.setState({ itemSelected: item, itemSelectedIndex: i + 1 });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <button
          className="toggle-planet btn btn-warning btn-sm"
          onClick={this.toggleShowRandomPlanet}
        >
          {this.state.showRandomPlanet ? "Hide planet" : "Show random planet"}
        </button>
        {this.state.showRandomPlanet ? <RandomPlanet /> : null}

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails
              itemSelected={this.state.itemSelected}
              itemSelectedIndex={this.state.itemSelectedIndex}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
