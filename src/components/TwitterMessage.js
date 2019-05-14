import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleTyping = (message) => {
    this.setState({message: message})
  }

  handleCalculation = () => this.props.maxChars - this.state.message.length


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} placeholder="Write your message here" onChange={event => this.handleTyping(event.target.value)}/>
        <i>{this.handleCalculation()} characters remaining</i>
      </div>
    );
  }
}

export default TwitterMessage;
