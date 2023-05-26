import "./App.css";
import data from "./db.json";
import Product from "./components/Product";
import { useState } from "react";

function App() {
  const [newData,setData]=useState(data)

  function handle(val,id){
    const updatedData = newData.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + val } : item);
    setData(updatedData);
  }

  let total=newData.reduce((acc,curr)=>{
    return acc+=curr.price*curr.quantity
  },0)



  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {newData?newData.map((el)=>{
          return <Product name={el.name} price={el.price}  quantity={el.quantity} id={el.id} handleQty={handle} />
        }):""}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        Total:{total}
      </h1>
    </div>
  );
}

export default App;
