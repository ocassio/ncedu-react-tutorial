import React from 'react'
import { Link } from 'react-router-dom'
import styles from './product-card.module.css'

const ProductCard = ({
    id,
    name,
    image,
    price
}) => (
    <Link to={`/products/${id}`} className={styles.root}>
        <div className={styles.info}>
            <h3 className={styles.title}>{name}</h3>
            <span className={styles.price}>{price}₽</span>
        </div>
        <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
    </Link>
)

export default ProductCard
