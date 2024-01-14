import React from "react";
import { ButtonHelp, ButtonLogin, ButtonRegistration } from "./Button";
function Header() {
  return (
    <header>
      {/* <div className="logo"></div> */}
      <img
        src="https://oprosmoskva.ru/wp-content/uploads/vk-logo-psd.png"
        alt="logo"
      ></img>
      <article>
        <ButtonLogin />
        <ButtonRegistration />
        <ButtonHelp />
      </article>
    </header>
  );
}

export default Header;
