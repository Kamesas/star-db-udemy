import React, { Component } from "react";
import SwapiService from "../../db/swapi";
import Loader from "../loader/Loader";

import "./ItemList.css";

export default class ItemList extends Component {
  swapi = new SwapiService();

  state = { peoples: null };

  componentDidMount() {
    this.swapi.getAllPeople().then(peoples => this.setState({ peoples }));
  }

  render() {
    if (!this.state.peoples) {
      return <Loader />;
    }

    return (
      <ul className="item-list list-group">
        {this.state.peoples.map((p, i) => (
          <li
            className="list-group-item"
            key={p.name}
            onClick={() => this.props.onItemSelected(p, i)}
          >
            {p.name}
          </li>
        ))}
      </ul>
    );
  }
}
