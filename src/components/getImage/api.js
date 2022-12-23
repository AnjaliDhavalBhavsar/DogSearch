import { endpoint, api_value } from "../../constants";

export const getImageApi = async (id) => {
  return await fetch(`${endpoint}v1/images/search?breed_id=${id}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": api_value,
    },
  }).then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
};
