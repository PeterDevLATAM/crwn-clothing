import React, { Component } from "react";
import CustomButon from "../custom-button/CustomButon";
import FormInput from "../form-input/FormInput";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss"

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = (event) => {
    //same function for handle state from imputs
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButon type="submit">Sign In</CustomButon>
            <CustomButon onClick={signInWithGoogle} isSignedIn>
              Sign In With Google
            </CustomButon>
          </div>
        </form>
      </div>
    );
  }
}
