import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://med-delivery-app-back.onrender.com";

export const fetchShopsName = createAsyncThunk(
    "shopsName/fetch",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/pharmacy");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchMedicine = createAsyncThunk(
    "medicine/fetch",
    async (pharmacy, thunkAPI) => {
        try {
            const response = await axios.get("/medicine", {
                params: {
                    pharmacyName: pharmacy,
                },
            });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const postOrder = createAsyncThunk(
    "order/addToOrder",
    async (order, thunkAPI) => {
        try {
            const response = await axios.post("/order", order);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
