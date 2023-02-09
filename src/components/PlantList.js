import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchTerm, filteredPlants }) {

  // const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // const filteredPlants = plants.filter((plant) => {
    // const lowerCaseName = plant.name.toLowerCase();
    // const lowerCaseSearch = searchTerm.toLowerCase();
    // const numPriceSearch = parseInt(searchTerm);
    // const isPrice = plant.price <= numPriceSearch;
    // return lowerCaseName.includes(lowerCaseSearch) || isPrice;
  // })

  const plantCards = filteredPlants.map((plant) => (<PlantCard key={plant.id} plant={plant}/>))

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
