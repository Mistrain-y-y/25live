import React, { Fragment } from 'react'
import FootNav from '../../components/footNav'
import './style.less'
import { connect } from 'react-redux'

const Mine = props => {
  const { img, user } = props.login.user
  return (
    <Fragment>
      <FootNav />

      <div className="img-media">
        <div className="media-middle"
        >
          <img className="mine-img" src={img}
            alt="img" />
        </div>

        <div className="media-body">
          <h3 className="mine-name"
            style={{ textAlign: 'center' }}
          >{user}</h3>
          <p style={{ textAlign: 'center', fontSize: '0.3rem' }}>一只蓝恐龙~</p>
          <p style={{ textAlign: 'center' }}>React前端开发工程师烟雨恐龙!</p>
        </div>
      </div>

      {/* 该写下面的设置等选项了---------- */}

    </Fragment>
  )
}

export default connect(state => state)(Mine)
