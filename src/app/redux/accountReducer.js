import { customAxios } from "@@/lib/api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const getInfo = createAsyncThunk(
  "account/getInfo",
  async (req, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await customAxios.get("/users/getInfo");
      return fulfillWithValue(res.data);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: {
      id: "",
      firstName: "",
      lastName: "",
      birthday: "",
      provider: "",
      phone: "",
      Photo: "",
      clientId: "",
      email: "",
      role: "",
      createAt: "",
    },
    isLoading: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInfo.fulfilled, (state, { payload }) => {
        state.user = { ...payload };
        state.isLoading = false;
      })
      .addCase(getInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInfo.rejected, (state, { error }) => {
        state.error = error;
        state.isLoading = false;
      });
  },
});
export { getInfo };
export default accountSlice.reducer;
