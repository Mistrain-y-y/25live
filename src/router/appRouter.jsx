import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

// Loading 直接引入
import Loading from '../components/loading'
import FootNav from '../components/footNav'
import Header from '../components/header'

// 懒加载
const Home = lazy(() => import('../pages/home'))
const Life = lazy(() => import('../pages/life'))
const Shop = lazy(() => import('../pages/shop'))
const Mine = lazy(() => import('../pages/mine'))
const NotFound = lazy(() => import('../pages/notFound'))
const Details = lazy(() => import('../pages/home/hot/details'))
const Search = lazy(() => import('../pages/search'))

const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<div><Loading /><Header/><FootNav /></div>}>
        {/* 注意 Loading 组件本身没有最外层的包裹, 因此包 div */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/life" exact component={Life} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/mine" exact component={Mine} />
          <Route path="/search" exact component={Search} />
          <Route path="/details/:name" exact component={Details} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Suspense>
    </>
  )
}

export default AppRouter