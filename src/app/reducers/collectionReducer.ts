import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICollection } from "../../models/ICollection";

const URL = "https://robox-test.herokuapp.com/api/collection";
const API_KEY = "test123";

interface IDataState {
  data: ICollection[];
  error: string;
  loading: boolean;
}

const initialState: IDataState = {
  data: [],
  error: "",
  loading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.error.message ?? "failed fetch data";
    });
    builder.addCase(fetchData.fulfilled, (state, action: any) => {
      state.loading = false;
      state.data = action.payload.collection;
    });
  },
});

export const fetchData = createAsyncThunk<IDataState["data"]>(
  "fetch/data",
  async () => {
    try {
      const response = await axios.get(URL, { headers: { apikey: API_KEY } });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export default dataSlice.reducer;
