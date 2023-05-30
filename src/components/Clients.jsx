import React from 'react'
import './Clients.css'
import clientsekli from "../assests/images/clients.svg"

const Clients = () => {
  return (
    <>
    <div className="clients-section row">
    <div className="clients-right-side col-12 col-md-6 col-lg-6">
    <h3 className='h3clients'>What our clients say about our awesome solutions</h3>
    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
    <p>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
    <div className="clients-left-side col-12 col-md-6 col-lg-6 d-flex justify-content-left">
    <img src={clientsekli} alt="" className=' clientshekli w-100' />
    </div>
    </div>
    </>
  )
}


export default Clients
