import React, { Fragment, useState, useEffect } from 'react'
import Header from '../../../../components/header'
import * as loginActions from '../../../../actions/loginActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CollectItem from './collectItem'
import './style.less'
import CancelAlert from '../../../../components/alert/cancelCollect'

const Collection = props => {
  const [showCancelAlert, setShowCancelAlert] = useState(false)

  useEffect(() => {// 挂载时需要初始化 redux 里面的数据
    props.loginActions.collections(props.login.user.username)
    .then(() => props.loginActions.changeToLoaded())
  }, [])

  const cancelAlert = () => {
    setShowCancelAlert(true)
  }

  const cancelCollect = (username, id) => {
    props.loginActions.cancelCollect(username, id)
      .then(() => {
        props.loginActions.changeToLoaded()
        cancelAlert()
      })
  }

  const hideAlert = () => {
    setShowCancelAlert(false)
  }
  return (
    <Fragment>

      {
        showCancelAlert ? <CancelAlert hideAlert={hideAlert} /> : null
      }

      <Header title="返回" showBackBtn={true} >
        <h4 style={{ fontWeight: 700, lineHeight: '0.6rem', textAlign: 'center' }}>收藏</h4>
      </Header>

      <div className="collect-list">
        {
          props.collect.length === 0 ?
            <div className="empty-collect">这里空空如也~</div>
          :
          (props.collect.map((item, index) => (
            // 从 redux 取数据
            <Fragment key={index}>
              <CollectItem item={item} cancelCollect={cancelCollect}/>
            </Fragment>
          )))
        }
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(Collection)