import React from 'react'

export default function Timeline(props) {
  return (
    <>
      <div className='font-Broadway text-6xl text-[#f5f1be] my-10 overflow-hidden text-center'>TIMELINE</div>
      <table className="border-collapse border border-[#FFF] text-[#f5f1be] font-ProductSans text-center">
        <tbody className="text-xs md:text-lg">
          <tr className='text-xl md:text-3xl'>
            <th>Event</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Registrasi Ditutup</td>
            <td>21 Oktober 2022</td>
          </tr>
          <tr>
            <td>Technical Meeting</td>
            <td>{props.tm}</td>
          </tr>
          <tr>
            <td>Competition</td>
            <td>26 Oktober 2022</td>
          </tr>
          <tr>
            <td>Closing + Prize Anouncement</td>
            <td>5 November 2022</td>
          </tr>
        </tbody>
        
      </table>
    </>
  )
}
