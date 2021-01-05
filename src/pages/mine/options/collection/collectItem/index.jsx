import React, { Fragment, useEffect, useState } from 'react'
import './style.less'
import * as loginActions from '../../../../../actions/loginActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

const CollectItem = props => {
  const [oneCollect, setOneCollect] = useState({})

  useEffect(() => {
    props.loginActions.shopDetail(props.item)
      .then(res => {
        setOneCollect(res.data)
        props.loginActions.changeToLoaded()
      })
  }, [props.loginActions, props.item])

  return (
    <Fragment>
      <div
        onClick={() => { props.history.push(`/shop/detail/${props.item}`) }}
        className="panel panel-default item-collect"
        style={{ marginTop: '59px' }}
      >
        <img className="good-img" src={oneCollect.img} alt="img" />
        <div className="title-box">
          <span style={{ margin: '0 0.2rem', fontSize: '0.35rem' }}>{oneCollect.name}</span>
          <p style={{ color: '#888' }}>{oneCollect.description}</p>
        </div>
        <button
          className="btn btn-primary btn-cancel"
          onClick={e => {
            e.stopPropagation()
            props.cancelCollect(props.login.user.username, props.item)
          }}
        >取消收藏</button>
        <button className="btn btn-primary btn-buy">购买</button>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(withRouter(CollectItem))