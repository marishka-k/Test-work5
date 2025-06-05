import { combineReducers } from "redux";
import { reviewsReducer } from "./reviews";


export const rootReducer = combineReducers({
  reviews: reviewsReducer  
});
