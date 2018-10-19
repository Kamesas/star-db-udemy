import React, { Component } from "react";

import "./PersonDetails.css";

export default class PersonDetails extends Component {
  render() {
    const { itemSelected, itemSelectedIndex } = this.props;
    const itemIndex = itemSelectedIndex ? itemSelectedIndex : "3";

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${itemIndex}.jpg`}
          alt="alt"
        />
        <div className="card-body">
          <h4>{itemSelected ? itemSelected.name : "R2-D2"}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{itemSelected ? itemSelected.gender : " male"}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{itemSelected ? itemSelected.birth_year : "43"}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>
                {itemSelected ? itemSelected.eye_color : "red"}
                red
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
