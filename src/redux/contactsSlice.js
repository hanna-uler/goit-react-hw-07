import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchInProgress: (state) => {
            state.isLoading = true;
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
         },
        fetchError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
      },
    })

export default contactsSlice.reducer;
export const { fetchInProgress, fetchSuccess, fetchError } = contactsSlice.actions;