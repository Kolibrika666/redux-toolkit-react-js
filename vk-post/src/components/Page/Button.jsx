import React from "react";
export function Button({ value, onButtonClick }) {
  return <button onClick={onButtonClick}>{value}</button>;
}

export function ButtonLogin() {
  return <Button value="вход" onClick={() => {}} />;
}

export function ButtonRegistration() {
  return <Button value="регистрация" onClick={() => {}} />;
}

export function ButtonHelp() {
  return <Button value="помощь" onClick={() => {}} />;
}
