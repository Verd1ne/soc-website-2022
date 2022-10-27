import { Container } from 'postcss';
import React, { useState, useEffect } from 'react'

export default function Scoreboard( props ) {

    const [datas, setDatas] = useState([])
    const sheetID = '1pk-6GLpbx3yRb52osPydVpdsesJbtXE-Mf_VgX5irMA'
    const key = 'AIzaSyCyeHkUFZ5kWAwhCQZAm_hrOWPDUNfx_Lw'
    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}?key=${key}`;

    const getData = () => {
        fetch(endpoint).then(response => response.json()).then(data => {
        data?.sheets.forEach(s => {
            // const sheetName = {s.properties.title};
            const API = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values:batchGet?ranges=${ props.bidang }&valueRenderOption=ROWS&key=${key}`;
            fetch(API).then(response => response.json()).then(data => {
            let rows = data.valueRanges[0].values;

            setDatas(rows)
            });
        });
        });
    }
        
    useEffect(() => {
        setTimeout(() => {
        getData();
        console.log(datas)
        }, 5000)
        }, [datas]);

    return (
        <>
            <div className='font-Broadway text-6xl text-[#f5f1be] my-10 overflow-hidden text-center'>SCOREBOARD</div>
            <div className="infoLomba text-[#f5f1be] md:text-xl lg:text-2xl font-semibold font-ProductSans text-left lg:ml-7 xl:ml-13 md:mt-32 border-4 border-[gold] bg-grey-300 p-3 md:p-5 mt-32 md:mt-40 mx-11 md:mx-0">
                <div className='flex '></div>




                {/* <div className="">Penanggung Jawab :</div>
                <ul className="text md:text-base lg:text-lg font-normal ml-3 mb-2 lg:mb-5 list-disc">
                    <li>{contact[0]}</li>
                    <li className={`${!contact[1] ? "hidden" : ""}`}>{contact[1]}</li>
                </ul>
                <a href={"../../PDFrules/" + props.namaLomba + ".pdf"} download><u>Download PDF Rules</u></a> */}
            </div>

        
        
        </>
  )
}

