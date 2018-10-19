import React, { Component } from "react";
import SwapiService from "../../db/swapi";
import Loader from "../loader/Loader";

import "./RandomPlanet.css";
import planets from "./planets.jpg";

export default class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onErr() {
    console.log("err");
  }

  updatePlanets = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapi
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onErr);
  };

  componentDidMount() {
    this.updatePlanets();
    this.planetInterval = setInterval(this.updatePlanets, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.planetInterval);
  }

  render() {
    const {
      planet: { name, population, rotationPeriod, diameter, id },
      loading
    } = this.state;

    if (loading) {
      return (
        <div className="random-planet jumbotron rounded">
          <Loader />
        </div>
      );
    }

    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={
            id < 20
              ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
              : planets
          }
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
