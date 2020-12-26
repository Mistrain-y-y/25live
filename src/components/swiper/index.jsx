import React, {useState} from 'react'
import SwipeableViews from 'react-swipeable-views'
import Pagination from '../../components/swiper/pagination'
import './style.less'

const Swiper = props => {
  const [curIndex, setCurIndex] = useState(0)
  const onChangeIndex = index => {
    // console.log(index)
    setCurIndex(index)
  }
  return (<div>
    <div className="swiper">
    <SwipeableViews onChangeIndex={onChangeIndex}>
      {/* onChangeIndex 是包里面已经定义的事件 */}
      {
        props.banners.map((item, index) => (
          <div key={index} className="swiper-view">
            <img src={item} alt="swiper img" />
          </div>
        ))
      }
    </SwipeableViews>
    <Pagination dots={props.banners.length} curIndex={curIndex}/>
  </div>
  </div>)
}

export default Swiper;