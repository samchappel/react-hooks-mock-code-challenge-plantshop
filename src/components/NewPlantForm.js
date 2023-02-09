import React, { useState } from "react";

const initialPlant = {
  name: "", 
  image: "", 
  price: ""
}

function NewPlantForm({ addPlant }) {

  const [newPlant, setNewPlant] = useState(initialPlant)

  function handleChange(e) {
    console.log(e.target.name)
    setNewPlant({ ...newPlant, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted :)')
    addPlant(newPlant)
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('submitted :)')
  //   const sanitizedPlant = {
  //     ...newPlant,
  //     price: parseInt(newPlant.price)
  //   }
  //   addPlant(sanitizedPlant)
  // }
  // this above just updates the price from the form from a string to a number to match the rest of the plant objects

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={newPlant.name} onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input value={newPlant.image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input value={newPlant.price} onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
