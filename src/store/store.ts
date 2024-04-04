//todo Add Slice Reducers to the Store
// Next, we need to import the reducer function from the counter slice and add it to our store.
// By defining a field inside the reducer parameter, we tell the store to use this slice reducer function
// to handle all updates to that state.
//! import counterReducer from './slices/accountSlice'
//! counter: counterReducer,

import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slices/accountSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//* ⬆This creates a Redux store, and also automatically configure the Redux DevTools extension
//* ⬆so that you can inspect the store while developing.
