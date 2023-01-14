import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct(state, action){
      const nextCartItems = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.products = nextCartItems;
      state.quantity -= 1;
    },
  },
});

export const { addProduct,deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
