const { createSlice } = require("@reduxjs/toolkit");

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
    order:false
  },
  reducers: {
    changeIsOrder:function (state, { payload }) {
        state.order=payload
    },
    addToBasket: function (state, { payload }) {
      state.products = [...state.products, payload];
    },
    remveByIndexFromBasket: function (state, { payload }) {
      state.products = state.products.filter((e, i) => i != payload);
    },
    remveByIdFromBasket: function (state, { payload }) {
      state.products = state.products.filter((e, i) => i != payload);
    },
    updateBasket: function (state, { payload }) {
      state.products = state.products.map((e, i) =>
        payload?.index == i ? { ...payload?.basket } : e
      );
    },
  },
});
const {
  addToBasket,
  remveByIdFromBasket,
  remveByIndexFromBasket,
  updateBasket,changeIsOrder
} = basketSlice.actions;
export {
  addToBasket,
  remveByIdFromBasket,
  remveByIndexFromBasket,
  updateBasket,
  changeIsOrder
};
export default basketSlice.reducer;
