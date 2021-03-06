import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIconSvg } from '../../assets/icons/cart.svg'
import styles from './cart-icon.module.css'
import { useSelector } from "react-redux";
import { selectCartCount } from '../../store/cart/cart.slice';

const CartIcon = ({ className }) => {
    const count = useSelector(selectCartCount)

    return (
        <Link to="/cart" className={`${styles.root} ${className}`}>
            <CartIconSvg />
            <div className={styles.badge}>
                {count}
            </div>
        </Link>
    )
}

export default memo(CartIcon)
