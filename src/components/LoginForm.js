import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    if (username != '' && password != '') {
      this.props.handleLogin({ username, password })
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => this.setState({
                username: e.target.value
              })}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => this.setState({
                password: e.target.value
              })}
            />
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
