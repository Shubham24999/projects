import React from "react";

const CofeeCard = ({ title, description, price, ingredients, image }) => {
  return (
    <div className="coffee_card">
      <img src={image} alt="alter image"/>
      <div>
        <h2 className="title">{title}</h2>
        <p className="price">{price}</p>
        <p>{description}</p>
        <ul className="ingredient">
          {ingredients.map((ele) => (
            <li key={Math.random()*10+Math.random()}>{ele}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CofeeCard;
