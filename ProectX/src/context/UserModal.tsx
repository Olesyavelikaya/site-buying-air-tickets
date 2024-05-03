import { createSlice } from "@reduxjs/toolkit";
import { userModalType } from "./contextType";

const token = import.meta.env.VITE_TOKEN;

const initialUserModal: userModalType = {
  userName: "",
  userPassword: token,
};

const userModal = createSlice({
  name: "userModal",
  initialState: initialUserModal,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserPassword(state, action) {
      state.userPassword = action.payload;
    },
  },
});

export { userModal };
