
import { ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS } from "../actions/order-details";

const orderInitialState = {
  request: false,
  order: {},
  error: false,
};

export const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    
    case ORDER_REQUEST: {
      return {
        ...state,
        error: false,
        request: true,
      };
    }

    case ORDER_SUCCESS: {
        return {
          ...state, 
          order: action.payload,
          request: false,
          error: false,
        };
      }

    case ORDER_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
      };
    } 
   
    default: {
      return state;
    }
  }
};
