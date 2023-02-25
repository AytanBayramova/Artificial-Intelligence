import React from 'react'
import Introduction from '../components/Introduction';
import Partnyorlar from '../components/Partnyorlar';
import LearnMore from '../components/LearnMore';
import AwardsContainer from '../components/AwardsContainer';
import Clients from '../components/Clients';
const Home = () => {
  return (
    <div>
     <Introduction/>
    <Partnyorlar/>
    <LearnMore/>
    <AwardsContainer/>
    <Clients/>
    </div>
  )
}

export default Home