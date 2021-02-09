import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../data/products.data'

const ProductDetails = () => {
    const { id } = useParams()
    const product = useMemo(() => products.find(p => p.id === +id), [id])

    return (
        <div>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            <img src={product.url} alt={product.name} />
        </div>
    )
}

export default ProductDetails
