import React, { useState, useEffect, Fragment } from 'react'
import './style.less'
import { connect } from 'react-redux'
import * as loginActions from '../../../../actions/loginActions'
import {bindActionCreators} from 'redux'

const CollectBtn = props => {
  const [isCollected, setIsCollected] = useState([])

  useEffect(() => {// 一挂载就会请求数据
    setIsCollected(props.collect)
  }, [props.collect])

  const clickCollectBtn = e => {
    e.stopPropagation()
    if (props.login.logged) {
      props.collectTheItem(props.login.user.username, props.item.id, e)
    } else {
      props.loginActions.showLoginPage()
    }
  }

  return (
    <Fragment>
      {
        props.collect.length === 0 ?// 未登录
          (
            <button
              className="btn btn-primary btn-collect"
              onClick={clickCollectBtn}
            >收藏</button>
          ) : (
            isCollected.includes(props.item.id) ?
              <button
                className="btn btn-primary btn-collected"
                onClick={e => props.cancelCollect(props.login.user.username, props.item.id, e)}
              >已收藏</button>
              :
              <button
                className="btn btn-primary btn-collect"
                onClick={e => props.collectTheItem(props.login.user.username, props.item.id, e)}
              >收藏</button>
          )
      }
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(CollectBtn)