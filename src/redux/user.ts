import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// typings
export interface UserState {
  user: {
    email: string;
    username?: string;
    role: [string];
  };
}

const initialState: UserState = {
  user: {
    email: "",
    username: "",
    role: [""],
  } || {
    email: "",
    username: "",
    role: [""],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },

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
export const { setUserEmail, setUserName, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
