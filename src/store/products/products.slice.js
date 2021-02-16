import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit"
import { loadProducts as loadProductsFromServer } from '../../data/products.data'

const initialState = {
    loading: true,
    products: [],
    query: '',
    error: false
}

export const loadProducts = createAsyncThunk(
    'loadProducts',
    loadProductsFromServer
)

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadProducts.pending, (state) => {
            state.loading = true
        })

        builder.addCase(loadProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })

        builder.addCase(loadProducts.rejected, (state) => {
            state.error = true
            state.loading = true
        })
    }
})

export const { setQuery } = slice.actions

export const productsReducer = slice.reducer

export const selectProducts = state => state.products.products
export const selectLoading = state => state.products.loading
export const selectQuery = state => state.products.query

export const selectFilteredProducts = createSelector(
    selectProducts,
    selectQuery,
    (products, query) => products.filter(
        product => product.name.toLowerCase().includes(query.toLowerCase())
    )
)
