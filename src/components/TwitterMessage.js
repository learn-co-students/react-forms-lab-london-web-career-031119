import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidUpdate() {
    console.log(this.state.message)
  }

  render() {
    const { message } = this.state
    const { maxChars } = this.props
    const charsRemain = maxChars - message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={(e) => this.setState({
            message: e.target.value
          })}
        />
        <span>{charsRemain}{'/'}{maxChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
