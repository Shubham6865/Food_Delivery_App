import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.find(item => item.id === newItem.id);

            if (existingItem) {
                // If item already exists, increase quantity
                existingItem.quantity += 1;
            } else {
                // Otherwise, add new item to cart
                state.push({ ...newItem, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        removeAllFromCart(state) {
            return [];
        },
        decreaseQuantity(state, action) {
            const existingItem = state.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
        }
    }
})


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
