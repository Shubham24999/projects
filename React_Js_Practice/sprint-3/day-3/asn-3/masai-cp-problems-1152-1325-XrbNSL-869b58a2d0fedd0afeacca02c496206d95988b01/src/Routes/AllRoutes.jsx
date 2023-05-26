import React from 'react'
import { Routes,Route } from 'react-router-dom'
import BookDetailsPage from '../Pages/BookDetailsPage'
import InvalidPage from '../Pages/InvalidPage'
import Navbar from '../Pages/Navbar'
import SectionPage from '../Pages/SectionPage'

export default function AllRoutes() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/section/:section' element={<SectionPage />} />
                <Route path='/bookdetailspage/:id' element={<BookDetailsPage />} />
                <Route path='*' element={<InvalidPage />} />
            </Routes>
        </div>
    )
}
