import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = (event) => {
    let key = event.target.name
    let value = event.target.value
    this.setState({ key : value } )
  }

  handleLogin = (event) => {
    event.preventDefault()
    if (this.state.username.length !== 0 && this.state.password.length !== 0){
      return this.props.handleLogin(this.state.username.length, this.state.password.length)
    }
  }


  render() {
    return (
      <form  onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

//this.props.onSubmit is a function
