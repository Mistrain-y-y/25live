import React, { useState, useEffect, Fragment } from 'react'
import Header from '../../../../components/header'
import * as loginActions from '../../../../actions/loginActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CollectItem from './collectItem'
import jwtDecode from 'jwt-decode'
import './style.less'

const Collection = props => {
  const [list, setList] = useState([])

  useEffect(() => {
    const { username } = jwtDecode(sessionStorage.getItem('token'))
    props.loginActions.collections(username)
      .then(res => {
        setList(res.data.collectId)
      })
  }, [props.loginActions])

  return (
    <Fragment>
      <Header title="返回" showBackBtn={true} >
        <h4 style={{ fontWeight: 700, lineHeight: '0.6rem', textAlign: 'center' }}>收藏</h4>
      </Header>

      <div className="collect-list">
        {
          list.map((item, index) => (
            <Fragment key={index}>
              <CollectItem item={item} />
            </Fragment>
          ))
        }
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Collection)