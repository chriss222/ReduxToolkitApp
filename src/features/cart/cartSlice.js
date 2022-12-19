import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
            // return {cartItems:[], amount: 0, total: 0, isLoading: true}
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        increaseAmount: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.amount = cartItem.amount + 1;
        },
        decreaseAmount: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            if(cartItem.amount > 1) {
                cartItem.amount = cartItem.amount - 1;
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== cartItem.id)
            }
        }
    }
})

console.log(cartSlice);
export const { clearCart, removeItem, increaseAmount, decreaseAmount } = cartSlice.actions;

export default cartSlice.reducer;