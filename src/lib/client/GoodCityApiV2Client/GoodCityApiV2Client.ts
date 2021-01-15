const GoodCityApiV2Client = (url: string, body: object) => {
  return fetch(`${process.env.REACT_APP_API_V2_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
};

export default GoodCityApiV2Client;
