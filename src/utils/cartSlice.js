import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Redux uses Immer behind the Scene
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
<<<<<<< HEAD
      // console.log(current(state));
=======
      console.log(current(state));
>>>>>>> f41d4357fbe68c727fc5a9229504b8fe861f87b3
      state.items.length = 0;
      // return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
