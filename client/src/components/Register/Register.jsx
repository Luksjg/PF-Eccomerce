import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("http://localhost:3001/user/register", { email,username, password });
      history.push("/loginjwt");
    } catch (err) {}
  };

  

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__container__title">
          <h1>Register</h1>
          <form action="">
            <div className="register__container__title__input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                onChange={handleStart}
              />
            </div>
            <div className="register__container__title__input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                ref={usernameRef}
                onChange={handleStart}
              />
            </div>
            <div className="register__container__title__input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                onChange={handleStart}
              />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                onChange={handleStart}
              />
            </div>
            <div className="register__container__title__input">
              <button type="submit" onClick={handleFinish}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}