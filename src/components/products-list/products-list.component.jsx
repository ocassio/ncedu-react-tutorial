import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from '../product-card/product-card.component'
import styles from './products-list.module.css'
import { loadProducts } from '../../data/products.data'
import Loader from '../loader/loader.component'

const ProductsList = ({ query }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadProducts().then(products => {
            setProducts(products)
            setLoading(false)
        })
    }, [])

    const filteredProducts = useMemo(
        () => products.filter(
            product => product.name.toLowerCase().includes(query.toLowerCase())
        ),
        [query, products]
    )

    return (
        <div className={styles.root}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.url}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

export default ProductsList
