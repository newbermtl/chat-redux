const baseURL = 'https://wagon-chat.herokuapp.com';

export const fetchMessages = (channel) => {
  const url = `${baseURL}/${channel}/messages`;
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: 'SET_MESSAGE_LIST',
    payload: promise
  };
};

export const createMessage = (channel, author, content) => {
  const url = `${baseURL}/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  };
};

