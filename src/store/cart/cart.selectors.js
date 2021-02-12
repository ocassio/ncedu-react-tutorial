export const selectCartProducts = state => state.cart.products
export const selectCartCount = state => selectCartProducts(state).length