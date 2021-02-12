const initialProductsState = {
    loading: true,
    products: [],
    query: ''
}

function productsReducer(state = initialProductsState, action) {
    switch (action.type) {

        case 'setProducts':
            return {
                ...state,
                products: action.payload,
                loading: false
            }

        case 'setQuery':
            return {
                ...state,
                query: action.payload
            }

        default:
            return state
    }
}

export default productsReducer
