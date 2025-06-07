import { checkResponse } from "../../utils/check-response";
import { URL } from "../../utils/constats";

const config = {
  url: URL,
  headers: {
    "Content-type": "application/json",
  },
};

export const getReviewsData = async () => {
  const res = await fetch(`${config.url}/comments?limit=3 `, {
    method: "GET",
    headers: config.headers,
  });
  return checkResponse(res);
};

export const orderRequest = async (order) => {
  const res = await fetch(`${config.url}/posts/add`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(order),
  })
  return checkResponse(res);
};

