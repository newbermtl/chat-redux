const fetchMessages = (channel) => {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());
  return {
    type: 'SET_MESSAGE_LIST',
    payload: promise
  };
};

export default fetchMessages;
