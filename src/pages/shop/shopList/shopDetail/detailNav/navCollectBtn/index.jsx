import React, { Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const NavCollectBtn = props => {
  const id = props.location.pathname.slice(-2)

  const array = props.collect

  console.log(array.includes(id))
  // -------------不知道为什么总是判断 false---------------

  return (
    <Fragment>
      {
        array.includes(id) ?
          <button className="btn btn-primary btn-collected"
          style={{backgroundColor: 'rgba(249, 125, 147, 0.6)'}}>
            <span
              onClick={props.clickShowAlert}
              className="glyphicon glyphicon-star-empty"
              aria-hidden="true"
              style={{ marginRight: '0.1rem' }}></span>
        已收藏</button>
          :
          <button className="btn btn-primary btn-collect">
            <span
              onClick={props.clickShowAlert}
              className="glyphicon glyphicon-star-empty"
              aria-hidden="true"
              style={{ marginRight: '0.1rem' }}></span>
          收藏</button>
      }
    </Fragment>
  )
}

export default connect(state => state)(withRouter(NavCollectBtn))