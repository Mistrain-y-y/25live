import React, { useEffect } from 'react'
import './style.less'

const CancelAlert = props => {
  useEffect(() => {
    const timer = setTimeout(() => {// 挂载以后3秒卸载
      props.hideAlert()
    }, 2000)
    return () => {// 卸载时清除定时器
      clearTimeout(timer)
    }
  }, [props])

  return (
    <div
      className="alert alert-success shop-success"
      role="alert"
    >
      <span
        className="glyphicon glyphicon-ok"></span>
        已取消收藏!
    </div>
  )
}

export default CancelAlert