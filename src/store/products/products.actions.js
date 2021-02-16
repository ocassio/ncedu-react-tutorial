import { loadProducts as loadProductsFromServer } from "../../data/products.data";

export const SET_PRODUCTS = 'setProducts'
export const SET_QUERY = 'setQuery'
export const SET_LOADING = 'setLoading'
export const LOAD_PRODUCTS_PENDING = 'loadProducts/pending'
export const LOAD_PRODUCTS_SUCCESS = 'loadProducts/success'
export const LOAD_PRODUCTS_FAILURE = 'loadProducts/failure'

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export function setQuery(query) {
    return {
        type: SET_QUERY,
        payload: query
    }
}

export function setLoading(value) {
    return {
        type: SET_LOADING,
        payload: value
    }
}

export function loadProducts() {
    return async (dispatch) => {
        dispatch({ type: LOAD_PRODUCTS_PENDING })
        try {
            const products = await loadProductsFromServer()
            dispatch({
                type: LOAD_PRODUCTS_SUCCESS,
                payload: products
            })
        } catch {
            dispatch({ type: LOAD_PRODUCTS_FAILURE })
        }
    }
}