import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: "" };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
          onChange={this.handleChange}
          value={this.state.message}
        />
        <p>
          Remaining characters:{" "}
          {this.props.maxChars - this.state.message.length}{" "}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
