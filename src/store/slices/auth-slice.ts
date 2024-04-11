import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginService } from '@/services/auth-service.ts';
import {AxiosError} from "axios";

type DataType = {
    email?      : string,
    password?   : string,
}

const initialState = {
    user : {
        access_token : '',
        user : {}
    },
    error : {
        fields: []
    },
    isLoggedIn : false,
    isLoading : false
};

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}: DataType, { rejectWithValue }) => {
        try {
            return await LoginService({email, password});
        } catch (_err: unknown) {
            const error = _err as AxiosError;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return rejectWithValue({ error: error?.response?.data?.error });
        }
    }
)

// export const logout = createAsyncThunk(
//     "auth/logout",
//     async (token) => {
//         try {
//             return await LogoutService(token);
//         } catch (error) {
//             return error
//         }
//     }
// )

const authSlide = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
            console.log('pending');
        })
            .addCase(login.fulfilled, (state, action) => {
                console.log('fullfilled');
                console.log(state, action)
            }).addCase(login.rejected, (state, { payload }) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            state.error = payload?.error;
            state.isLoggedIn = false;
            state.isLoading = false;
        })
        // [login.fulfilled]: (state, action) => {
        //     state.user = action.payload ;
        //     state.isLoggedIn = true;
        // },
        // [logout.fulfilled]: (state, action) => {
        //     state.user = null;
        //     state.isLoggedIn = false;
        // }
    }
})

const { reducer } = authSlide;

export default reducer;