import styles from './header.module.css'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon.component'
import Search from '../search/search.component'

const Header = () => {
    return (
        <header className={styles.root}>
            <div className={`${styles.logo} ${styles.menuItem}`}>
                <Link to="/">T-Shirt Shop</Link>
            </div>
            <Search className={styles.menuItem} />
            <CartIcon className={styles.menuItem} />
        </header>
    )
}

export default memo(Header)
