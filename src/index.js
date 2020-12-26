import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router/appRouter'
import './static/css/common.less' // 初始化 css
import FootNav from './components/footNav'
import {HashRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
  <FootNav/>
  <AppRouter/>
</Router>, document.getElementById('root'))