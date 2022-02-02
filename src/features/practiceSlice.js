import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   practices: [
//     { id: 1, name: 'ray' },
//     { id: 2, name: 'fel' },
//     { id: 3, name: 'stef' },
//     { id: 4, name: 'wi' },
//   ],
// };

const baseUrl = process.env.REACT_APP_PRACTICE_API_URL;

export const getPracticesAsync = createAsyncThunk(
  'practices/getPracticesAsync',
  async (payload, thunkAPI) => {
    const res = await fetch(`${baseUrl}/practice`);
    const practices = await res.json();
    return { practices };
  }
);

export const addPracticeAsync = createAsyncThunk(
  'practices/addPracticeAsync',
  async (payload, thunkAPI) => {
    const response = await fetch(`${baseUrl}/practice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
      }),
    });

    if (response.ok) {
      const practice = await response.json();
      return { practice };
    }
  }
);

export const deletePracticeAsync = createAsyncThunk(
  'practices/deletePracticeAsync',
  async (payload, thunkAPI) => {
    const response = await fetch(`${baseUrl}/practice/${payload.id}`, {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return { id: payload.id };
    }
  }
);

const practiceSlice = createSlice({
  name: 'practice',
  initialState: { practices: [] },
  reducers: {
    getPractice: (state, action) => {
      return {
        ...state,
        selectedPractice: state.practices.find(
          (practice) => practice.id === action.payload.id
        ),
      };
    },
    // addPractice: (state, action) => {
    //   console.log({ state });
    //   state.push(action.payload);
    // },
    // deletePracticeAsync: (state, action) => {
    //   return state.filter((practice) => practice.id === action.payload.id);
    // },
  },
  extraReducers: {
    [getPracticesAsync.pending]: (state, action) => {
      console.log('loading');
      return;
    },
    [getPracticesAsync.fulfilled]: (state, action) => {
      console.log('done');
      return { ...state, practices: action.payload.practices };
    },
    [addPracticeAsync.fulfilled]: (state, action) => {
      state.practices.push(action.payload.practice);
    },
    [deletePracticeAsync.fulfilled]: (state, action) => {
      return {
        ...state,
        practices: state.practices.filter(
          (practice) => practice.id !== action.payload.id
        ),
      };
    },
  },
});

export const { getPractice } = practiceSlice.actions;
export default practiceSlice.reducer;
