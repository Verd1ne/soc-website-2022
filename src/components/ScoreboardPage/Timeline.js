import React from 'react'

export default function Timeline(props) {
  return (
    <>
      <div className='font-Broadway text-5xl md:text-6xl text-[#f5f1be] my-10 overflow-hidden text-center'>TIMELINE</div>
      <table className="border-collapse border border-[#FFF] text-[#f5f1be] font-ProductSans text-center">
        <tbody className="text-xs sm:text-md md:text-lg m-0 p-0 sm:px-auto">
          <tr className='text-xl md:text-3xl px-0 sm:p-auto'>
            <th>Event</th>
            <th>Date</th>
          </tr>
          <tr>
            <td className='mx-0 px-0 sm:px-auto'>Registrasi Ditutup</td>
            <td className='mx-0 px-0 sm:px-auto'>21 Oktober 2022</td>
          </tr>
          <tr>
            <td className='mx-0 px-0 sm:px-auto'>Technical Meeting</td>
            <td className='mx-0 px-0 sm:px-auto'>{props.tm}</td>
          </tr>
          <tr>
            <td>Competition</td>
            <td className='mx-0 px-0 sm:px-auto'>26 Oktober 2022</td>
          </tr>
          <tr>
            <td className='mx-0 px-0 sm:px-auto'>Closing + Prize Anouncement</td>
            <td className='mx-0 px-0 sm:px-auto'>5 November 2022</td>
          </tr>
        </tbody>
        
      </table>
    </>
  )
}
