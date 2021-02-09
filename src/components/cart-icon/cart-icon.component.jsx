import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIconSvg } from '../../assets/icons/cart.svg'
import styles from './cart-icon.module.css'

const CartIcon = ({ className }) => (
    <Link to="/cart" className={`${styles.root} ${className}`}>
        <CartIconSvg />
        <div className={styles.badge}>
            12
        </div>
    </Link>
)

export default CartIcon
