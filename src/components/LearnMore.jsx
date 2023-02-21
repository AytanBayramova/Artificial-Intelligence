import React from 'react'
import'./LearnMore.css'
import Button from './Button'
import learnMore from  '../assests/images/learnmore.svg'
const LearnMore = () => {
  return (
    <>
    <div className="learnMore-section row">
    <div className="LearnMore-left-side col-12 col-md-6 col-lg-6 d-flex justify-content-left">
    <img src={learnMore} alt="" className='w-100' />
    </div>

    <div className="LearnMore-right-side col-12 col-md-6 col-lg-6">
    <h3 className='Apply'>Apply AI, Deep Learning and Data Sciece to solve</h3>
    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    <Button butonunIcindekiDeyer="Learn More" klassAdi="btn btn-primary"/>
    </div>
    </div>
    </>
    )
}

export default LearnMore