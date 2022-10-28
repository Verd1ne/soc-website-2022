import { Container } from 'postcss';
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import SplideCompe from '../../components/ScoreboardPage/SplideCompe';

export default function Scoreboard( props ) {

    return (
        <Layout>
            <div className='font-Broadway text-5xl text-white mt-32 md:mt-36 lg:mt-40 xl:mt-44 mb-8 md:mb-16 lg:mb-24 xl:mb-32 overflow-hidden text-center'>BROWSE COMPETITIONS</div>
            <div className=''>
                {/* <div>BROWSE COMPETITIONS</div> */}
               <SplideCompe className=""/> 
            </div>
            <div className="bg-black text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center lg:ml-7 xl:ml-13 md:mt-[70px] border-4 border-[gold] bg-grey-300 px-10 md:px-24 mx-11 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl my-5'>SMAK 1 PENABUR</div>
                <div className='grid grid-cols-2 gap-x-5'>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10">0</div>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10">1</div>
                </div>
                <div className="text-white text-3xl sm:text-4xl lg:text-5xl my-5">VS</div>
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10">0</div>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10">6</div>
                </div>
                <div className='text-white text-3xl lg:text-5xl my-5'>SMAK 7 PENABUR</div>
            </div>
        </Layout>
  )
}

