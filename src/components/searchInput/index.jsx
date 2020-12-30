import React, {useState} from 'react'
import './style.less'
import {withRouter} from 'react-router-dom'

const SearchInput = props => {
  const [value, setValue] = useState('')

  const handleInput = e => {
    setValue(e.target.value)
  }
  const handleKeyUp = e => {
    if (e.keyCode === 13) {// 13 是回车
      props.history.push('/search')
    }
  }
  const toSearch = () => {
    props.history.push('/search')
  }

  return (
    <form
      className="navbar-form navbar-left container"
      role="search"
      style={{
      padding: 0,
      marginRight: '0.2rem',
      marginLeft: '0.2rem'
    }}>
      <div className="form-group col-xs-9" style={{
        padding: 0
      }}>
        <input 
        type="text" 
        className="form-control"
         placeholder="Search"
         value={value}
         onKeyUp={handleKeyUp}
         onChange={handleInput}
         onFocus={toSearch}
         autoFocus={props.autoFocus}
         />
      </div>
      <button type="submit" className="btn btn-primary col-xs-3">
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
      </button>
    </form>
  )
}

export default withRouter(SearchInput)