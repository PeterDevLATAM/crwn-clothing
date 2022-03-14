import React, { Component } from "react";
import CustomButon from "../custom-button/CustomButon";
import FormInput from "../form-input/FormInput";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {}
  };
  handleChange = (event) => {
    //same function for handle state from imputs
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
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
