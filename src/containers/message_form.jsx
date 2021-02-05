import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.author,
      message: "",
      channel: props.selectedChannel
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    createMessage(this.state.channel, this.state.author, this.state.message);
    this.setState({ message: "" });
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className="publisher bt-1 border-light">
        <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
        <form onSubmit={this.handleSubmit}>
          <input
            id="chat-input"
            className="publisher-input"
            type="text"
            placeholder="Write something"
            onChange={this.handleChange}
            value={this.state.message}
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
