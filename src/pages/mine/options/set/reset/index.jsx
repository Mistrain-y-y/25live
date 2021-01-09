import React, { Fragment } from 'react'
import Header from '../../../../../components/header'
import {withRouter} from 'react-router-dom'
import './style.less'

const Reset = props => {
  const pathname = props.location.pathname.split('/')
  const property = pathname[pathname.length - 1]
  return (
    <Fragment>
      <Header title="返回" showBackBtn={true} >
        <h4 style={{ fontWeight: 700, lineHeight: '0.6rem', textAlign: 'center' }}>{property}</h4>
      </Header>

      <div className="reset-input">
        <input type="text"/>
      </div>
    </Fragment>
  )
}

export default withRouter(Reset)