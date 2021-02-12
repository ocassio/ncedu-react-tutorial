import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart } from '../../store/cart/cart.actions'
import { selectCartProducts } from '../../store/cart/cart.selectors'

const Cart = () => {
    const products = useSelector(selectCartProducts)

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {products.map(({ name }) => (
                    <li>{name}</li>
                ))}
            </ul>
            <button type="button" onClick={handleClearCart}>
                Очистить корзину
            </button>
            <Link to="/checkout/delivery">К оформлению</Link>
        </div>
    )
}

export default Cart

