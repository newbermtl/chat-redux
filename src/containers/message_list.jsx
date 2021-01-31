import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

const MessageList = (props) => {
  const messageArray = props.messageList.map((message) => {
    return <Message message={message} key={message.created_at} />;
  });

  return (
    <div className="message-list">
      {messageArray}
    </div>
  );
};


const mapStateToProps = (state) => {
  return { messageList: state.messageList };
};

export default connect(mapStateToProps)(MessageList);
