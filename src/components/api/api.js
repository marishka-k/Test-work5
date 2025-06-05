import { checkResponse } from "../../utils/check-response";
import { URL } from "../../utils/constats";

const config = {
  url: URL,
  headers: {
    "Content-type": "application/json",
  },
};

export const getReviewsData = async () => {
  const res = await fetch(`${config.url}/reviews`, {
    method: "GET",
    headers: config.headers,
  });
  return checkResponse(res);
};

