import React, { Component } from "react";
import SwapiService from "../../db/swapi";

import "./RandomPlanet.css";

export default class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diametr: null
  };

  updatePlanets() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapi.getPlanet(id).then(res =>
      this.setState({
        id: id,
        name: res.name,
        population: res.population,
        rotationPeriod: res.rotation_period,
        diameter: res.diameter
      })
    );
  }

  componentDidMount() {
    this.updatePlanets();
  }

  render() {
    const { name, population, rotationPeriod, diameter, id } = this.state;
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
