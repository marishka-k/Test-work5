import { REVIEWS_FAILED, REVIEWS_REQUEST, REVIEWS_SUCCESS } from "../actions/reviews";

const reviewsInitialState = {
  reviews: [],
  reviewsRequest: false,
  reviewsFailed: false,
};

export const reviewsReducer = (state = reviewsInitialState, action) => {
  switch (action.type) {

    case REVIEWS_FAILED: {
      return {
        ...state,
        reviewsRequest: false,
        reviewsFailed: true,
      };
    }

    case REVIEWS_REQUEST: {
      return {
        ...state,
        reviewsRequest: true,
        reviewsFailed: false,
      };
    }

    case REVIEWS_SUCCESS: {
      return {
        ...state,
        reviewsRequest: false,
        reviewsFailed: false,
        reviews: action.reviews,
      };

    }

    default: {
      return state;
      
    }
  }
};
