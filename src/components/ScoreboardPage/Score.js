import React from 'react';

export default function Score(props){
    return(
        <div className='grid grid-cols-3 gap-x-5 my-12 bg-red-900 border-2 border-gold rounded-3xl p-5'>
            <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:p-10"><div className="bg-gray-900 text-3xl font-bold rounded-3xl -mb-12">{props.team1}</div> <br/> {props.score1}</div>
            <div className="text-9xl font-bold rounded-3xl align-middle my-auto">VS <br/> <div className="text-xl mt-5 underline">Details</div></div>
            <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:p-10"><div className="bg-gray-900 text-3xl font-bold rounded-3xl -mb-12">{props.team2}</div> <br/> {props.score2}</div>
        </div>
    )
}