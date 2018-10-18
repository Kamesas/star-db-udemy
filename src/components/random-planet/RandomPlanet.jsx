import React, { Component } from "react";
import SwapiService from "../../db/swapi";

import "./RandomPlanet.css";

export default class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    planet: {}
  };

  onPlanetLoaded = planet => {
    this.setState({ planet });
  };

  updatePlanets() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapi.getPlanet(id).then(this.onPlanetLoaded);
  }

  componentDidMount() {
    this.updatePlanets();
  }

  render() {
    const {
      planet: { name, population, rotationPeriod, diameter, id }
    } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="alt"
        />

        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diametr</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
