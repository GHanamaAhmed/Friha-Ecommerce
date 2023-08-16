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
      let products1 = [];
      state.products.map((e, i) => {
        state.products.map((el, ind) => {
          if (e.color == el.color && e.size == el.size && i !== ind) {
            return products1.push({ ...el, quntity: e.quntity + el.quntity });
          }
        });
      });
      const products2 = state.products.filter(
        (e, i) =>
          products1.findIndex(
            (el) => el.color == e.color && e.size == el.size
          ) == -1
      );
      const products = products1.concat(products2);
      state.products = products.filter(
        (e, i, s) =>
          s.findIndex((el) => el.color === e.color && el.size === e.size) == i
      );
      state.order = payload;
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
    multyUpdateBasket: function (state, { payload }) {
      console.log(payload);
      state.products = state.products.map((e, i) =>
        payload?.[i] - e.quntity < 0
          ? {
              ...e,
              photos: e.photos.map((el, ind) => {
                if (el.color == e.color && el.sizes.includes(e.size)) {
                  return { ...el, quntity: payload?.[i] };
                }
                return el;
              }),
              maxQuntity: payload?.[i],
              error: true,
            }
          : e
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
  emptyBasket,
  multyUpdateBasket,
} = basketSlice.actions;
export {
  addToBasket,
  remveByIdFromBasket,
  remveByIndexFromBasket,
  changeIsOrder,
  updateBasket,
  emptyBasket,
  multyUpdateBasket,
};
export default basketSlice.reducer;
