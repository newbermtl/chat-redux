import React from 'react';

const Message = (props) => {
  const message = props.message;
  return (
    <div className="media media-chat">
      <div className="media-body">
        <p> {message.author}</p>
        <p>{message.content}</p>
        <p className="meta"><time>{message.created_at}</time></p>
      </div>
    </div>

  );
};

export default Message;

