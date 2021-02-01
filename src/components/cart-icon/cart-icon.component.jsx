import React from 'react'
import { ReactComponent as CartIconSvg } from '../../assets/icons/cart.svg'
import styles from './cart-icon.module.css'

const CartIcon = ({ className }) => (
    <div className={`${styles.root} ${className}`}>
        <CartIconSvg />
        <div className={styles.badge}>
            12
        </div>
    </div>
)

export default CartIcon
