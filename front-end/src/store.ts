import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/cart';

const store = configureStore({
  reducer: {
    [CartSlice.name]: CartSlice.reducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
