import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router/appRouter'
import Login from './components/login'
import './static/css/common.less' // 初始化 css
import {HashRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <div>
  <Router>
    <AppRouter/>
  </Router>
  <Login/>
</div>, document.getElementById('root'))