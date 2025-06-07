import { orderRequest } from "../../components/api/api";
export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAILED = "ORDER_FAILED";

export const getOrderRequest = (order) => {
  return function (dispatch) {
    dispatch({
      type: ORDER_REQUEST,
    });
    orderRequest(order)
      .then((res) => {
        dispatch({
          type: ORDER_SUCCESS,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: ORDER_FAILED,
          payload: err.message
        });
      });
  };
};