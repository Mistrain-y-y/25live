import React, { useEffect } from 'react'
import FootNav from '../../components/footNav'
import './style.less'
import { connect } from 'react-redux'
import UserMsg from './userMsg'
import NotLogged from './notLogged'
import Header from '../../components/header'
import Options from './options'

const Mine = props => {
  return (
    <div className="mine-page">
      <FootNav />
      <Header showLoginBtn={false} title="Mine"/>
      {
        props.login.logged ?
          <UserMsg /> : <NotLogged />
      }

      <Options/>
    </div>
  )
}

export default connect(state => state)(Mine)
