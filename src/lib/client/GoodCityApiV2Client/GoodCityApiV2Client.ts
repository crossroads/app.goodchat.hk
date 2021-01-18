import { ApiError, NetworkError } from "lib/errors";

const GoodCityApiV2Client = (url: string, body: object) => {
  return fetch(`${process.env.REACT_APP_API_V2_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        throw new ApiError({
          httpStatus: response.status,
          type: data.type ?? "InternalServerError",
          message: data.error ?? "Something went wrong",
        });
      }

      return data;
    })
    .catch((e) => {
      if (e instanceof TypeError) {
        throw new NetworkError(e.message);
      }
      throw e;
    });
};

export default GoodCityApiV2Client;
