import React from 'react';

const Message = (props) => {
  const message = props.message;
  return (
    <div className="message">
      <p> {message.author} - {message.created_at} </p>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
