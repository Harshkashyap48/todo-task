import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducers'; // Adjust path if necessary

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
