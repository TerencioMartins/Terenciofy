import React from "react";
import { loginUrl } from "../../spotify";
import "./login.css";
import terenciofy from "../../assets/terenciofy.png"

function Login() {
  return (
    <div className="login">
      <img className="logo" src={terenciofy} />

      <a href={loginUrl}>ENTRAR COM SPOTIFY</a>
    </div>
  );
}

export default Login;
