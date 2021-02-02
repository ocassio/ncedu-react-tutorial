import React, { Component } from 'react'
import ProductCard from '../product-card/product-card.component'
import styles from './products-list.module.css'
import { loadProducts } from '../../data/products.data'
import Loader from '../loader/loader.component'

class ProductsList extends Component {

    state = {
        products: [],
        filteredProducts: [],
        loading: true
    }

    async componentDidMount() {
        const products = await loadProducts()
        this.setState({
            products,
            loading: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { query } = this.props
        if (prevProps.query === query && prevState.products.length === this.state.products.length) {
            return
        }

        const filteredProducts = this.state.products.filter(
            product => product.name.toLowerCase().includes(query.toLowerCase())
        )

        this.setState({
            ...this.state,
            filteredProducts
        })
    }

    render() {
        const { filteredProducts, loading } = this.state

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

}

export default ProductsList
