const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addItem: (state, action) => {
      // add item code
    },

    removeItem: (state, action) => {
      // remove item code
    },

    updateQuantity: (state, action) => {
      // update quantity code
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
