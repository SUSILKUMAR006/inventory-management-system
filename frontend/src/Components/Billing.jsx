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
        <div className="grid grid-cols-2 gap-4">
          <div className='flex flex-col gap-2 '>
              <h1 className='text-xl font-medium text-blue-800'>Customer Information</h1>
              <div className='flex justify-between gap-2'>
              <input type="text" placeholder='Customer phone' className=' w-[80%] border border-gray-400 px-4 py-2 rounded-md shadow-md'/>
              <button className='border px-4 py-2 rounded-md bg-blue-800 shadow-md text-white w-[20%]'>Search</button>
              </div>
              <div className="border border-gray-400 p-6">
                <div className='flex justify-center items-center gap-2 p-4 w-30 h-30 bg-green-200  rounded-full'>
                  <h1 className='text-5xl  font-bold rounded-full '>SK</h1>
                </div>
              </div>
          </div>

          <div>
            <h1 className='text-xl font-medium text-blue-800'>Billing Information</h1>
            <div className='flex flex-col gap-2'>
              <input type="text" placeholder='Billing No' className='border border-gray-400 px-4 py-2 rounded-md shadow-md'/> 
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Billing