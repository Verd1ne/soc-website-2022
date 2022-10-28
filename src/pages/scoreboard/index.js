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
                    score1 = "LOSE"
                    team2 = "SMAK GADING SERPONG"
                    score2 = "WIN"
                />
                <Score
                    team1 = "SMAK 1 PENABUR"
                    score1 = "0"
                    team2 = "SMAK GADING SERPONG"
                    score2 = "5"
                />
                <Score
                    team1 = "SMAK 1 PENABUR"
                    score1 = "0"
                    team2 = "SMAK GADING SERPONG"
                    score2 = "5"
                />
                <Score
                    team1 = "SMAK 1 PENABUR"
                    score1 = "0"
                    team2 = "SMAK GADING SERPONG"
                    score2 = "5"
                />
            </div>
        </Layout>
  )
}

