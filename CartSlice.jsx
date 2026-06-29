import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array chứa các object: { id, name, price, image, quantity }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity += amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
