import React, { useEffect, useMemo } from 'react'
import ProductCard from '../product-card/product-card.component'
import styles from './products-list.module.css'
import Loader from '../loader/loader.component'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from '../../store/products/products.actions'
import { selectLoading, selectProducts, selectQuery } from '../../store/products/products.selectors'

const ProductsList = () => {
    const products = useSelector(selectProducts)
    const loading = useSelector(selectLoading)
    const query = useSelector(selectQuery)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProducts())
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
