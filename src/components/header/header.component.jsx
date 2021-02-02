import styles from './header.module.css'
import React from 'react'
import CartIcon from '../cart-icon/cart-icon.component'
import Search from '../search/search.component'

const Header = ({ onSearchChange }) => {
    return (
        <header className={styles.root}>
            <div className={`${styles.logo} ${styles.menuItem}`}>
                <a href="/">T-Shirt Shop</a>
            </div>
            <Search className={styles.menuItem} onChange={onSearchChange} />
            <CartIcon className={styles.menuItem} />
        </header>
    )
}

export default Header
