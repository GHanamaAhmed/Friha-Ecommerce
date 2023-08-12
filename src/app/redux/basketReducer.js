import { toasty } from "../component/toasty/toast";

const { createSlice } = require("@reduxjs/toolkit");

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
    order: false,
  },
  reducers: {
    changeIsOrder: function (state, { payload }) {
      state.order = payload;
    },
    addToBasket: function (state, { payload }) {
      state.products = [...state.products, payload];
      toasty("تم وضع المنتج في السلة", {
        toastId: "addProduct",
        autoClose: 5000,
        type: "success",
      });
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
    emptyBasket: function (state) {
      state.products = [];
      state.order = false;
    },
  },
});
const {
  addToBasket,
  remveByIdFromBasket,
  remveByIndexFromBasket,
  updateBasket,
  changeIsOrder,
  emptyBasket
} = basketSlice.actions;
export {
  addToBasket,
  remveByIdFromBasket,
  remveByIndexFromBasket,
  changeIsOrder,
  updateBasket,
  emptyBasket
};
export default basketSlice.reducer;
