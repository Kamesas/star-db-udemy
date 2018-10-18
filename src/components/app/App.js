import React from "react";

import Header from "../header/Header";
import RandomPlanet from "../random-planet/RandomPlanet";
import ItemList from "../item-list/ItemList";
import PersonDetails from "../person-details/PersonDetails";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
