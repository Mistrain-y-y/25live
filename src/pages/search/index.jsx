import React from 'react'
import './style.less'
import Header from '../../components/header'
import SearchInput from '../../components/searchInput'

const Search = () => {
  return (
    <div>
      <Header title="Search" showBackBtn={true}>
        <SearchInput autoFocus={true}/>
      </Header>
    </div>
  )
}

export default Search