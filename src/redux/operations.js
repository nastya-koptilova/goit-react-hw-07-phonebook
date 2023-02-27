import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, postContacts, removeContacts } from "services/API";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const result = await getContacts();
        return result;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const result = await postContacts(contact);
        return result;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
      try {
        const result = await removeContacts(id);
        return result;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );