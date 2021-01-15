import { ApiError } from "lib/errors";

const GoodCityApiV2Client = (url: string, body: object) => {
  return fetch(`${process.env.REACT_APP_API_V2_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (!response.ok) {
      throw new ApiError({
        httpStatus: 123,
        type: "",
        message: "",
      });
    }

    return response.json();
  });
};

export default GoodCityApiV2Client;
