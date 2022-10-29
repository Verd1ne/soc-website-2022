import { Container } from 'postcss';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import SplideCompe from '../../components/ScoreboardPage/SplideCompe';
import Score from '../../components/ScoreboardPage/Score';
import Voli from '../../components/ScoreboardPage/Voli';
import Basket from '../../components/ScoreboardPage/Basket';
import Badminton from '../../components/ScoreboardPage/Badminton';
import Futsal from '../../components/ScoreboardPage/Futsal';

export default function Scoreboard( props ) {

    return (
        <Layout>

            <div className='font-Broadway text-5xl text-white mt-32 md:mt-36 lg:mt-40 xl:mt-44 mb-8 md:mb-16 lg:mb-24 xl:mb-32 overflow-hidden text-center'>BROWSE COMPETITIONS</div>
            <div className=''>
                {/* <div>BROWSE COMPETITIONS</div> */}
               <SplideCompe/> 
            </div>
            <div className='font-Broadway text-5xl text-[#f5f1be] my-10 overflow-hidden text-center'>SCOREBOARD BASKET</div>
            <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1<hr className="mt-3"/></div>
                {Basket.filter((skorBasket)=> {
                    if (skorBasket.date == "26 Oct"){
                        return skorBasket
                    }
                }).map((skorBasket, index) => {
                    return <Score team1 = {skorBasket.school1} score1 = {skorBasket.score1} team2 = {skorBasket.school2} score2 = {skorBasket.score2}/>
                })}
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 2<hr className="mt-3"/></div>
                {Basket.filter((skorBasket)=> {
                    if (skorBasket.date == "27 Oct"){
                        return skorBasket
                    }
                }).map((skorBasket, index) => {
                    return <Score team1 = {skorBasket.school1} score1 = {skorBasket.score1} team2 = {skorBasket.school2} score2 = {skorBasket.score2}/>
                })}
            </div>
            <div className='font-Broadway text-5xl text-[#f5f1be] my-10 overflow-hidden text-center mt-96'>SCOREBOARD VOLI</div>
            <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1<hr className="mt-3"/></div>
                {Voli.filter((skorVoli)=> {
                    if (skorVoli.date == "26 Oct"){
                        return skorVoli
                    }
                }).map((skorVoli, index) => {
                    return <Score team1 = {skorVoli.school1} score1 = {skorVoli.score1} team2 = {skorVoli.school2} score2 = {skorVoli.score2}/>
                })}
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 2<hr className="mt-3"/></div>
                {Voli.filter((skorVoli)=> {
                    if (skorVoli.date == "27 Oct"){
                        return skorVoli
                    }
                }).map((skorVoli, index) => {
                    return <Score team1 = {skorVoli.school1} score1 = {skorVoli.score1} team2 = {skorVoli.school2} score2 = {skorVoli.score2}/>
                })}
            </div>
            <div className='font-Broadway text-5xl text-[#f5f1be] my-10 overflow-hidden text-center'>SCOREBOARD BADMINTON</div>
            <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1<hr className="mt-3"/></div>
                {Badminton.filter((skorBadminton)=> {
                    if (skorBadminton.date == "26 Oct"){
                        return skorBadminton
                    }
                }).map((skorBadminton, index) => {
                    return <Score team1 = {skorBadminton.school1} score1 = {skorBadminton.score1} team2 = {skorBadminton.school2} score2 = {skorBadminton.score2}/>
                })}
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 2<hr className="mt-3"/></div>
                {Badminton.filter((skorBadminton)=> {
                    if (skorBadminton.date == "27 Oct"){
                        return skorBadminton
                    }
                }).map((skorBadminton, index) => {
                    return <Score team1 = {skorBadminton.school1} score1 = {skorBadminton.score1} team2 = {skorBadminton.school2} score2 = {skorBadminton.score2}/>
                })}
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 3<hr className="mt-3"/></div>
                {Badminton.filter((skorBadminton)=> {
                    if (skorBadminton.date == "28 Oct"){
                        return skorBadminton
                    }
                }).map((skorBadminton, index) => {
                    return <Score team1 = {skorBadminton.school1} score1 = {skorBadminton.score1} team2 = {skorBadminton.school2} score2 = {skorBadminton.score2}/>
                })}
            </div>
            <div className='font-Broadway text-5xl text-[#f5f1be] my-10 overflow-hidden text-center mt-96'>SCOREBOARD FUTSAL</div>
            <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1<hr className="mt-3"/></div>
                {Futsal.filter((skorFutsal)=> {
                    if (skorFutsal.date == "26 Oct"){
                        return skorFutsal
                    }
                }).map((skorFutsal, index) => {
                    return <Score team1 = {skorFutsal.school1} score1 = {skorFutsal.score1} team2 = {skorFutsal.school2} score2 = {skorFutsal.score2}/>
                })}
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 2<hr className="mt-3"/></div>
                {Futsal.filter((skorFutsal)=> {
                    if (skorFutsal.date == "27 Oct"){
                        return skorFutsal
                    }
                }).map((skorFutsal, index) => {
                    return <Score team1 = {skorFutsal.school1} score1 = {skorFutsal.score1} team2 = {skorFutsal.school2} score2 = {skorFutsal.score2}/>
                })}
            </div>
        </Layout>
  )
}

