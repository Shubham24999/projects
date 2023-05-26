import React from "react";

const CartButton = () => {
  const [count,setcount]=useState(0)
  return <div className = "change_quantity_container">
    <button data-cy = "dec_btn">-</button>
    <p className="quantity">{count}</p>
    <button data-cy = "inc_btn">+</button>
    </div>;
};

export default CartButton;
