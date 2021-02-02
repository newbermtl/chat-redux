export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'SET_MESSAGE_LIST':
      return action.payload;
    default:
      return state;
  }
}
