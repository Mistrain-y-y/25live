import React, { Fragment, useState } from 'react'
import './style.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../../../../actions/loginActions'
import Alert from '../../../alert'

const DetailNav = props => {
  const [showAlert, setShowAlert] = useState(false)

  const clickShowAlert = () => {
    setShowAlert(true)
  }

  const hideAlert = () => {
    setShowAlert(false)
  }

  return (
    <Fragment>
      {
        showAlert ? <Alert hideAlert={hideAlert} /> : null
      }

      <div className="navbar navbar-footer nav-detail" style={{ marginBottom: 0 }}>
        <span style={{ lineHeight: '1.1rem', margin: '0 0.3rem 0', color: '#aaa' }}>举报</span>
        <span style={{ lineHeight: '1.1rem', margin: '0 0.3rem 0 0', color: '#aaa' }}>
          <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>
       客服</span>
        <button className="btn btn-primary btn-collect">
          <span
            onClick={clickShowAlert}
            className="glyphicon glyphicon-star-empty"
            aria-hidden="true"
            style={{ marginRight: '0.1rem' }}></span>
        收藏</button>
        <button className="btn btn-primary btn-add">加入购物车</button>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(DetailNav)