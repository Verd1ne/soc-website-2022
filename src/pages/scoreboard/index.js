import { Container } from 'postcss';
import React, { useState, useEffect } from 'react'

export default function Scoreboard( props ) {

    const [datas, setDatas] = useState([])
    const sheetID = '1pk-6GLpbx3yRb52osPydVpdsesJbtXE-Mf_VgX5irMA'
    const key = 'AIzaSyCyeHkUFZ5kWAwhCQZAm_hrOWPDUNfx_Lw'
    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}?key=${key}`;

    // const getData = () => {
    //     fetch(endpoint).then(response => response.json()).then(data => {
    //     data?.sheets.forEach(s => {
    //         // const sheetName = {s.properties.title};
    //         const API = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values:batchGet?ranges=${ props.bidang }&valueRenderOption=ROWS&key=${key}`;
    //         fetch(API).then(response => response.json()).then(data => {
    //         let rows = data.valueRanges[0].values;

    //         setDatas(rows)
    //         });
    //     });
    //     });
    // }
        
    // useEffect(() => {
    //     setTimeout(() => {
    //     getData();
    //     console.log(datas)
    //     }, 5000)
    //     }, [datas]);

    return (
        <>
            <div className='font-Broadway text-5xl text-[#f5f1be] my-10 overflow-hidden text-center'>SCOREBOARD BASKET</div>
            <div className="text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-center md:mt-[70px] px-10 md:px-24 mx-11 md:mx-0">
                <div className='text-white text-3xl lg:text-5xl mt-24 mb-8 text-left'>DAY 1<hr className="mt-3"/></div>
                <div className='grid grid-cols-3 gap-x-5 my-12 bg-red-900 border-2 border-gold rounded-3xl p-5'>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10"><div className="bg-gray-900 text-5xl font-bold rounded-3xl -mb-12">SMAK 1 C (PUTRA)</div> <br/> 0</div>
                    <div className="text-9xl font-bold rounded-3xl align-middle my-auto">VS <br/> <div className="text-xl mt-5 underline">Details</div></div>
                    <div className="bg-gray-900 text-9xl font-bold rounded-3xl lg:py-10"><div className="bg-gray-900 text-5xl font-bold rounded-3xl -mb-12">SMAK GADING SERPONG (PUTRA)</div> <br/> 0</div>
                </div>
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

        
        
        </>
  )
}

