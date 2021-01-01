import React, { useState, useEffect } from 'react'
import Header from '../../../../components/header'
import * as loginActions from '../../../../actions/loginActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.less'

const ShopDetail = props => {
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [count, setCount] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [labels, setLabels] = useState([])

  const { id } = props.match.params

  useEffect(() => {// 请求页面数据
    props.loginActions.shopDetail(id)
      .then(res => {
        setName(res.data.name)
        setCount(res.data.count)
        setImg(res.data.img)
        setDescription(res.data.description)
        setPrice(res.data.price)
        setLabels(res.data.labels)
      }, err => console.log(err))
  }, [props.loginActions, id])

  return (
    <div>
      <Header showBackBtn={true} title="返回">
        <h4 style={{ fontWeight: 700, lineHeight: '0.6rem', textAlign: 'center' }}>{name}</h4>
      </Header>
      <div className="panel panel-default" style={{ marginTop: '59px' }}>
        <img src={img} alt="img" style={{ width: '100%' }} />
        <div className="good-base">
          <h4 className="detail-price">￥ <span style={{ fontSize: '0.6rem' }}>{price}</span></h4>
          {
            labels.map((item, index) => (
              <span key={index} className="good-label">{item}</span>
            ))
          }
          <h3>{name}</h3>
        </div>

        <div className="detail-body">
          商品描述: <p>{description}</p>
          <p style={{color: '#999'}}>月售 <span>{count}</span> 件</p>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(ShopDetail)