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
    const [selectedCompe, setSelectedCompe] = useState("");
    const [filteredCompes, setFilteredCompes] = useState("");

    const handleTag = (selectedTag) => {
        selectedTag === selectedCompe ? setSelectedCompe("") : setSelectedCompe(selectedTag)
    }

    useEffect( //filteringCompes
        () => {
            console.log("selectedCompe = " + selectedCompe)
            
            let compeName = selectedCompe.split(' ').slice(0, 1)
            let competition = []

            if (compeName[0] === "Voli") competition = Voli
            else if (compeName[0] === "Badminton") competition = Badminton
            else if (compeName[0] === "Futsal") competition = Futsal
            else if (compeName[0] === "Basket") competition = Basket

            console.log(competition)
            let level = selectedCompe.split(' ').slice(1, 2)
            let gender = selectedCompe.split(' ').slice(-1)
            // console.log(level)
            // console.log(gender)
            setFilteredCompes(
                competition
                    .filter(compe => (compe.level.includes(level)))
                    .filter(compe => (compe.gender.includes(gender)))
            )
            // console.log(filteredCompes)
        }
    , [selectedCompe])

    return (
        <Layout>
            <div className='font-Broadway text-4xl md:text-5xl text-white mt-32 md:mt-36 lg:mt-40 xl:mt-44 mb-10 md:mb-16 lg:mb-24 xl:mb-32 overflow-hidden text-center'>BROWSE COMPETITIONS</div>
            <SplideCompe selectedCompe={selectedCompe} handleTag={handleTag}/>
            <div className='font-Broadway text-4xl md:text-5xl text-[#f5f1be] my-10 mx-5 md:mx-10 overflow-hidden text-center'>SCOREBOARD {selectedCompe}</div>
            <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1<hr className="mt-3"/></div>
                {filteredCompes &&
                    filteredCompes.filter((compe) => {
                        if(compe.date === "26 Oct"){
                            return compe
                        }
                    }).map((compe, index) => (
                        <Score key={index}
                            team1 = {compe.school1}
                            score1 = {compe.score1}
                            team2 = {compe.school2}
                            score2 = {compe.score2}
                        />
                    ))
                }
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 2<hr className="mt-3"/></div>
                {filteredCompes &&
                    filteredCompes.filter((compe) => {
                        if(compe.date == "27 Oct"){
                            return compe
                        }
                    }).map((compe, index) => (
                        <Score key={index}
                            team1 = {compe.school1}
                            score1 = {compe.score1}
                            team2 = {compe.school2}
                            score2 = {compe.score2}
                        />
                    ))
                }
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 3<hr className="mt-3"/></div>
                {filteredCompes &&
                    filteredCompes.filter((compe) => {
                        if(compe.date == "28 Oct"){
                            return compe
                        }
                    }).map((compe, index) => (
                        <Score key={index}
                            team1 = {compe.school1}
                            score1 = {compe.score1}
                            team2 = {compe.school2}
                            score2 = {compe.score2}
                        />
                    ))
                }


            </div>
        </Layout>
  )
}

