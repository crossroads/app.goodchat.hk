import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import * as serviceWorker from "serviceWorker";

if (
  !process.env.REACT_APP_API_V2_URL ||
  !process.env.REACT_APP_HASURA_URL ||
  !process.env.REACT_APP_GOODCHAT_URL
) {
  throw new Error("Missing environment variables!");
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
