import './Introduction.css'
import React from 'react'
import Button from './Button'
import Icon from "../assests/images/play-icon.svg"
import rightSideImg from "../assests/images/profile.svg"
import Typed from 'react-typed';

const Introduction = () => {
  return (
    <div className='Introduction-section row'>
        <div className="intro-lefts-side col-12 col-md-6">
            <h6>Next genaretion platform</h6>
            <Typed
            className='yaziEffekti'
                strings={[
                    'Artificial Intelligence',
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                   
                    loop >
                   
                </Typed>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <Button butonunIcindekiDeyer="Get started" klassAdi="btn btn-success"/>
            <Button butonunIcindekiDeyer="Watch video" klassAdi="btn btn-danger" iconShekli={Icon}/>

        </div>
        <div className="intro-righr-side col-12 col-md-6 d-flex justify-content-end">
            <img src={rightSideImg} alt="" className='w-100'/>
        </div>
    </div>
  )
}

export default Introduction