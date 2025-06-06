import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://684302e3e1347494c31ecba3.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/contacts");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const res = await axios.post("/contacts", JSON.stringify(contact));
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

// export const deleteContact = createAsyncThunk("contacts/deleteContact", async () => {
//     const res = await axios.delete("/contacts");
//     return res.data;
// });