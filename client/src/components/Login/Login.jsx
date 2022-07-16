import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import validarEmail from "./validateEmail";
import validatePassword from "./validatePassword";
import LoginGoogle from './LoginGoogle'
import axios from "axios";


function validate(email, password) {
  let objeto = {};
  if (email === "") objeto = { ...objeto, email: "this field is required" };
  else if (validarEmail(email))
    email.length > 40
      ? (objeto = { ...objeto, email: "invalid length" })
      : (objeto = { ...objeto, email: "invalid format" });

  if (password === "")
    objeto = { ...objeto, password: "this field is required" };
  else if (validatePassword(password))
    objeto = {
      ...objeto,
      password: "Your password must be at least 8 characters",
    };

  return objeto;
}


export default function Loguin() {
  const errorEmail = useSelector((state) => state.errorEmail);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    token ? history.push("/") : null;
    return () => {
      dispatch({ type: "RESET_ERROR_EMAIL" });
    };
  }, [dispatch, history, token]);

  function handleChangeEmail(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      email: "",
    });
  }

  const handleChangePassword = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let val = validate(usuario.email, usuario.password);
    if (Object.keys(val).length === 0) {
      dispatch({ type: "LOGIN_REQUEST", payload: usuario });
      setUsuario({
        email: "",
        password: "",
      });
      alert("Login Successful");
      if (errorEmail) {
        e.preventDefault();
      } else {
        dispatch({ type: "RESET_ERROR_EMAIL" });
        history.push("/");
      }
    } else setErrors(val);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/user/login", usuario);
      history.push("/");
    } catch (error) {
      console.log(error);
      alert("usuario o contraseña incorrectos");
    }
  }

  
  return (
    <div className="contRegister">
      
      <div className="flex">
        <div className="contLogin">
          <div className="contLogin-content">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Email" onChange={handleChangeEmail} value={usuario.email} />
              {errors.email && <p className="error">{errors.email}</p>}
              <input type="password" name="password" placeholder="Password" onChange={handleChangePassword} value={usuario.password} />
              {errors.password && <p className="error">{errors.password}</p>}
              <LoginGoogle/>  
              <button type="submit" onClick={handleFinish}>Login</button>
            </form>
            <Link to="/olvide-password/" className="a">
              {" "}
              <h4>forget your password</h4>
            </Link>
            <Link to="/register" className="a">
              <h4>Register</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
