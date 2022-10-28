import { Container } from 'postcss';
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import SplideCompe from '../../components/ScoreboardPage/SplideCompe';
import Score from '../../components/ScoreboardPage/Score';
import Voli from '../../components/ScoreboardPage/Voli'

export default function Scoreboard( props ) {

    return (
        <Layout>
            <SplideCompe/>
            <div className='font-Broadway text-5xl text-[#f5f1be] my-10 overflow-hidden text-center'>SCOREBOARD BASKET</div>
            <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1<hr className="mt-3"/></div>
                <Score
                    team1 = "SMAK 1 PENABUR C (PUTRA)"
                    score1 = "LOSE"
                    team2 = "SMAK GADING SERPONG (PUTRA)"
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
            <div className='font-Broadway text-5xl text-[#f5f1be] my-10 overflow-hidden text-center mt-96'>SCOREBOARD VOLI</div>
            <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1<hr className="mt-3"/></div>
                <Score
                    team1 = "SMA KOLESE KANISIUS (PUTRA)"
                    score1 = "1"
                    team2 = "SMA RICCI (PUTRA)"
                    score2 = "2"
                />
                <Score
                    team1 = "SMAN 12 TANGSEL (PUTRA)"
                    score1 = "2"
                    team2 = "SMA SANTO PAULUS (PUTRA)"
                    score2 = "0"
                />
                <Score
                    team1 = "SMA YP KARYA (PUTRA)"
                    score1 = "2"
                    team2 = "SMA CANDRA NAYA (PUTRA)"
                    score2 = "0"
                />
                <Score
                    team1 = "SMA MARSUDIRINI BEKASI (PUTRA)"
                    score1 = "1"
                    team2 = "SMA KSATRYA 51 (PUTRA)"
                    score2 = "2"
                />
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 2<hr className="mt-3"/></div>
                <Score
                    team1 = "SMAK 1 PENABUR A (PUTRA)"
                    score1 = "1"
                    team2 = "SMA SANTO PAULUS (PUTRA)"
                    score2 = "2"
                />
                <Score
                    team1 = "SMA RICCI (PUTRA)"
                    score1 = "0"
                    team2 = "SMAN 45 (PUTRA)"
                    score2 = "2"
                />
                <Score
                    team1 = "SMA SANTO PAULUS (PUTRI)"
                    score1 = "0"
                    team2 = "SMA RICCI (PUTRI)"
                    score2 = "2"
                />
                <Score
                    team1 = "SMA SANTA URSULA (PUTRI)"
                    score1 = "1"
                    team2 = "SMA CANDRA NAYA (PUTRI)"
                    score2 = "2"
                />
            </div>
        </Layout>
  )
}

