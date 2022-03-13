import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
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
    //auth.onAuthStateChanged gives back a function that when colled close up the subscription
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state.currentUser);
            }
          );
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth(); //call the function to close the subscription
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
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
