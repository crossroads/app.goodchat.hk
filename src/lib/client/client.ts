import { ApiError, NetworkError } from "lib/errors";

const request = (method: string) => (url: string, body: object) => {
  return fetch(`${process.env.REACT_APP_API_V2_URL}/${url}`, {
    method,
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

const Client = {
  post: request("POST"),
};

export default Client;
