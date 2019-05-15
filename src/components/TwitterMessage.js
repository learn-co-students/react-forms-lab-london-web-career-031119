import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentCharCount: ""
    };
  }

  handleChars = event => {
    this.setState({
      currentCharCount: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleChars(event)}
          value={this.state.currentCharCount}
        />
        <strong>
          {this.props.maxChars - this.state.currentCharCount.length}
        </strong>
      </div>
    );
  }
}

export default TwitterMessage;
