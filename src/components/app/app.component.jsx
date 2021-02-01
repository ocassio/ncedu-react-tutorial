import React from 'react'
import Header from '../header/header.component'
import ProductsList from '../products-list/products-list.component'
import styles from './app.module.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          
          <ProductsList />
        </main>
      </div>
    </div>
  )
}

export default App
