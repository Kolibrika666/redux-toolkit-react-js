import React from "react";
import { ButtonLogin, ButtonRegistration } from "./Button";
function Login() {
  return (
    <>
      <form>
        <label>
          Email
          <input type="text" name="name"></input>
        </label>
        <label>
          Пароль
          <input type="pass" name="name"></input>
        </label>
      </form>
      <article>
        <ButtonLogin />
        <ButtonRegistration />
      </article>
    </>
  );
}

export default Login;
