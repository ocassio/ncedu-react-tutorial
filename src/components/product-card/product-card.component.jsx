import React from 'react'
import styles from './product-card.module.css'

const ProductCard = ({
    name,
    image,
    price
}) => (
    <div className={styles.root}>
        <div className={styles.info}>
            <h3 className={styles.title}>{name}</h3>
            <span className={styles.price}>{price}₽</span>
        </div>
        <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
    </div>
)

export default ProductCard
