import { ApiError } from "lib/errors";

const GoodCityApiV2Client = (url: string, body: object) => {
  return fetch(`${process.env.REACT_APP_API_V2_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (response) => {
    const data = await response.json();
    if (!response.ok) {
      throw new ApiError({
        httpStatus: response.status,
        type: data.type,
        message: data.error,
      });
    }

    return data;
  });
};

export default GoodCityApiV2Client;
