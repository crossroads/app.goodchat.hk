import { ApiError, NetworkError } from "lib/errors";
import axios, { AxiosError } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_V2_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, data } = error.response;

      throw new ApiError({
        httpStatus: status,
        type: data.type ?? "InternalServerError",
        message: data.error ?? "Something went wrong",
      });
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // It could be due to
      // 1. Poor network connection/Internet disconnected
      // 2. Server down
      // We can use window.navigator.onLine to differentiate between
      // 1 and 2
      throw new NetworkError(error.message);
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error.message);
    }
  }
);

const client = axios;

export default client;
