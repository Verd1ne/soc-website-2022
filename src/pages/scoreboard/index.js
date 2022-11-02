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
            // console.log("selectedCompe = " + selectedCompe)
            
            let compeName = selectedCompe.split(' ').slice(0, 1)
            let competition = []

            if (compeName[0] === "Voli") competition = Voli
            else if (compeName[0] === "Badminton") competition = Badminton
            else if (compeName[0] === "Futsal") competition = Futsal
            else if (compeName[0] === "Basket") competition = Basket

            let level = selectedCompe.split(' ').slice(1, 2)
            let gender = selectedCompe.split(' ').slice(-1)

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
            <div className='font-Broadway text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mt-32 md:mt-36 lg:mt-40 xl:mt-44 mb-10 md:mb-16 lg:mb-24 xl:mb-32 overflow-hidden text-center'>BROWSE COMPETITIONS</div>
            <SplideCompe selectedCompe={selectedCompe} handleTag={handleTag}/>
            <div className='font-Broadway text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-[#f5f1be] my-10 mx-5 md:mx-10 overflow-hidden text-center'>SCOREBOARD {selectedCompe}</div>
            {!selectedCompe ? 
                (
                    <div className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-[#f5f1be] my-10 mx-5 md:mx-10 overflow-hidden text-center font-ProductSans">(Anda belum memilih lomba)</div>
                ) : (
                    <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:mx-0">
                        {filteredCompes.filter((compe) => {
                            if(compe.juara === "true"){
                                return compe
                            }
                        }).map((compe, index) => (
                           <div className="grid grid-cols-3 bg-gray-900 rounded-xl text-center mx-auto gap-x-5">
                                <div className="ml-2 my-3">
                                    <div className="text-gold bg-red-900 rounded-xl">1st Place</div>
                                    <div className="bg-[#040030] mt-5 rounded-xl border-2 border-gold h-[200px] w-fit align-center mx-auto px-3 py-2">
                                        <p className="text-sm lg:text-3xl text-gold">{compe.first}</p>
                                        <hr/>
                                        <p className="mt-2 text-[12px] md:text-xl">{compe.first1}</p>
                                        <p className="mt-1 text-[12px] md:text-xl">{compe.first2}</p>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="text-[#C0C0C0] bg-red-900 rounded-xl">2nd Place</div>
                                    <div className="bg-[#040030] mt-5 rounded-xl border-2 border-[#C0C0C0] h-[200px] w-fit align-center mx-auto px-3 py-2">
                                        <p className="text-sm md:text-3xl text-[#C0C0C0]">{compe.second}</p>
                                        <hr/>
                                        <p className="mt-2 text-[12px] md:text-xl">{compe.second1}</p>
                                        <p className="mt-1 text-[12px] md:text-xl">{compe.second2}</p>
                                    </div>
                                </div>
                                <div className="mr-2 my-3">
                                    <div className="text-[#CD7F32] bg-red-900 rounded-xl">3rd Place</div>
                                    <div className="bg-[#040030] mt-5 rounded-xl border-2 border-[#CD7F32] h-[200px] w-fit align-center mx-auto px-3 py-2">
                                        <p className="text-sm md:text-3xl text-[#CD7F32]">{compe.third}</p>
                                        <hr/>
                                        <p className="mt-2 text-[12px] md:text-xl">{compe.third1}</p>
                                        <p className="mt-1 text-[12px] md:text-xl">{compe.third2}</p>
                                    </div>
                                </div>
                           </div> 
                        ))}
                        <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1 (26 Oct)<hr className="mt-3"/></div>
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
                                    set1 = {compe.set1}
                                    set2 = {compe.set2}
                                    set3 = {compe.set3}
                                    set4 = {compe.set4}
                                    set5 = {compe.set5}
                                />
                            ))
                        }
                    <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 2 (27 Oct)<hr className="mt-3"/></div>
                    {filteredCompes &&
                        filteredCompes.filter((compe) => {
                            if(compe.date === "27 Oct"){
                                return compe
                            }
                        }).map((compe, index) => (
                            <Score key={index}
                                team1 = {compe.school1}
                                score1 = {compe.score1}
                                team2 = {compe.school2}
                                score2 = {compe.score2}
                                set1 = {compe.set1}
                                set2 = {compe.set2}
                                set3 = {compe.set3}
                                set4 = {compe.set4}
                                set5 = {compe.set5}
                            />
                        ))
                    }
                    <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 3 (28 Oct)<hr className="mt-3"/></div>
                    {filteredCompes &&
                        filteredCompes.filter((compe) => {
                            if(compe.date === "28 Oct"){
                                return compe
                            }
                        }).map((compe, index) => (
                            <Score key={index}
                                team1 = {compe.school1}
                                score1 = {compe.score1}
                                team2 = {compe.school2}
                                score2 = {compe.score2}
                                set1 = {compe.set1}
                                set2 = {compe.set2}
                                set3 = {compe.set3}
                                set4 = {compe.set4}
                                set5 = {compe.set5}
                            />
                        ))
                    }
                    <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 4 (29 Oct)<hr className="mt-3"/></div>
                    {filteredCompes &&
                        filteredCompes.filter((compe) => {
                            if(compe.date === "29 Oct"){
                                return compe
                            }
                        }).map((compe, index) => (
                            <Score key={index}
                                team1 = {compe.school1}
                                score1 = {compe.score1}
                                team2 = {compe.school2}
                                score2 = {compe.score2}
                                set1 = {compe.set1}
                                set2 = {compe.set2}
                                set3 = {compe.set3}
                                set4 = {compe.set4}
                                set5 = {compe.set5}
                            />
                        ))
                    }
                    <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 5 (31 Oct)<hr className="mt-3"/></div>
                    {filteredCompes &&
                        filteredCompes.filter((compe) => {
                            if(compe.date === "31 Oct"){
                                return compe
                            }
                        }).map((compe, index) => (
                            <Score key={index}
                                team1 = {compe.school1}
                                score1 = {compe.score1}
                                team2 = {compe.school2}
                                score2 = {compe.score2}
                                set1 = {compe.set1}
                                set2 = {compe.set2}
                                set3 = {compe.set3}
                                set4 = {compe.set4}
                                set5 = {compe.set5}
                            />
                        ))
                    }
                     <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 6 (1 Nov)<hr className="mt-3"/></div>
                    {filteredCompes &&
                        filteredCompes.filter((compe) => {
                            if(compe.date === "1 Nov"){
                                return compe
                            }
                        }).map((compe, index) => (
                            <Score key={index}
                                team1 = {compe.school1}
                                score1 = {compe.score1}
                                team2 = {compe.school2}
                                score2 = {compe.score2}
                                set1 = {compe.set1}
                                set2 = {compe.set2}
                                set3 = {compe.set3}
                                set4 = {compe.set4}
                                set5 = {compe.set5}
                            />
                        ))
                    }
                </div>
            )}
        </Layout>
  )
}

