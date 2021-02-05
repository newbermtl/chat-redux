import { fetchMessages, createMessage } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'SET_MESSAGE_LIST': {
      console.log(action.payload);
      return action.payload;
    }
    case 'CREATE_MESSAGE': {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
}
