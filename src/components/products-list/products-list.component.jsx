import React, { useEffect, useMemo } from 'react'
import ProductCard from '../product-card/product-card.component'
import styles from './products-list.module.css'
import { loadProducts } from '../../data/products.data'
import Loader from '../loader/loader.component'
import { useDispatch, useSelector } from 'react-redux'

const ProductsList = () => {
    const products = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)
    const query = useSelector(state => state.products.query)

    const dispatch = useDispatch()

    useEffect(() => {
        loadProducts().then(products => {
            dispatch({
                type: 'setProducts',
                payload: products
            })
        })
    }, [dispatch])

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
                            id={product.id}
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
