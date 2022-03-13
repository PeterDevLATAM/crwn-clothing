import "./sign-up.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButon from "../custom-button/CustomButon";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    //compare pws
    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword( //method of auth object that returns user object back 
        email,
        password
      );

      await createUserProfileDocument(user, { displayName }); //passing user to create user profile document in firestore db
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error.message)
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  handleChange = (event) => {
    //same function for handle state from imputs
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label={"Password"}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label={"Confirm Password"}
            required
          ></FormInput>
          <CustomButon type="submit">SIGN UP</CustomButon>
        </form>
      </div>
    );
  }
}

export default SignUp;
