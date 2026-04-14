import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function useLogin(onLogin) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enableSubmit = EMAIL_REGEX.test(email) && password.length >= 8;

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (!enableSubmit || typeof onLogin !== "function") {
      return;
    }

    onLogin(email, password);
  };

  return {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  };
}

export default useLogin;
