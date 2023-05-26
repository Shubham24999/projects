import { useState, useEffect } from "react";
import CofeeCard from "../component/CofeeCard";


const Cofee = () => {

  const [data, setData] = useState([]);

  const fetchandrender = async () => {
    try {
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`)
        .then((res) => res.json())
        .then((d) => {
          console.log(d)
          setData(d)
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchandrender();
  }, []);

  return (
    <div className="coffee_container"> {data.map((elm) => (
      <CofeeCard key={elm.id} title={elm.title} description={elm.description} price={elm.price} ingredients={elm.ingredients} image={elm.image} />
    ))}</div>
  );
};

export default Cofee;
