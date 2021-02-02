import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import fetchMessages from '../actions';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.selectedChannel = props.selectedChannel;
    this.messageArray = props.messageList.map((message) => {
      return <Message message={message} key={message.created_at} />;
    });
  }
  componentWillMount() {
    fetchMessages(this.selectedChannel);
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
            <div className="publisher bt-1 border-light">
              <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
              <input className="publisher-input" type="text" placeholder="Write something" />
              <span className="publisher-btn file-group" >
                <i className="fa fa-paperclip file-browser" />
                <input type="file" />
              </span>
              <a className="publisher-btn" href="#" data-abc="true">
                <i className="fa fa-smile" />
              </a>
              <a className="publisher-btn text-info" href="#" data-abc="true" >
                <i className="fa fa-paper-plane" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    messageList: state.messageList,
    selectedChannel: state.selectedChannel
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
