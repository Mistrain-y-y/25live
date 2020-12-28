import React from 'react'
import './style.less'

const Hot = props => {
  const getDetails = () => {
    
  }
  return (
    <div onClick={getDetails}>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="media">
            <div className="media-left media-middle">
              <a href="#">
                <img className="media-object" src={props.item.img}
                // --------------该写头像了---------------
                  style={{ width: '5em' }}
                  alt="..." />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{props.item.name}
              <span className="badge">{props.item.num}</span>
              </h4>
              <p className="ellipsis-p">{props.item.content}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Hot