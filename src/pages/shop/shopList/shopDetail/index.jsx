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
  const [owner, setOwner] = useState({})
  const [comments, setComments] = useState([])

  const { id } = props.match.params

  useEffect(() => {// 请求页面数据
    props.loginActions.shopDetail(id)
      .then(res => {
        console.log(res.data)
        setName(res.data.name)
        setCount(res.data.count)
        setImg(res.data.img)
        setDescription(res.data.description)
        setPrice(res.data.price)
        setLabels(res.data.labels)
        setOwner(res.data.owner)
        setComments(res.data.comments)
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
          <h3 style={{ fontWeight: 700 }}>{name}</h3>
          商品描述: <p>{description}</p>
          <p style={{ color: '#999' }}>月售 <span>{count}</span> 件</p>
        </div>

        <div className="owner-msg">
          <img src={owner.img} alt="img" className="owner-img" />
          <span className="owner-name">{owner.name}</span>
          <span>宝贝描述 <span className="owner-grade">{owner.grade}</span></span>
          <button className="btn btn-default owner-btn"
          // style={{padding: '0.1rem'}}
          >联系店家</button>
        </div>

        <div className="comment-box">
          <h4>
            <span class="glyphicon glyphicon-comment" aria-hidden="true" style={{ margin: '0 0.2rem' }}></span>
            <span style={{ fontWeight: 700 }}>商品评论</span>
          </h4>
          <div className="comments-content">
            {
              comments.map((item, index) => (
                <div key={index} className="one-comment">
                  <p>
                    {
                      item.type ? <span key={index} className="comment-label">好评</span> :
                        <span key={index} className="comment-label"
                        style={{backgroundColor: '#eee', color: '#999'}}
                        >差评</span>
                    }
                    <span style={{ color: '#aaa' }}>用户 {item.user} : </span>
                    {item.comment}</p>
                  {
                    item.feedback ?
                      <p><span style={{ color: '#aaa' }}>店家 回复 : </span>
                        {item.feedback}</p>
                      : null
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(ShopDetail)