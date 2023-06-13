import { configureStore } from '@reduxjs/toolkit';
import productSliceReducer from './ProductsSlice';

const WarehouseStore = configureStore({
  reducer: {
    product: productSliceReducer
  }
  });

export default WarehouseStore;
export type WarehouseState = ReturnType<typeof WarehouseStore.getState>;
export type AppDispatch = typeof WarehouseStore.dispatch;