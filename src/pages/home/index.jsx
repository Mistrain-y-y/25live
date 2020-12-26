import React from 'react'
import './style.less'
import Header from '../../components/header'
import Swiper from '../../components/swiper'
import FootNav from '../../components/footNav'

import banner1 from '../../static/images/01.jpg'
import banner2 from '../../static/images/02.jpg'
import banner3 from '../../static/images/03.jpg'
import banner4 from '../../static/images/04.jpg'
import banner5 from '../../static/images/05.jpg'

import axios from 'axios'

const Home = props => {
  const test = () => {
    axios.get('http://localhost:3033/api/users/play')
    .then(res => console.log(res), err => console.log(err))
  }
  return (
    <div className="swiper-box">
      <Header title="Home">
        <form className="navbar-form navbar-left container" role="search" style={{ padding: 0, marginRight: '0.2rem', marginLeft: '0.2rem' }}>
          <div className="form-group col-xs-9" style={{ padding: 0 }}>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-primary col-xs-3">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </form>
        <button className="btn btn-login btn-default navbar-btn"
         style={{ backgroundColor: '#fff' }}
         onClick={test}
         >
          Login
      </button>
      </Header>
      <Swiper banners={[banner1, banner2, banner3, banner4, banner5]} />
      <FootNav />
    </div>
  )
}

export default Home