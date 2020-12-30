import React, {useEffect} from 'react'

const Alert = props => {
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
        className="glyphicon glyphicon-ok"
        style={{ fontSize: '0.5rem', marginRight: '0.2rem' }}></span>
        收藏商品成功!
    </div>
  )
}

export default Alert