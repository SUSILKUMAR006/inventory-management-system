import React from 'react'
import url from '../config/Url.js';
import {useState , useEffect} from 'react';
import axios from 'axios';  
function Supplier() {

  const [supplier , setSuppilers] = useState([]);


  useEffect(()=>{
    const getAllSuppliers = async () => {
      try{
        const responce = await axios.get(`${url}/api/suppliers`);
        setSuppilers(responce.data);
        console.log(responce.data);
      }catch(err){
        console.log(err.message);
      }
    }

    getAllSuppliers();

  },[])
  return (
    <div className='mx-10 bg-white shadow-md px-10 py-3 rounded-md'>
      <div>
        <h1 className='text-xl '> All Suppliers Details</h1>
      </div>

      <div className='my-10'>
        <table className='w-full mt-5 border-2 border-gray-300 '>
          <thead className='bg-gray-200 border-2 border-gray-300'>
            <tr className=''>
              <th className='border-2 border-gray-300 px-4 py-2'>S No</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Supplier Name</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Product Name</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Phone No</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Email</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Address</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Company</th>
            </tr>
          </thead>
          <tbody>
           {supplier.map((sup , index)=>{
            return(
              <tr key={index} className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>{index + 1}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{sup.supplierName}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{sup.productName}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{sup.phoneNo}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{sup.email}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{sup.address}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{sup.company}</td>
              </tr>
            )
           })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Supplier