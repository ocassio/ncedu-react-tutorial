import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCartProducts, clearCart } from '../../store/cart/cart.slice'

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
                {products.map(({ id, name }) => (
                    <li key={id}>{name}</li>
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

