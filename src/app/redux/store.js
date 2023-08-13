import { configureStore } from "@reduxjs/toolkit";
import account from "./accountReducer";
import basket from "./basketReducer";
const store = configureStore({
  reducer: {
    account:account,
    basket:basket
  },
});
export default store
