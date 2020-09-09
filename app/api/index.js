const URL = "https://api.github.com";

const handleHTTPError = response => {
  return response.json()
    .then(data => {
      if(!response.ok) {
        throw Error(data.message || 'HTTP error');
      }
      return data
    });
};

export const findUser = userName => {
  const endpointURL = `${URL}/users/${userName}`;
  const options = {
    method: 'GET',
    headers: {
      'Accept': "application/vnd.github.v3+json"
    }
  };
  return fetch(endpointURL, options)
    .then(response => response.json());
};
