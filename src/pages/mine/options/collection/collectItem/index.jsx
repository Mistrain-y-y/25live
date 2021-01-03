import React, { useEffect, useState } from 'react'
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
      })
  }, [props.loginActions, props.item])
  return (
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
      <button className="btn btn-primary btn-cancel">取消收藏</button>
      <button className="btn btn-primary btn-buy">购买</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(withRouter(CollectItem))