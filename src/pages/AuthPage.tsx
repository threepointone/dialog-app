import React, {ChangeEvent, FormEvent, SyntheticEvent} from 'react';

interface Props {
}

interface State {
  email?: string;
  password?: string;
}

export default class AuthPage extends React.Component<Props, State> {

  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const eventData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(eventData);
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
        [event.target.id]: event.target.value,
      });
  };

  render() {
    return (
      <div>
        <h1>The Auth Page</h1>
        <form
          className={"auth-form"}
          onSubmit={this.handleSubmit}
        >
          <div className={"form-control"}>
            <label htmlFor="email">Email</label>
            <input
              id={"email"}
              type={"email"}
              onChange={this.handleInputChange}
            />
          </div>
          <div className={"form-control"}>
            <label htmlFor="password">Password</label>
            <input
              id={"password"}
              type={"password"}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-actions">
            <button type={"button"}>Switch to Signup</button>
            <button type={"submit"}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
