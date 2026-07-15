import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

  const [active, setActive] = useState("home");


  return (
    <div className='mx-10 bg-white shadow-md px-10 py-3 rounded-md'>

      <div className='flex justify-between items-center'>
         <div className=' text-xl font-bold '>
          <h1><span className='text-green-500'>Sales</span> Mart 📦</h1>
         </div>

         <div className=' flex gap-3 font-semibold'>
           <Link onClick={()=> setActive("home")}  className={` ${active === "home" ? "text-green-500" : "hover:text-green-500"}`}  to="/">Home</Link>
           <Link onClick={()=> setActive("products")} className={` ${active === "products" ? "text-green-500" : "hover:text-green-500"}`} to="/products">Products</Link>
           <Link onClick={()=> setActive("sales-report")} className={` ${active === "sales-report" ? "text-green-500" : "hover:text-green-500"}`} to="/sales-report">Sales report</Link>
           <Link onClick={()=> setActive("suppliers")} className={` ${active === "suppliers" ? "text-green-500" : "hover:text-green-500"}`} to="/suppliers">Suppliers</Link>
           <Link onClick={()=> setActive("billings")} className={` ${active === "billings" ? "text-green-500" : "hover:text-green-500"}`} to="/billings">Billings</Link>        
         </div>

         <div className=' flex  gap-2 items-center'>
          <p>SUSILKUMAR S</p>
          <p className=' bg-green-300 flex items-center w-10 h-10 pb-1 justify-center text-2xl font-semibold rounded-full'>s</p>
         </div>
      </div>
    </div>
  )
}

export default Navbar