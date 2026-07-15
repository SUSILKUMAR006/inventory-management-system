import React from 'react'

function SalesReport() {
  return (
    <div className='mx-10 bg-white shadow-md px-10 py-3 rounded-md '>

      <div className='flex justify-between'>
        <h1 className='text-xl '>Sales Report</h1>
        <div className='border-2 border-gray-300 rounded-md px-2 py-1'>
          <input className='focus:outline-none' type="search" name="search" placeholder="Search..." id="" />
        </div>
      </div>

      <div className='my-10'>

        <div className='flex justify-center gap-10 mb-10'>
          <button className=' bg-blue-400 px-4 py-2 rounded-full shadow-lg border border-gray-200'>Daily</button>
          <button className='   px-4 py-2 rounded-full shadow-lg border border-blue-300'>Week</button>
          <button className='  px-4 py-2 rounded-full shadow-lg border border-blue-300'>Monthly</button>
        </div>
        <div className='flex justify-center gap-10'>
          <div className='bg-amber-300 px-10 py-5 rounded-md shadow-md w-50'>
            <h1>Toady Total Sales</h1>
            <h1 className='text-2xl font-bold'>₹ 10,000</h1>
          </div>
          <div className='bg-green-300 px-10 py-5 rounded-md shadow-md w-50'>
            <h1>Toady Profit</h1>
            <h1 className='text-2xl font-bold'>₹ 5,000</h1>
          </div>
          <div className=' bg-fuchsia-300 px-10 py-5 rounded-md shadow-md w-50'>
            <h1>No Of </h1>
            <h1 className='text-2xl font-bold'>123</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesReport