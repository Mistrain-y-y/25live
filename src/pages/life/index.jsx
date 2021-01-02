import React from 'react'
import Header from '../../components/header'
import FootNav from '../../components/footNav'
import LifeItem from './lifeItem'

const Life = () => {
  return (
    <div>
      <Header title="Life" showLoginBtn={true}/>
      <FootNav />

      <LifeItem/>
    </div>
  )
}

export default Life