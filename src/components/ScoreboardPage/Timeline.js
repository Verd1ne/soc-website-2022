import React from 'react'

export default function () {
  return (
    <>
      <div className='font-Broadway text-6xl text-[#f5f1be] my-6 overflow-hidden text-center'>TIMELINE</div>
      <table className="border-collapse border border-[#FFF] text-[#f5f1be] font-ProductSans">
        <tbody>
          <tr className='text-3xl'>
            <th>Event</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Registrasi Ditutup</td>
            <td>PENDING</td>
          </tr>
          <tr>
            <td>Technical Meeting</td>
            <td>PENDING</td>
          </tr>
          <tr>
            <td>Competition Begins</td>
            <td>PENDING</td>
          </tr>
          <tr>
            <td>Closing</td>
            <td>PENDING</td>
          </tr>
        </tbody>
        
      </table>
    </>
  )
}
