import { configureStore, combineReducers } from "@reduxjs/toolkit";
import collectionReducer from "./reducers/collectionReducer";

const rootReducer = combineReducers({
  collectionReducer,
});

export const Store = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof Store>;
export type AppDispatch = AppStore["dispatch"];
