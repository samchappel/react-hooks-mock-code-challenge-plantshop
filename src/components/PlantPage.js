import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ plants, setPlants ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")

  useEffect(() => {
    // console.log("hi from useEffect CB")
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(data => setPlants(data))
  }, [])

  // function updateSearchTerm(search) {
    // setSearchTerm(search)
  // }

  function addPlant(plant) {
    console.log(plant)
    const newPlants = [plant, ...plants]
    setPlants(newPlants)
  }

    const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearchTerm={setSearchTerm}/>
      <PlantList plants={plants} searchTerm={searchTerm} filteredPlants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
