import React, { useState, useEffect, Fragment } from 'react'
import './style.less'
import { connect } from 'react-redux'

const CollectBtn = props => {
  const [collected, setCollected] = useState([])
  
  useEffect(() => {
    setCollected(props.collected)
  }, [props.collected])

  return (
    <Fragment>
      { collected.includes(props.item.id) ?
        <button
          className="btn btn-primary btn-collected"
        >已收藏</button>
        :
        <button
          className="btn btn-primary btn-collect"
          onClick={e => props.collectTheItem(props.login.user.username, props.item.id, e)}
        >收藏</button>
      }
    </Fragment>
  )
}

export default connect(state => state)(CollectBtn)