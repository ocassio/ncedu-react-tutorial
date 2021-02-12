import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { products } from '../../data/products.data'
import { addToCart } from "../../store/cart/cart.actions";

const ProductDetails = () => {
    const { id } = useParams()
    const product = useMemo(() => products.find(p => p.id === +id), [id])

    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(addToCart({
            id: product.id,
            name: product.name
        }))
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            <img src={product.url} alt={product.name} />
            <button type="button" onClick={handleAdd}>Добавить в корзину</button>
        </div>
    )
}

export default ProductDetails
