import React from 'react'

const Awards = ({kartinBasligi, meqaleKartininSekli, meqalemetniProps}) => {
  return (

<div className="card col-12 col-md-3 col-lg-2" >
  <img src={meqaleKartininSekli} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{kartinBasligi}</h5>
    <p className="card-text">{meqalemetniProps}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


  )
}

export default Awards