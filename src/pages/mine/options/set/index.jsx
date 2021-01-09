import React, { Fragment, useEffect, useState } from 'react'
import './style.less'
import Header from '../../../../components/header'
import * as loginActions from '../../../../actions/loginActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

const Set = props => {
  const [info, setInfo] = useState({})
  useEffect(() => {
    props.loginActions.mineMsg()
      .then(res => {
        setInfo(res.data)
        props.loginActions.changeToLoaded()
      })
  }, [props.loginActions])
  
  const toResetPage = property => {
    props.history.push(`/mine/reset/${property}`)
  }

  return (
    <Fragment>
      <Header title="返回" showBackBtn={true} >
        <h4 style={{ fontWeight: 700, lineHeight: '0.6rem', textAlign: 'center' }}>设置</h4>
      </Header>

      <div className="input-group">
        <div className="input-item" onClick={() => toResetPage('修改头像')}>
          <img src={info.img} alt="img" className="user-img"/>
        </div>
        <div className="input-item"  onClick={() => toResetPage('修改账号')}>
          账号 <p>{info.username}</p>
        </div>
        <div className="input-item"  onClick={() => toResetPage('修改用户名')}>
          用户名 <p>{info.user}</p>
        </div>
        <div className="input-item"  onClick={() => toResetPage('个性签名')}>
          个性签名 <p>{info.identity}</p>
        </div>
        <div className="input-item">
          描述 <p>{info.msg}</p>
        </div>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(withRouter(Set))