import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageForm from './message_form';
import { fetchMessages } from '../actions';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.currentUsername = props.currentUsername;
    this.selectedChannel = props.selectedChannel;
    this.messageArray = props.messageList.map((message) => {
      return <Message message={message} key={message.created_at} />;
    });
  }
  componentWillMount() {
    fetchMessages(this.selectedChannel);
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }
  render() {
    return (
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card card-bordered">
              <div className="card-header">
                <h4 className="card-title"><strong>Chat</strong></h4> <a className="btn btn-xs btn-secondary" href="#" data-abc="true">Freds React Chat</a>
              </div>
              <div className="ps-container ps-theme-default ps-active-y" id="chat-content" style={{ overflowY: "scroll !important", height:"400px !important" }}>
                {this.messageArray}
              </div>
              <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                <div className="ps-scrollbar-x" tabIndex="0" style={{ left: "0px", width: "0px" }} />
              </div>
              <div className="ps-scrollbar-y-rail" style={{ top: "0px", height: "0px", right: "2px" }}>
                <div className="ps-scrollbar-y" tabIndex="0" style={{ top: "0px", height: "2px" }} />
              </div>
            </div>
            <MessageForm selectedChannel={this.selectedChannel} author={this.currentUsername} />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    messageList: state.messageList,
    selectedChannel: state.selectedChannel,
    currentUsername: state.currentUsername
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
