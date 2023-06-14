import React from 'react'
import AllProducts from '../Pages/AllProducts'
import {Routes,Route} from "react-router-dom"
import ProductDetails from '../Pages/ProductDetails'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
        </div>
    )
}
