import React from 'react'
// import {url} from './Url.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Products() {
    // const url = "localhost:5000";
    const [products, setProducts] = useState([]);

    const url = "http://localhost:5000";

    useEffect(() => {

        const getAllProducts = async () => {
            try {
                const response = await axios.get(`${url}/api/products`);
                setProducts(response.data);
                console.log(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };

        getAllProducts();

    }, []);
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
                        {products.map((product, index) => {
                            return (
                                <tr key={index} className='text-center'>
                                    <td className='border-2 border-gray-300 px-4 py-2'>{index + 1}</td>
                                    <td className='border-2 border-gray-300 px-4 py-2'>{product.ProductName}</td>
                                    <td className='border-2 border-gray-300 px-4 py-2'>{product.TotalStock}</td>
                                    <td className='border-2 border-gray-300 px-4 py-2'>{product.Price}</td>
                                    <td className='border-2 border-gray-300 px-4 py-2'>{product.SellingPrice}</td>
                                    <td className='border-2 border-gray-300 px-4 py-2'>{product.NoOfLeft}</td>
                                    <td className='border-2 border-gray-300 px-4 py-2'>{product.LastStockFilled}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products