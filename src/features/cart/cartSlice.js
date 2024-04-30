import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.quantity * existingItem.price
      } else {
        state.cart.push(action.payload)
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload)

      item.quantity++
      item.totalPrice = item.quantity * item.price
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload)

      item.quantity--
      item.totalPrice = item.quantity * item.price

      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action)
      }
    },
    clearCart(state) {
      state.cart = []
    },
  },
})

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (state) => state.cart.cart

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
}

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
}

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0

export const getTotalPriceById = (id) => (state) => {
  const item = state.cart.cart.find((item) => item.id === id)
  if (item) {
    return item.quantity * item.price
  }
  return 0
}
