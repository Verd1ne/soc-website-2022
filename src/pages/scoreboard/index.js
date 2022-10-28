import { Container } from 'postcss';
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import SplideCompe from '../../components/ScoreboardPage/SplideCompe';
import Score from '../../components/ScoreboardPage/Score';

export default function Scoreboard( props ) {

    return (
        <Layout>
            <SplideCompe/>
            <div className='font-Broadway text-5xl text-[#f5f1be] my-10 overflow-hidden text-center'>SCOREBOARD BASKET</div>
            <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:px-24 mx-11 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1<hr className="mt-3"/></div>
                <Score
                    team1 = "SMAK 1 PENABUR"
                    score1 = "0"
                    team2 = "SMAK GADING SERPONG"
                    score2 = "5"
                />
                <div className='grid grid-cols-3 gap-x-5 bg-red-900 border-2 border-gold rounded-3xl p-5'>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10"><div className="bg-gray-900 text-5xl font-bold rounded-3xl -mb-12">SMAK 1 PENABUR</div> <br/> 0</div>
                    <div className="text-9xl font-bold rounded-3xl align-middle my-auto">VS <br/> <div className="text-xl mt-5 underline">Details</div></div>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10"><div className="bg-gray-900 text-5xl font-bold rounded-3xl -mb-12">SMAK GADING SERPONG</div> <br/> 0</div>
                </div>
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 2<hr className="mt-3"/></div>
                <div className='grid grid-cols-3 gap-x-5 my-12 bg-red-900 border-2 border-gold rounded-3xl p-5'>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10"><div className="bg-gray-900 text-5xl font-bold rounded-3xl -mb-12">SMAK 1 PENABUR</div> <br/> 0</div>
                    <div className="text-9xl font-bold rounded-3xl align-middle my-auto">VS <br/> <div className="text-xl mt-5 underline">Details</div></div>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10"><div className="bg-gray-900 text-5xl font-bold rounded-3xl -mb-12">SMAK GADING SERPONG</div> <br/> 0</div>
                </div>
                <div className='grid grid-cols-3 gap-x-5 bg-red-900 border-2 border-gold rounded-3xl p-5'>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10"><div className="bg-gray-900 text-5xl font-bold rounded-3xl -mb-12">SMAK 1 PENABUR</div> <br/> 0</div>
                    <div className="text-9xl font-bold rounded-3xl align-middle my-auto">VS <br/> <div className="text-xl mt-5 underline">Details</div></div>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10"><div className="bg-gray-900 text-5xl font-bold rounded-3xl -mb-12">SMAK GADING SERPONG</div> <br/> 0</div>
                </div>
            </div>
        </Layout>
  )
}

