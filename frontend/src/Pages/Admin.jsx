import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Products from '../Components/Products'
import Supplier from '../Components/Supplier'
import SalesReport from '../Components/SalesReport'
import Billing from '../Components/Billing'
function Admin() {
  return (
      <div className=' pt-5 bg-gray-100 flex flex-col gap-10'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/suppliers" element={<Supplier/>}/>
          <Route path="/sales-report" element={<SalesReport/>}/>
          <Route path="/billings" element={<Billing/>}/>
        </Routes>
        <Footer />
      </div>
  
  )
}

export default Admin