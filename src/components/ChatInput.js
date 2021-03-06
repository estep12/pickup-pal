import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      <form
        action="."
        onSubmit={event => {
          event.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <input 
          className="chat-input"
          type="text"
          id="message-input"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={event => this.setState({ message: event.target.value })}
        />
        <input id="submit" type="submit" value={'Send'} />
      </form>
    )
  }
}

export default ChatInput