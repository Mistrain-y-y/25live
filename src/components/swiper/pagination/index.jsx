import React from 'react'
import './style.less'

const Pagination = props => {
  const dotsArr = new Array(props.dots).fill(1)
  // 所有空元素填充为1
  return (
    <div className="swiper-pagination">
      <ul>
        {
          dotsArr.map((item, index) => (
            <li key={index} className={index === props.curIndex ? 'selected': ''}></li>
          ))
        }
      </ul>
      </div>
  )
}

export default Pagination