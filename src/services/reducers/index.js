import { combineReducers } from "redux";
import { reviewsReducer } from "./reviews";
import { orderReducer } from "./order-details";


export const rootReducer = combineReducers({
  reviews: reviewsReducer, 
  order: orderReducer
});
