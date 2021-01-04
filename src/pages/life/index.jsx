import React, { Fragment, useState, useEffect } from 'react'
import Header from '../../components/header'
import FootNav from '../../components/footNav'
import LifeItem from './lifeItem'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../actions/loginActions'
import { connect } from 'react-redux'
import './style.less'

const Life = props => {
  const [list, setList] = useState([])
  useEffect(() => {
    props.loginActions.lifeList()
      .then(res => {
        setList(res.data)
        props.loginActions.changeToLoaded()
      })
  }, [props.loginActions])
  return (
    <div className="life-page">
      <Header title="Life" showLoginBtn={true} />
      <FootNav />

      {
        list.map((item, index) => (
          <Fragment key={index}>
            <LifeItem item={item}/>
          </Fragment>
        ))
      }

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Life)