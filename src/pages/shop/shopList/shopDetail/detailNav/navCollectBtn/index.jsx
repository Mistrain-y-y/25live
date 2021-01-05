import React, { useState, Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SuccessAlert from '../../../../../../components/alert/successCollect'
import CancelAlert from '../../../../../../components/alert/cancelCollect'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../../../../../actions/loginActions'

const NavCollectBtn = props => {
  const [collect, setCollect] = useState([])
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showCancelAlert, setShowCancelAlert] = useState(false)

  useEffect(() => {
    setCollect(props.collect)
  }, [props.collect])

  const id = props.location.pathname.slice(-2)

  const addCollect = e => {
    e.stopPropagation()
    props.loginActions.addCollect(props.login.user.username, id)
      .then(() => {
        setShowSuccessAlert(true)
        props.loginActions.changeToLoaded()
      })
  }

  const cancelCollect = () => {
    props.loginActions.cancelCollect(props.login.user.username, id)
      .then(() => {
        setShowCancelAlert(true)
        props.loginActions.changeToLoaded()
      })
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
        showCancelAlert ? <CancelAlert hideAlert={hideAlert} /> : null
      }

      {
        collect.includes(id) ?
          <button className="btn btn-primary btn-collected"
          onClick={cancelCollect}
            style={{ backgroundColor: 'rgba(249, 125, 147, 0.6)' }}>
            <span
              className="glyphicon glyphicon-star-empty"
              aria-hidden="true"
              style={{ marginRight: '0.1rem' }}></span>
        已收藏</button>
          :
          <button className="btn btn-primary btn-collect"
          onClick={addCollect}>
            <span
              className="glyphicon glyphicon-star-empty"
              aria-hidden="true"
              style={{ marginRight: '0.1rem' }}></span>
          收藏</button>
      }
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(NavCollectBtn))