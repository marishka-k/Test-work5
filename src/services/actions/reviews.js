import { getReviewsData } from "../../components/api/api";

export const REVIEWS_REQUEST = "REVIEWS_REQUEST";
export const REVIEWS_SUCCESS = "REVIEWS_SUCCESS";
export const REVIEWS_FAILED = "REVIEWS_FAILED";

export function getReviews(filter) {
  return function (dispatch) {
    dispatch({
      type: REVIEWS_REQUEST,
    });
    getReviewsData()
      .then((res) => {
        dispatch({
          type: REVIEWS_SUCCESS,
          reviews: res,
        });
      })
      .catch(() => {
        dispatch({
          type: REVIEWS_FAILED,
        });
      });
  };
}
