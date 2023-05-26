import React, { useState } from "react";


const GroceryItem = (props) => {
  // recive name, image, and price as props
  // console.log(props)
  
  const {name,image,price ,key}=props
  return <div classname ="grocery_card" key={key}>
    <img src={image} alt="image" />
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button data-cy="add_to_cart">Add to Cart</button>
  </div>;
};

export default GroceryItem;
