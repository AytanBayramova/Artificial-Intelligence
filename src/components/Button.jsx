import React from 'react'

const Button = ({butonunIcindekiDeyer, klassAdi, iconShekli}) => {
  return (
    <button className={klassAdi}>{iconShekli && <img src={iconShekli} />} {butonunIcindekiDeyer}</button>
  )
}

export default Button
