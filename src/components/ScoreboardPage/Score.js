import React from 'react';


export default function Score(props){
    return(
        <div>
            <div className='grid grid-cols-3 gap-x-5 my-12 bg-red-900 border-2 border-gold rounded-3xl p-5 text-center align-center px-auto'>
                <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                    <div className="bg-gray-900 text-[7px] xl:text-3xl md:text-lg xl:rounded-2xl rounded-lg xl:p-3 p-2 grid place-items-center py-auto xl:h-[95px] h-[70px] w-fit">{props.team1}</div>
                    <div className="xl:text-7xl xl:mt-12 mt-3">{props.score1}</div>
                </div>
                <div className="lg:text-9xl md:text-4xl text-2xl font-bold rounded-3xl align-middle my-auto">VS <br/> <div className="text-xs xl:text-xl xl:mt-5 underline">Details</div></div>
                <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                    <div className="bg-gray-900 text-[7px] xl:text-3xl md:text-lg xl:rounded-2xl rounded-lg xl:p-3 p-2 grid place-items-center py-auto xl:h-[95px] h-[70px] w-fit">{props.team2}</div>
                    <div className="xl:text-7xl xl:mt-12 mt-3">{props.score2}</div>
                </div>        
            </div>      
        </div>
    )
}