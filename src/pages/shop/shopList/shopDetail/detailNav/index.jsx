import React, { Fragment, useState } from 'react'
import './style.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../../../../actions/loginActions'
import SuccessAlert from '../../../../../components/alert/successCollect'
import CancelAlert from '../../../../../components/alert/cancelCollect'
import NavCollectBtn from './navCollectBtn'

const DetailNav = props => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showCancelAlert, setShowCancelAlert] = useState(false)

  const clickShowSuccessAlert = () => {
    setShowSuccessAlert(true)
  }

  const hideAlert = () => {
    setShowSuccessAlert(false)
    setShowCancelAlert(false)
  }

  return (
    <Fragment>
      {
        showSuccessAlert ? <SuccessAlert hideAlert={hideAlert} /> : null
      }

      {
        showCancelAlert ? <CancelAlert hideAlert={hideAlert}/> : null
      }

      <div className="navbar navbar-footer nav-detail" style={{ marginBottom: 0 }}>
        <span style={{ lineHeight: '1.1rem', margin: '0 0.3rem 0', color: '#aaa' }}>举报</span>
        <span style={{ lineHeight: '1.1rem', margin: '0 0.3rem 0 0', color: '#aaa' }}>
          <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>
       客服</span>

        <NavCollectBtn clickShowAlert={clickShowSuccessAlert}/>

        <button className="btn btn-primary btn-add">加入购物车</button>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(DetailNav)