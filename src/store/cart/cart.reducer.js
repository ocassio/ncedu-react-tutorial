import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "./cart.actions";

const initialCartState = {
    products: []
}

function cartReducer(state = initialCartState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                products: [...state.products, action.payload]
            }

        case DELETE_FROM_CART:
            return {
                products: state.products.filter(p => p.id !== action.payload)
            }

        case CLEAR_CART: {
            return {
                products: []
            }
        }

        default:
            return state;
    }
}

export default cartReducer
