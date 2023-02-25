import React from 'react'
import './Footer.css'
import SonLogo from '../assests/images/endlogo.svg'
import mailSekli from '../assests/images/mail.svg'
import telsekli from '../assests/images/tel.svg'
import unvanSekli from '../assests/images/unvan.svg'

const Footer = () => {
  return (
    <div className='sonHisse row'>

      <div className="ilkHisse">
        <img src={SonLogo} alt="" className='sonlogo' />
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>

        <div className="mail">
          <img src={mailSekli} alt="" />
          <p>Company@gmail.com.com</p>
        </div>

        <div className="telefon">
          <img src={telsekli} alt="" />
          <p>Phone: (064) 332-1233</p>
        </div>

        <div className="unvan">
          <img src={unvanSekli} alt="" />
          <p>450 Wall Street, USA, New York</p>
        </div>

      </div>


      <div className="ikinciHisse"></div>


      <div className="ucuncuHisse"></div>


      <div className="dorduncuHisse"></div>


      <div className="besinciHisse"></div>


    </div>
  )
}

export default Footer