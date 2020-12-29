import React, { useState, useEffect } from 'react'
import Header from '../../../../components/header'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../../../actions/loginActions'

const Details = props => {
  const [detail, setDetail] = useState({})

  useEffect(() => {
    props.loginActions.detailRequest(props.match.params.name)
      .then(res => {
        console.log(res)
        setDetail(res.data)
      }, err => {// 没有登录, 跳转到登录页面
        console.log(err)
        props.history.replace('/home')
        props.loginActions.showLoginPage()
      }
      )
  }, [props.loginActions, props.match.params.name, props.history])

  return (
    <div>
      <Header title={props.match.params.name} showBackBtn={true} />
      <div className="panel panel-default" style={{ marginTop: '59px' }}>
        <img src={detail.img} alt="img" style={{ width: '100%' }} />
        <div className="panel-body">
          <p>{detail.content}</p>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})// 记得返回 action

export default connect(null, mapDispatchToProps)(withRouter(Details))