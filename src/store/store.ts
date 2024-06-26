import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/auth-slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
});

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => [thunk],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// export const persistor = persistStore(store)