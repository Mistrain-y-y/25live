import React from 'react'
import './style.less'
import Header from '../../../../components/header'

const Set = () => {
  return (
    <Header title="返回" showBackBtn={true} >
      <h4 style={{ fontWeight: 700, lineHeight: '0.6rem', textAlign: 'center' }}>设置</h4>
    </Header>
  )
}

export default Set