import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { selectQuery } from '../../store/products/products.slice'
import Cart from '../cart/cart.component'
import Checkout from '../checkout/checkout.component'
import Header from '../header/header.component'
import ProductDetails from '../product-details/product-details.component'
import ProductsList from '../products-list/products-list.component'
import SampleContainer from '../sample-container/sample-container.component'
import ScrollToTop from '../scroll-to-top/scroll-to-top.component'
import styles from './app.module.css'

const App = () => {
  const query = useSelector(selectQuery)

  return (
    <div>
      {query}
      <ScrollToTop />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Switch>
            <Route path="/" exact>
              <ProductsList />
            </Route>
            <Route path="/sample">
              <SampleContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route>
              404 Page Not Found
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  )
}

export default App
