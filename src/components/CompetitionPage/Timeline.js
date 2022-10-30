import React from 'react'

export default function Timeline(props) {
  return (
    <div className='mx-12 xl:mx-4'>
      <div className='font-Broadway text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-[#f5f1be] my-10 overflow-hidden text-center'>TIMELINE</div>
      <table className="border-collapse border border-[#FFF] text-[#f5f1be] font-ProductSans text-center mx-auto">
        <tbody className="text-sm sm:text-md md:text-lg">
          <tr className='text-xl md:text-3xl'>
            <th>Event</th>
            <th>Date</th>
          </tr>
          <tr>
            <td className='p-4'>Registrasi Ditutup</td>
            <td className='p-4'>21 Oktober 2022</td>
          </tr>
          <tr>
            <td  className='p-4'>Technical Meeting</td>
            <td  className='p-4'>{props.tm}</td>
          </tr>
          <tr>
            <td className='p-4'>Competition</td>
            <td  className='p-4'>26 Oktober 2022</td>
          </tr>
          <tr>
            <td className='p-4'>Closing + Prize Anouncement</td>
            <td className='p-4'>5 November 2022</td>
          </tr>
        </tbody>
        
      </table>
    </div>
  )
}
