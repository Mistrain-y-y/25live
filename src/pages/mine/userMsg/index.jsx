import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './style.less'
import {bindActionCreators} from 'redux'
import * as loginActions from '../../../actions/loginActions'
import {withRouter} from 'react-router-dom'

const UserMsg = props => {
  const { img, user } = props.login.user
  const [msg, setMsg] = useState('')
  const [identity, setIdentity] = useState('')

  useEffect(() => {// 一挂载就请求数据
    // 登录的时候 token 只返回了 img 和 id 等简单身份信息
    // 展示用户完整信息需要重新请求
    props.loginActions.mineMsg()
    .then(res => {
      setMsg(res.data.msg)
      setIdentity(res.data.identity)
      props.loginActions.changeToLoaded()
    })
  }, [props.loginActions])

  const userLogOut = () => {
    sessionStorage.removeItem('token')
    window.location.reload()// 刷新当前页面
  }

  return (
    <div className="img-media">
      <div className="media-middle"
      >
        <img className="mine-img" src={img}
          alt="img" />
      </div>

      <div className="media-body" style={{ padding: '0.4rem', paddingTop: 0 }}>
        <h3 className="mine-name"
          style={{ textAlign: 'center' }}
        >{user}</h3>
        <p style={{ textAlign: 'center', fontSize: '0.35rem' }}>{identity}</p>
        <p style={{ textAlign: 'center' }}>{msg}</p>
        <button className="btn btn-primary btn-lg btn-block"
        style={{borderRadius: '0.95rem'}}
          onClick={userLogOut}
        >log out</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(UserMsg))