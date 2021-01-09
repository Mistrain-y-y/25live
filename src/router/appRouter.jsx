import React, { lazy, Suspense, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

// Loading 直接引入
import Loading from '../components/loading'
import FootNav from '../components/footNav'
import Header from '../components/header'

// 懒加载
const Home = lazy(() => import('../pages/home'))
const Details = lazy(() => import('../pages/home/hot/details'))

const Shop = lazy(() => import('../pages/shop'))
const ShopDetail = lazy(() => import('../pages/shop/shopList/shopDetail'))
const Life = lazy(() => import('../pages/life'))
const Mine = lazy(() => import('../pages/mine'))
const Collection = lazy(() => import('../pages/mine/options/collection'))
const Reset = lazy(() => import('../pages/mine/options/set/reset'))
const Set = lazy(() => import('../pages/mine/options/set'))
const NotFound = lazy(() => import('../pages/notFound'))

const Search = lazy(() => import('../pages/search'))

const AppRouter = () => {
  return (
    <>
    {/* Fragment 只允许有 key, 空标签啥也不允许 */}
      <Suspense fallback={<Fragment><Loading /><Header/><FootNav /></Fragment>}>
        {/* 注意 Loading 组件本身没有最外层的包裹, 因此包 div */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:name" exact component={Details} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/detail/:id" exact component={ShopDetail} />
          <Route path="/life" exact component={Life} />
          <Route path="/mine" exact component={Mine} />
          <Route path="/mine/collection" exact component={Collection} />
          <Route path="/mine/reset/:property" exact component={Reset}/>
          <Route path="/mine/set" exact component={Set} />
          <Route path="/search" exact component={Search} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Suspense>
    </>
  )
}

export default AppRouter