// 首页 list 推荐接口

import base from './base'
import {getData} from '../utils/http'

const homeHot = {
  homeHotData() {
    return getData(base.homeHot)
  }
}

export default homeHot