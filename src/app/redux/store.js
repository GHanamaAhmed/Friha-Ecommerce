import { configureStore } from "@reduxjs/toolkit";
import account from "./accountReducer";
const store = configureStore({
  reducer: {
    account:account,
  },
});
export default store
