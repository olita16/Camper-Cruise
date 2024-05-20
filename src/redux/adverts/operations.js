import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, axiosIn } from "../../api";
import { SearchParams } from "../../helpers";

export const getAllAdverts = createAsyncThunk(
  "adverts/getAll",
  async ({ page, limit, searchParams }, thunkAPI) => {
    const axiosParams = {
      page,
      limit,
    };

    SearchParams(searchParams, axiosParams);

    try {
      const { data } = await axiosIn.get(ENDPOINTS.getAll, {
        params: axiosParams,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTotal = createAsyncThunk(
  "adverts/getTotal",
  async (searchParams, thunkAPI) => {
    const axiosParams = {};

    SearchParams(searchParams, axiosParams);

    try {
      const { data } = await axiosIn.get(ENDPOINTS.getAll, {
        params: axiosParams,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);