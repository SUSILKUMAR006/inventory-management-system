import React from 'react'

function Billing() {
  return (
    <div className='mx-10 bg-white shadow-md px-10 py-3 rounded-md'>
      {/* <div>
        <h1 className='text-xl'>Billing Informations</h1>
      </div> */}

      {/* <div className='my-10'>
        <table className='w-full mt-5 border-2 border-gray-300 '>
          <thead className='bg-gray-200 border-2 border-gray-300'>
            <tr className=''>
              <th className='border-2 border-gray-300 px-4 py-2'>S No</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Customer Name</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Phone No</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Billing No</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Date</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Review</th>
            </tr>
          </thead>

     
            <tbody>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>1</td>
                <td className='border-2 border-gray-300 px-4 py-2'>John Doe</td>
                <td className='border-2 border-gray-300 px-4 py-2'>123-456-7890</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX31</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-01</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>2</td>
                <td className='border-2 border-gray-300 px-4 py-2'>Emma Wilson</td>
                <td className='border-2 border-gray-300 px-4 py-2'>234-567-8901</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX32</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-02</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>3</td>
                <td className='border-2 border-gray-300 px-4 py-2'>Michael Brown</td>
                <td className='border-2 border-gray-300 px-4 py-2'>345-678-9012</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX33</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-03</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>4</td>
                <td className='border-2 border-gray-300 px-4 py-2'>Sophia Davis</td>
                <td className='border-2 border-gray-300 px-4 py-2'>456-789-0123</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX34</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-04</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>5</td>
                <td className='border-2 border-gray-300 px-4 py-2'>James Miller</td>
                <td className='border-2 border-gray-300 px-4 py-2'>567-890-1234</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX35</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-05</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>6</td>
                <td className='border-2 border-gray-300 px-4 py-2'>Olivia Taylor</td>
                <td className='border-2 border-gray-300 px-4 py-2'>678-901-2345</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX36</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-06</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>7</td>
                <td className='border-2 border-gray-300 px-4 py-2'>William Anderson</td>
                <td className='border-2 border-gray-300 px-4 py-2'>789-012-3456</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX37</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-07</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>8</td>
                <td className='border-2 border-gray-300 px-4 py-2'>Ava Thomas</td>
                <td className='border-2 border-gray-300 px-4 py-2'>890-123-4567</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX38</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-08</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>9</td>
                <td className='border-2 border-gray-300 px-4 py-2'>Liam Harris</td>
                <td className='border-2 border-gray-300 px-4 py-2'>901-234-5678</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX39</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-09</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

              <tr className='text-center'>
                <td className='border-2 border-gray-300 px-4 py-2'>10</td>
                <td className='border-2 border-gray-300 px-4 py-2'>Isabella Clark</td>
                <td className='border-2 border-gray-300 px-4 py-2'>012-345-6789</td>
                <td className='border-2 border-gray-300 px-4 py-2'>BX40</td>
                <td className='border-2 border-gray-300 px-4 py-2'>2026-07-10</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <button className='border px-4 py-1 rounded-md bg-blue-400 shadow-lg text-white'>Review</button>
                </td>
              </tr>

            </tbody>
        </table>
      </div> */}

      <div>
        <h1 className='text-2xl font-semibold mb-4'>Create Billing</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className='flex flex-col gap-2 border border-gray-400 px-4 py-2 rounded-md shadow-md'>
            <h1 className='text-xl font-medium text-blue-800 my-2'>Customer Information</h1>
            <div className='flex justify-between gap-2'>
              <input type="text" placeholder='Customer phone' className=' w-[80%] border border-gray-400 px-4 py-2 rounded-md shadow-md' />
              <button className='border px-4 py-2 rounded-md bg-blue-800 shadow-md text-white w-[20%]'>Search</button>
            </div>
            <div>
              <div className="border border-gray-400 p-6 bg-green-100 rounded-md shadow-md flex justify-between items-center mt-5">
                <div className='flex justify-center items-center gap-2 p-4 w-30 h-30 bg-green-200  rounded-full'>
                  <h1 className='text-5xl  font-bold rounded-full '>SK</h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <h1 className='text-xl font-semibold text-blue-800 col-span-2'>Customer Details</h1>
                  <p className='font-semibold'>Name:</p>
                  <p>John Doe</p>
                  <p className='font-semibold'>Email:</p>
                  <p>john.doe@example.com</p>
                  <p className='font-semibold'>Phone:</p>
                  <p>123-456-7890</p>

                </div>
              </div>
              <div>
                <button className='border px-4 py-2 rounded-md text-green-700 hover:bg-green-700 mt-3 cursor-pointer   shadow-md hover:text-white '>+ Add Customer</button>
              </div>


              <div className="mt-10">
                <h1 className='text-xl font-medium text-blue-800 my-2'>Add Product</h1>

                <div className='flex justify-between gap-2'>
                  <input type="text" placeholder='Product Name' className='border border-gray-400 px-4 py-2 rounded-md shadow-md w-[80%]' />
                  <button className='border px-4 py-2 rounded-md bg-blue-800 shadow-md text-white w-[20%] '>Add</button>
                </div>

                <div>
                  <table className='w-full mt-5 border-2 border-gray-300 '>
                    <thead className=''>
                      <tr className=''>
                        <th className='border-2 border-gray-300 px-4 py-2'>Product Name</th>
                        <th className='border-2 border-gray-300 px-4 py-2'>Price</th>
                        <th className='border-2 border-gray-300 px-4 py-2'>Qty</th>
                        <th className='border-2 border-gray-300 px-4 py-2'>Discount</th>
                        <th className='border-2 border-gray-300 px-4 py-2'>Total</th>
                        <th className='border-2 border-gray-300 px-4 py-2'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border-2 border-gray-300 px-4 py-2'>Apple Mac Book</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>$1,299.99</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>1</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>10%</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>$1,169.99</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>
                          <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td className='border-2 border-gray-300 px-4 py-2'>Apple Mac Book</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>$1,299.99</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>1</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>10%</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>$1,169.99</td>
                        <td className='border-2 border-gray-300 px-4 py-2'>
                          <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <button className='border px-3 py-1 rounded-md text-red-700 hover:bg-red-700 mt-5 cursor-pointer   shadow-md hover:text-white '>Clear All</button>
                </div>

                <div className='flex justify-center gap-5 items-center mt-5 '>
                  <div className=' w-[50%]'>
                    <p>Payment Method</p>
                    <select className='border border-gray-400 px-4 py-2 rounded-md shadow-md m-1 w-full'>
                      <option value="cash">Cash</option>
                      <option value="credit_card">Credit Card</option>
                      <option value="debit_card">Debit Card</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>
                  <div className=' w-[50%]'>
                    <p>Sales Person</p>
                    <select className='border border-gray-400 px-4 py-2 rounded-md shadow-md mt-1 w-full'>
                      <option value="john_doe">John Doe</option>
                      <option value="jane_smith">Jane Smith</option>
                      <option value="michael_johnson">Michael Johnson</option>
                    </select>
                  </div>

                </div>
              </div>
              <div className='flex justify-end gap-2 mt-5'>
                <div className=' flex items-center'>
                  <button className='bg-green-500 text-white  px-4 py-2 shadow rounded-md hover:bg-green-600'>Save Invoice</button>
                </div>
                <div className=' flex items-center'>
                  <button className='bg-blue-500 text-white  px-4 py-2 shadow rounded-md hover:bg-blue-600'>Print Invoice</button>
                </div>
              </div>

            </div>
          </div>
          <div className="flex flex-col gap-5 border border-gray-400 bg-gray-100 px-4 py-2 rounded-md shadow-md" >
            <h1 className='text-xl font-medium text-blue-800'>Invoice Preview</h1>
            <div className="border border-gray-400 p-6 shadow-md rounded-md bg-white ">
              <div>
                <div className='text-2xl font-bold text-blue-800'>MyBill<span className='text-orange-400'>Book</span></div>
              </div>
              <div className=' mt-10'>
                <div className="flex justify-end items-center gap-3">
                  <span className=' border-2 border-orange-500 w-10 h-0'></span><h1 className='text-3xl font-bold  text-blue-800'>INVOICE</h1><span className=' border-2 border-orange-500 w-10 h-0'></span>
                </div>
              </div>
              <div className="my-5">
                <h1 className='text-xl font-semibold '>Invoice To</h1>
                <div className="grid grid-cols-2 gap-4">
                  <div className='p-2 '>
                    <p className='font-semibold'>John Doe</p>
                    <p className='text-gray-700'>123 Main St, Anytown, USA</p>
                    <p className='text-gray-700'>john.doe@example.com</p>
                    <p className='text-gray-700'><span>Phone: </span> 901-234-5678</p>
                  </div>
                  <div className='p-2 flex flex-col gap-2 items-end'>
                    <p>Invoice No : <span>INV-001</span></p>
                    <p>Invoice Date : <span>2023-01-01</span></p>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <table className='w-full mt-5'>
                  <thead className='bg-blue-900 border-2 text-white'>
                    <tr className=' ' >
                      <th className='border-2 border-gray-300 p-2'>#</th>
                      <th className='border-2 border-gray-300 p-2'>Product Name</th>
                      <th className='border-2 border-gray-300 p-2'>Price</th>
                      <th className='border-2 border-gray-300 p-2'>Qty</th>
                      <th className='border-2 border-gray-300 p-2'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='text-center'>
                      <td className='border-2 border-gray-300 p-2'>1</td>
                      <td className='border-2 border-gray-300 p-2'>Apple Mac Book</td>
                      <td className='border-2 border-gray-300 p-2'>$1,299.99</td>
                      <td className='border-2 border-gray-300 p-2'>1</td>
                      <td className='border-2 border-gray-300 p-2'>$1,299.99</td>
                    </tr>
                    <tr className='text-center'>
                      <td className='border-2 border-gray-300 p-2'>2</td>
                      <td className='border-2 border-gray-300 p-2'>Samsung Galaxy Tab</td>
                      <td className='border-2 border-gray-300 p-2'>$1,299.99</td>
                      <td className='border-2 border-gray-300 p-2'>1</td>
                      <td className='border-2 border-gray-300 p-2'>$1,299.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-5">
                <div className='grid grid-cols-2 gap-2'>
                  {/* template use this  */}
                  <div>
                  </div>
                  <div className='flex flex-col gap-2 mt-10  '>
                    <div className='flex justify-between items-center gap-5'>
                      <p>Subtotal:</p>
                      <p> $2,599.98</p>
                    </div>
                    <div className='flex justify-between items-center gap-5'>
                      <p>Discount:</p>
                      <p> $10.00</p>
                    </div>
                    <div className='flex justify-between items-center gap-5'>
                      <p>Taxable Amount:</p>
                      <p> $259.99</p>
                    </div>
                    <div className='flex justify-between items-center gap-5'>
                      <p>CGST (9%):</p>
                      <p> $25.99</p>
                    </div>
                    <div className='flex justify-between items-center gap-5'>
                      <p>SGST (9%):</p>
                      <p> $25.99</p>
                    </div>
                    <div className='flex font-bold w-full justify-between items-center gap-5 bg-amber-400 p-2'>
                      <p>Grand Total</p>
                      <p> $2,599.98</p>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className='text-center text-gray-900 mt-10'>Thank you for your business!</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Billing