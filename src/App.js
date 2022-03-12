import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";

import { auth } from "./firebase/firebase.utils";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  //properties
  unsuscribeFromAuth = null;
  //life cycle methods

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged((user) => {//auth.onAuthStateChanged gives back a function that when colled close up the subscription
      this.setState({
        currentUser: user,
      });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth(); //call the function to close the subscription
  }

  render() {
    return (
      <>
        <Header currentUser ={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInSignUp />} />
        </Routes>
      </>
    );
  }
}

export default App;
