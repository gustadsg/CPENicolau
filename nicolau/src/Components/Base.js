import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Base(props) {
  let logout;
  if (props.logout === 'true'){
    logout = true
  } else{
    logout = false
  }
  return (
    <>
      <Navbar />
      {props.children}
      <Footer logout={logout} />
    </>
  );
}
