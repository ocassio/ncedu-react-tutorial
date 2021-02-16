import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
        addToCart(state, action) {
            state.products.push(action.payload)
        },

        deleteFromCart(state, action) {
            state.products = state.products.filter(p => p.id !== action.payload)
        },

        clearCart(state) {
            state.products = []
        }

    }
})

export const { addToCart, clearCart, deleteFromCart } = slice.actions

export const cartReducer = slice.reducer

export const selectCartProducts = state => state.cart.products
export const selectCartCount = state => selectCartProducts(state).length