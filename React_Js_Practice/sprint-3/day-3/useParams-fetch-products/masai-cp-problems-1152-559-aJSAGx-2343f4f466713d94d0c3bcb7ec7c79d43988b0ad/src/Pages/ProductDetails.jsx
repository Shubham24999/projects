import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {


  const { id } = useParams();
  // console.log(id);

  const [product, setProduct] = useState({})

  const fetchAndRender = async (id) => {
    fetch(` http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchAndRender(id)
  }, [])

  return (
    <div data-testid = "product-details" >
      <h1 data-testid="product_name">{product.name}</h1>
      <h2 data-testid="product_price">{product.price}</h2>
    </div>
  )
}
