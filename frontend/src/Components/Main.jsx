import React from 'react'
import test from '../assets/test.png'
import apple from '../assets/apple.png'
import apple1 from '../assets/apple_menu.png'
import iPhone from '../assets/iPhone.png'
import keyboard from '../assets/keyboard.jpg'
import speaker from '../assets/speaker.avif'
import samsung from '../assets/Samsung.png'
import earbuds from '../assets/earbuds.webp'
import mouse from '../assets/mouse.png'
import { useState } from 'react'
function Main() {
    const [active, setActive] = useState("menu1");
    const products = [
        { name: "Apple Mac Book", price: "$ 1000", quantityNow: "100", totalQuantity: "200", category: "Electronics", image: apple },
        { name: "iPhone 17 Pro max", price: "$ 1200", quantityNow: "80", totalQuantity: "200", category: "Electronics", image: iPhone },
        { name: "Speaker", price: "$ 800", quantityNow: "50", totalQuantity: "150", category: "Electronics", image: speaker },
        { name: "Samsung Galaxy S23", price: "$ 900", quantityNow: "30", totalQuantity: "100", category: "Electronics", image: samsung },
        { name: "Earbuds", price: "$ 1000", quantityNow: "60", totalQuantity: "150", category: "Electronics", image: earbuds },
        { name: "Mouse", price: "$ 1100", quantityNow: "70", totalQuantity: "180", category: "Electronics", image: mouse },
        { name: "Keyboard", price: "$ 900", quantityNow: "40", totalQuantity: "120", category: "Electronics", image: keyboard },
        
    ];
    const [productDetails, setProductDetails] = useState(products[0]);

    return (
        <div className='mx-10 bg-white shadow-md px-10 py-3 rounded-md'>
            <div className=' py-4'>
                <h1 className=' text-xl font-semibold'>Welcome, Start Monitering 😎</h1>
            </div>

            <div className='mt-10 '>
                <h1 className=' px-10 text-lg mb-5 font-semibold text-green-500'>All Catogery Of Stock</h1>
                <div className=' flex justify-center gap-10  '>
                    <div className="text-center font-semibold hover:scale-110 transition-all duration-300 hover:cursor-pointer">
                        <div onClick={() => {setActive("menu1"); setProductDetails(products[0])}}  className={active === "menu1" ? "rounded-full border-3 border-green-500 p-1 shadow-xl" : "rounded-full border-3 border-gray-300 p-1 shadow-xl"}>
                            <img src={apple1} className=' w-20 h-20  object-cover rounded-full ' alt="" />
                        </div>
                        <p>Mac Book</p>
                    </div>
                    <div className="text-center font-semibold hover:scale-110 transition-all duration-300 hover:cursor-pointer">
                        <div onClick={() => {setActive("menu2"); setProductDetails(products[1])}} className={active === "menu2" ? "rounded-full border-3 border-green-500 p-1 shadow-xl" : "rounded-full border-3 border-gray-300 p-1 shadow-xl"}>
                            <img src={iPhone} className=' w-20 h-20  object-cover rounded-full ' alt="" />
                        </div>
                        <p>iPhone 17 Pro</p>
                    </div>
                    <div className="text-center font-semibold hover:scale-110 transition-all duration-300 hover:cursor-pointer">
                        <div onClick={() => {setActive("menu3"); setProductDetails(products[2])}}  className={active === "menu3" ? "rounded-full border-3 border-green-500 p-1 shadow-xl" : "rounded-full border-3 border-gray-300 p-1 shadow-xl"}>
                            <img src={speaker} className=' w-20 h-20  object-cover rounded-full' alt="" />
                        </div>
                        <p>Speaker</p>
                    </div>
                    <div className="text-center font-semibold hover:scale-110 transition-all duration-300 hover:cursor-pointer">
                        <div onClick={() => {setActive("menu4"); setProductDetails(products[3])}}  className={active === "menu4" ? "rounded-full border-3 border-green-500 p-1 shadow-xl" : "rounded-full border-3 border-gray-300 p-1 shadow-xl"}>
                            <img src={samsung} className=' w-20 h-20  object-cover rounded-full' alt="" />
                        </div>
                        <p>Samsung </p>
                    </div>
                    <div className="text-center font-semibold hover:scale-110 transition-all duration-300 hover:cursor-pointer">
                        <div onClick={() => {setActive("menu5"); setProductDetails(products[4])}} className={active === "menu5" ? "rounded-full border-3 border-green-500 p-1 shadow-xl" : "rounded-full border-3 border-gray-300 p-1 shadow-xl"}>
                            <img src={earbuds} className=' w-20 h-20  object-cover rounded-full' alt="" />
                        </div>
                        <p>Earbuds</p>
                    </div>
                    <div className="text-center font-semibold hover:scale-110 transition-all duration-300 hover:cursor-pointer">
                        <div onClick={() => {setActive("menu6"); setProductDetails(products[5])}}  className={active === "menu6" ? "rounded-full border-3 border-green-500 p-1 shadow-xl" : "rounded-full border-3 border-gray-300 p-1 shadow-xl"}>
                            <img src={mouse} className=' w-20 h-20  object-cover rounded-full' alt="" />
                        </div>
                        <p>Mouse</p>
                    </div>
                    <div className="text-center font-semibold hover:scale-110 transition-all duration-300 hover:cursor-pointer">
                        <div onClick={() => {setActive("menu7"); setProductDetails(products[6])}} className={active === "menu7" ? "rounded-full border-3 border-green-500 p-1 shadow-xl" : "rounded-full border-3 border-gray-300 p-1 shadow-xl"}>
                            <img src={keyboard} className=' w-20 h-20  object-cover rounded-full' alt="" />
                        </div>
                        <p>Keyboard</p>
                    </div>
                    
                </div>
            </div>

            
            <div className='mt-10 flex bg-gray-100 p-5 rounded-md justify-between'>
                
                <div className=' bg-white w-[32%] p-5'>
                    <img src={productDetails.image} className=' w-100 h-100 object-contain' alt="" />
                </div>
                <div className='w-[66%] bg-white text-black p-10'>
                    <h1 className=' text-xl font-semibold mb-5 text-green-500 '>Product Details</h1>
                    <div className=' grid grid-cols-2 text-lg'>
                        <div className=' font-semibold py-2'>
                            <h1>Product Name</h1>
                        </div>
                        <div className=' py-2'  >
                            <h1>{productDetails.name}</h1>
                        </div>
                        <div className=' font-semibold py-2'>
                            <h1>Product Price</h1>
                        </div>
                        <div className=' py-2'>
                            <h1>{productDetails.price}</h1>
                        </div>
                        <div className=' font-semibold py-2'>
                            <h1>Product Quantity Now</h1>
                        </div>
                        <div className=' py-2'>
                            <h1>{productDetails.quantityNow}</h1>
                        </div>
                        <div className=' font-semibold py-2'>
                            <h1>Product Total Quantity</h1>
                        </div>
                        <div className=' py-2'>
                            <h1>{productDetails.totalQuantity}</h1>
                        </div>
                        <div className=' font-semibold py-2'>
                            <h1>Product Category</h1>
                        </div>
                        <div className=' py-2'>
                            <h1>{productDetails.category}</h1>
                        </div>
                    </div>

                    <div className=' grid grid-cols-2 mt-10 text-lg'>
                        <div className='text-lg bg-amber-400 px-5 py-2 shadow-lg w-50  rounded-md  h-fit'>
                            <h1>Product Investment</h1>
                            <h1>$ 2000</h1>
                        </div>
                        <div className='text-lg bg-green-400 px-5 py-2 shadow-lg w-50  rounded-md  h-fit'>
                            <h1>Product Profit</h1>
                            <h1>$ 4000</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main