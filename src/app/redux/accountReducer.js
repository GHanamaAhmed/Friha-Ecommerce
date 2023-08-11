import { customAxios } from "@@/lib/api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const getInfo = createAsyncThunk(
  "account/getInfo",
  async (req, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await customAxios.get("/users/getInfo");
      return fulfillWithValue(res.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const logout = createAsyncThunk(
  "account/logout",
  async (req, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await customAxios.get("/auth");
      return fulfillWithValue(res.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: {
      _id: "",
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
    isLoading: true,
    error: null,
    isAuthenticated: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInfo.fulfilled, (state, { payload }) => {
        state.user = { ...payload };
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(getInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInfo.rejected, (state, { error }) => {
        state.error = error;
        state.isLoading = false;
        state.isAuthenticated = false;
      }).addCase(logout.fulfilled, (state, { payload }) => {
        for (const key of Object.keys(state.user)) {
          state.user[key]=""
        }
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, { error }) => {
        state.error = error;
        state.isLoading = false;
      });;
  },
});
export { getInfo,logout };
export default accountSlice.reducer;
