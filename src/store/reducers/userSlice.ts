import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserinfo } from "../../../src/api/user";
import { AppThunk, RootState } from "../index";

enum Gender {
  "男" = 1,
  "女" = 2,
}
interface UserState {
  openId: string;
  avatarUrl?: string;
  nickname?: string;
  gender?: Gender;
  status?: string;
  loading: boolean;
}

export const fetchUserInfo = createAsyncThunk<UserState, void>(
  "user/fetchByIdStatus",
  async (_, thunkAPI) => {
    thunkAPI.getState();
    const response = await getUserinfo();
    console.log(response);
    return response.data;
  }
);

const initialState: UserState = {
  openId: "",
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
  },
  extraReducers: (builders) =>
    builders
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        console.log("rejected", action);
      })
      .addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
      }),
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
