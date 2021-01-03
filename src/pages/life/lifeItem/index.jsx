import React, { Fragment } from 'react'
import './style.less'

const LifeItem = props => {
  const { name, time, likes, iconImg, content, comments } = props.item
  
  return (
    <div className="panel panel-default item-life" style={{ marginTop: '59px' }}>
      <div>
        <img className="icon-user" src={iconImg} alt="img" />
        <span style={{ margin: '0 0.2rem', fontSize: '0.35rem' }}>{name}</span>
        <span style={{ color: '#888' }}>{time}</span>
      </div>
      {
        content.text ? <p style={{ margin: '0.2rem 0', fontSize: '0.3rem' }}>{content.text}</p>
        : null
      }
      {
        content.img ? <img src={content.img} alt="img" style={{ width: '100%' }} />
        : null
      }
      <p className="icon-box">
        <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
        <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
        <span className="glyphicon glyphicon-share" aria-hidden="true"></span>
      </p>
      <div className="bottom-box">
        <div className="like-user">
          <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
          {
            likes.map((item, index) => (
              <Fragment key={index}>
                {item}、
              </Fragment>
            ))
          }
        </div>
        <div className="comments">
          {
            comments.map((item, index) => (
              <Fragment key={index}>
                <p><span>{item.user} : </span>{item.content}</p>
                {
                  item.feedback ?
                    <p><span>{name}</span> 回复 <span>{item.user} : </span>{item.feedback}</p>
                    : null
                }
              </Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LifeItem