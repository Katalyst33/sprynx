import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// typings
export interface UserState {
  user: {
    email: string;
    username?: string;
    fruits?: Array<string>;
  };
}

const initialState: UserState = {
  user: {
    email: "",
    username: "",
    fruits: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<any>) => {
      state.user.email = action.payload;
    },
    setUserName: (state, action: PayloadAction<any>) => {
      state.user.username = action.payload;
    },

    // reducer to add payload to fruits array
  },
});

// Action creators are generated for each case reducer function
export const { setUserEmail, setUserName } = userSlice.actions;

export default userSlice.reducer;
