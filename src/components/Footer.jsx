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
        <div className="elaqe">
          <img className='telefonLogo' src={telsekli} alt="" />
          <p>Phone: (064) 332-1233</p>
          <img className='mailLogo' src={mailSekli} alt="" />
          <p>Company@gmail.com.com</p>
          <img className='unvanLogo' src={unvanSekli} alt="" />
          <p>450 Wall Street, USA, New York</p>    
        </div>   
      </div>
    </div>
  )
}

export default Footer
