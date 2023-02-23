import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63f73d46833c7c9c607f9aac.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, apiThunk) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return apiThunk.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, apiThunk) => {
    try {
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (error) {
      return apiThunk.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, apiThunk) => {
        try {
          const response = await axios.delete(`/contacts/${contactId}`);
          return response.data;
        } catch (error) {
          return apiThunk.rejectWithValue(error.message);
        }
      }
    )