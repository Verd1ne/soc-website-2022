import React, { useState, useEffect } from 'react'

export default function Livescoreboard() {

  const [datas, setDatas] = useState([])
  const sheetID = '1pk-6GLpbx3yRb52osPydVpdsesJbtXE-Mf_VgX5irMA'
  const key = 'AIzaSyCyeHkUFZ5kWAwhCQZAm_hrOWPDUNfx_Lw'
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}?key=${key}`;

  const getData = () => {
    fetch(endpoint).then(response => response.json()).then(data => {
      data?.sheets.forEach(s => {
        const sheetName = s.properties.title;
        const API = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values:batchGet?ranges=${sheetName}&majorDimension=ROWS&key=${key}`;
        fetch(API).then(response => response.json()).then(data => {
          let rows = data.valueRanges[0].values;

          setDatas(rows)
        });
      });
    });
  }
    
  useEffect(() => {
    setTimeout(() => {
      getData();;
    }, 10000)
    }, [datas]);


  return (
    <div>livescoreboard</div>
  )
}
