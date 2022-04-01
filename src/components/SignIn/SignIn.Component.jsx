import React from "react";
import FormInput from '../form-input/form-input.Component'
import { CustomButton } from "../Custom-Button/CustomButton.Component";
import './SignIn.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  }
  onChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            name="email"
            type="email"
            handleChane={this.onChangeHandler}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChane={this.onChangeHandler}
            value={this.state.password}
            label='password'
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
