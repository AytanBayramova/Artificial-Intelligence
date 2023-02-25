import React from 'react'
import Awards from './Awards'
import mukafatMelumatlari from "./awardsInfo.json"
import './Awards.css'

const AwardsContainer = () => {
  return (
    <div className='row awardas-container'>
       {
        mukafatMelumatlari.map(melumat => (
            <Awards kartinBasligi = {melumat.meqaleninBasligi} meqaleKartininSekli={melumat.shekil} meqalemetniProps={melumat.meqaleninMetni}/>
        ))
       }
       
       
    </div>
  )
}

export default AwardsContainer