import React from 'react'
import ProductCard from '../product-card/product-card.component'
import styles from './products-list.module.css'
import { products } from '../../data/products.data'

const ProductsList = () => (
    <div className={styles.root}>
        {products.map(product => (
            <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.url}
            />
        ))}
    </div>
)

export default ProductsList
