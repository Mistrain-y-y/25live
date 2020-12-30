import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router/appRouter'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import './static/css/common.less' // 初始化 css
import {HashRouter as Router} from 'react-router-dom'
import rootReducer from './reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import withToken from './utils/withToken'
import Loading from './components/loading'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

withToken(sessionStorage.getItem('token'))
// 设置公共请求头

ReactDOM.render((
  <Provider store={store}>
    <Loading/>
    <Router>
      <AppRouter/>
    </Router>
  </Provider>
), document.getElementById('root'))