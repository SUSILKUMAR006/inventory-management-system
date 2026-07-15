import React from 'react'

function Footer() {
    return (
        <div>

            <div className='bg-green-700 grid grid-cols-3 text-white p-10 text-center'>
                <div>
                    <h1 className=' text-2xl font-semibold'>Sales Mart 📦</h1>
                    <p className=' text-sm'>Your one-stop solution for all your sales needs. We provide a comprehensive platform to manage your products, track sales, and analyze performance.</p>
                </div>
                <div>
                    <h2 className=' text-xl font-semibold'>Contact Us</h2>
                    
                    <p className=''>Email : susil@gmail.com</p>
                    <p >Phone : 123-456-7890</p>
                </div>
                <div className=''>
                    <h2 className=' text-xl font-semibold'>Follow Us</h2>
                    <div className=' flex gap-4 justify-center mt-2'>
                        <a href="#" className=' hover:text-green-300'>Facebook</a>
                        <a href="#" className=' hover:text-green-300'>Twitter</a>
                        <a href="#" className=' hover:text-green-300'>Instagram</a>
                    </div>
                </div>
            </div>
            <div className='bg-green-800 text-white text-center p-4'>
                <p className='text-sm'>&copy; 2026 Sales Mart. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer