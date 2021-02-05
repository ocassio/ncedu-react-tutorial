import React, { useState } from 'react'
import Header from '../header/header.component'
import ProductsList from '../products-list/products-list.component'
import styles from './app.module.css'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <Header onSearchChange={setSearchQuery} />
      <div className={styles.container}>
        <main className={styles.main}>
          <ProductsList query={searchQuery} />
        </main>
      </div>
    </div>
  )
}

export default App
