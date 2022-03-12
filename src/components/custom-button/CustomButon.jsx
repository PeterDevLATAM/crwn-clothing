import React from "react";
import './custom-button.styles.scss'

export default function CustomButon({ children, isSignedIn, ...otherProps }) {
  return (
    <button className={`${isSignedIn? 'google-sign-in':''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}
