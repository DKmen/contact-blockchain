import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import axios from 'axios';

export interface IContact {
    sender: string;
    firstName: string;
    secondName: string;
    contact: string;
    countryCode: string
}

interface Contact {
    contacts: IContact[]
}

const initialState: Contact = {
    contacts: []
}

export const fetchContact = createAsyncThunk('contact/fetchContact', async (sender: string) => {
    return (await axios.post(process.env.url?.toString() || "", {
        sender
    })).data.contacts;
})

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<IContact>) => {
            state.contacts = [...state.contacts, action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContact.fulfilled, (state, action) => {
                state.contacts = action.payload
            })
            .addCase(fetchContact.pending, (state) => {
            })
            .addCase(fetchContact.rejected, (state) => {
            })
    }
})

export const selectContact = (state: RootState) => state.contact
export const { addContact } = contactSlice.actions
export default contactSlice.reducer;