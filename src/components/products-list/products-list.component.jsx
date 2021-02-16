import React, { useEffect, memo } from 'react'
import ProductCard from '../product-card/product-card.component'
import styles from './products-list.module.css'
import Loader from '../loader/loader.component'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, loadProducts, selectFilteredProducts } from '../../store/products/products.slice'

const ProductsList = () => {
    const loading = useSelector(selectLoading)
    const filteredProducts = useSelector(selectFilteredProducts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProducts())
    }, [dispatch])

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

export default memo(ProductsList)
