import React from 'react'
import './style.less'
import { connect } from 'react-redux'

const Loading = props => {
  return (
    <>
      {
        props.loading.isLoading ?
          (<div className="mask">
            <ul className="loading flex">
              <ul className="loading flex">
                <li style={{ '--line-index': 1 }}></li>
                <li style={{ '--line-index': 2 }}></li>
                <li style={{ '--line-index': 3 }}></li>
                <li style={{ '--line-index': 4 }}></li>
                <li style={{ '--line-index': 5 }}></li>
              </ul>
            </ul>
          </div>) : null
      }
    </>
  )
}

export default connect(state => state)(Loading)