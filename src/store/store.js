import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.slice";
import { productsReducer } from './products/products.slice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
})

export default store
