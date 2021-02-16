import { LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_PENDING, LOAD_PRODUCTS_SUCCESS, SET_LOADING, SET_PRODUCTS, SET_QUERY } from "./products.actions"

const initialProductsState = {
    loading: true,
    products: [],
    query: '',
    error: false
}

function productsReducer(state = initialProductsState, action) {
    switch (action.type) {

        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            }

        case LOAD_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true
            }

        case LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }

        case LOAD_PRODUCTS_FAILURE:
            return {
                ...state,
                error: true,
                loading: false
            }

        default:
            return state
    }
}

export default productsReducer
