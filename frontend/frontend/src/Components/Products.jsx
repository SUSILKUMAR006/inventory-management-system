import React from 'react'
import {url} from './Url.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Products() {

    const [products , setProducts] = useState([]);

    useEffect(()=>{

        const getAllProducts = async () =>{
            try{

                const response = await axios.get(`http://${url}/api/products`);
                setProducts(response.data);
                console.log(response.data);
            }catch(err){
                console.log(err.message);
            }
        }
    },[])
    return (
        <div className="mx-10 bg-white shadow-md px-10 py-3 rounded-md">

            <div>
                <h1 className='text-xl '> All Products Details</h1>
            </div>

            <div className='my-10'>
                <div className='flex justify-end'>
                    <button type="button" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  cursor-pointer'>Add Product</button>
                </div>
                <table className='w-full mt-5 border-2 border-gray-300 '>
                    <thead className='bg-gray-200 border-2 border-gray-300'>
                        <tr className=''>
                            <th className='border-2 border-gray-300 px-4 py-2'>S No</th>
                            <th className='border-2 border-gray-300 px-4 py-2'>Products Name</th>
                            <th className='border-2 border-gray-300 px-4 py-2'>Total Stock</th>
                            <th className='border-2 border-gray-300 px-4 py-2'>Base Price</th>
                            <th className='border-2 border-gray-300 px-4 py-2'>Sealing Price</th>
                            <th className='border-2 border-gray-300 px-4 py-2'>No of Left</th>
                            <th className='border-2 border-gray-300 px-4 py-2'>Last Stock Fill Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <td className='border-2 border-gray-300 px-4 py-2'>1</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>Apple Mac Book</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>200</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>1000</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>1200</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>50</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>2023-10-10</td>
                        </tr>
                        <tr className='text-center'>
                            <td className='border-2 border-gray-300 px-4 py-2'>2</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>Dell XPS</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>150</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>800</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>960</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>30</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>2023-10-15</td>
                        </tr>
                        <tr className='text-center'>
                            <td className='border-2 border-gray-300 px-4 py-2'>3</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>HP Spectre</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>100</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>900</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>1080</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>20</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>2023-10-20</td>
                        </tr>
                        <tr className='text-center'>
                            <td className='border-2 border-gray-300 px-4 py-2'>4</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>iPhone 17 Pro max</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>200</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>1200</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>1440</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>40</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>2023-10-25</td>
                        </tr>

                        <tr className='text-center'>
                            <td className='border-2 border-gray-300 px-4 py-2'>5</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>Samsung Galaxy S23</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>150</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>1000</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>1200</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>30</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>2023-10-30</td>
                        </tr>

                        <tr className='text-center'>
                            <td className='border-2 border-gray-300 px-4 py-2'>6</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>Google Pixel 8</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>180</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>1100</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>1320</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>35</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>2023-11-05</td>
                        </tr>

                        <tr className='text-center'>
                            <td className='border-2 border-gray-300 px-4 py-2'>7</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>Gaming Keyboard X30 E6</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>120</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>800</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>960</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>25</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>2023-11-10</td>
                        </tr>

                        <tr className='text-center'>
                            <td className='border-2 border-gray-300 px-4 py-2'>8</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>Gaming Mouse X20 E5</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>150</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>700</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>840</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>30</td>
                            <td className='border-2 border-gray-300 px-4 py-2'>2023-11-15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products