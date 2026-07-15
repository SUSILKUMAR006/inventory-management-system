import React from 'react'

function Supplier() {
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
            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>1</td>
              <td className='border-2 border-gray-300 px-4 py-2'>John Doe</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Apple MacBook Pro</td>
              <td className='border-2 border-gray-300 px-4 py-2'>123-456-7890</td>
              <td className='border-2 border-gray-300 px-4 py-2'>john.doe@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>123 Main St, New York</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Tech Solutions Inc.</td>
            </tr>

            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>2</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Jane Smith</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Dell XPS 15</td>
              <td className='border-2 border-gray-300 px-4 py-2'>234-567-8901</td>
              <td className='border-2 border-gray-300 px-4 py-2'>jane.smith@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>456 Oak Ave, Chicago</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Innovate Corp.</td>
            </tr>

            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>3</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Michael Brown</td>
              <td className='border-2 border-gray-300 px-4 py-2'>HP Spectre x360</td>
              <td className='border-2 border-gray-300 px-4 py-2'>345-678-9012</td>
              <td className='border-2 border-gray-300 px-4 py-2'>michael@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>789 Pine Rd, Dallas</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Global Systems</td>
            </tr>

            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>4</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Emily Johnson</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Lenovo ThinkPad X1</td>
              <td className='border-2 border-gray-300 px-4 py-2'>456-789-0123</td>
              <td className='border-2 border-gray-300 px-4 py-2'>emily@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>321 Cedar St, Seattle</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Cloud Tech</td>
            </tr>

            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>5</td>
              <td className='border-2 border-gray-300 px-4 py-2'>David Wilson</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Asus ROG Zephyrus</td>
              <td className='border-2 border-gray-300 px-4 py-2'>567-890-1234</td>
              <td className='border-2 border-gray-300 px-4 py-2'>david@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>654 Maple St, Boston</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Future Labs</td>
            </tr>

            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>6</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Sophia Davis</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Acer Aspire 7</td>
              <td className='border-2 border-gray-300 px-4 py-2'>678-901-2345</td>
              <td className='border-2 border-gray-300 px-4 py-2'>sophia@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>987 Birch St, Miami</td>
              <td className='border-2 border-gray-300 px-4 py-2'>NextGen IT</td>
            </tr>

            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>7</td>
              <td className='border-2 border-gray-300 px-4 py-2'>James Miller</td>
              <td className='border-2 border-gray-300 px-4 py-2'>MSI Modern 14</td>
              <td className='border-2 border-gray-300 px-4 py-2'>789-012-3456</td>
              <td className='border-2 border-gray-300 px-4 py-2'>james@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>741 Elm St, Denver</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Smart Innovations</td>
            </tr>

            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>8</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Olivia Taylor</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Samsung Galaxy Book</td>
              <td className='border-2 border-gray-300 px-4 py-2'>890-123-4567</td>
              <td className='border-2 border-gray-300 px-4 py-2'>olivia@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>852 Walnut St, Austin</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Bright Tech</td>
            </tr>

            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>9</td>
              <td className='border-2 border-gray-300 px-4 py-2'>William Anderson</td>
              <td className='border-2 border-gray-300 px-4 py-2'>LG Gram 16</td>
              <td className='border-2 border-gray-300 px-4 py-2'>901-234-5678</td>
              <td className='border-2 border-gray-300 px-4 py-2'>william@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>963 Lake View, Phoenix</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Digital Works</td>
            </tr>

            <tr className='text-center'>
              <td className='border-2 border-gray-300 px-4 py-2'>10</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Emma Thomas</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Microsoft Surface Laptop</td>
              <td className='border-2 border-gray-300 px-4 py-2'>012-345-6789</td>
              <td className='border-2 border-gray-300 px-4 py-2'>emma@email.com</td>
              <td className='border-2 border-gray-300 px-4 py-2'>159 River Rd, San Francisco</td>
              <td className='border-2 border-gray-300 px-4 py-2'>Alpha Technologies</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Supplier