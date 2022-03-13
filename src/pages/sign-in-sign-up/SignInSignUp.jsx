import "./sign-in-sign-up.styles.scss"
import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/sign-up.component'

export default function SignInSignUp() {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp/>
    </div>
  )
}
