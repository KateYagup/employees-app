import { configureStore } from '@reduxjs/toolkit';
import workersReducer from './workersSlice';

export default configureStore({
  reducer: workersReducer,
});
