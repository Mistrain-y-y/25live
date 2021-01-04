import React, { useState, useEffect, Fragment } from 'react'
import Header from '../../../../components/header'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../../../actions/loginActions'
import './style.less'

const Details = props => {
  const [detail, setDetail] = useState({})

  useEffect(() => {
    props.loginActions.detailRequest(props.match.params.name)
      .then(res => {
        setDetail(res.data)
        props.loginActions.changeToLoaded()
      }, err => {// 没有登录, 跳转到登录页面
        props.history.replace('/home')
        props.loginActions.showLoginPage()
        props.loginActions.changeToLoaded()
      }
      )
  }, [props.loginActions, props.match.params.name, props.history])

  return (
    <Fragment>
      <Header title="返回" showBackBtn={true} >
      <h4 style={{fontWeight: 700, lineHeight: '0.6rem', textAlign: 'center'}}>{props.match.params.name}</h4>
        </Header>
      <div className="panel panel-default panel-detail" style={{ marginTop: '59px' }}>
        <img src={detail.img} alt="img" style={{ width: '100%' }} />
        <div className="panel-body">
          <p>{detail.content}</p>
        </div>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})// 记得返回 action

export default connect(null, mapDispatchToProps)(withRouter(Details))