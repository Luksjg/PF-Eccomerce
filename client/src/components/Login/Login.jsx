import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import validarEmail from "./validateEmail";
import validatePassword from "./validatePassword";
import axios from "axios";
import { authentication } from "../firebase/config/firebase-config.js";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import style from "./Login.module.css";
import gith from "./gith.png";
import google from "./google.png";

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
      localStorage.setItem("token", token);
      console.log(token);
      history.push("/");
    } catch (error) {
      console.log(error);
      alert("usuario o contraseña incorrectos");
    }
  };

  const handleClickGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.user.uid);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickGithub = async () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.user.uid);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.container}>
      <div className={style.flex}>
        <div className={style.subcontainer}>
          <div className={style.form}>
            <div className={style.title}>
              <h3>Login</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={style.inputs}>
                <input
                  type='email'
                  name='email'
                  placeholder='👤 Email'
                  onChange={handleChangeEmail}
                  value={usuario.email}
                />
                {errors.email && <p className='error'>{errors.email}</p>}
                <input
                  type='password'
                  name='password'
                  placeholder='🔒 Password'
                  onChange={handleChangePassword}
                  value={usuario.password}
                />
              </div>
              <div className={style.bottonLogin}>
                <button type='submit' onClick={handleFinish}>
                  Login
                </button>
              </div>
              <div className={style.olvido}>
                <Link to='/olvide-password/' className='a'>
                  {" "}
                  <h4>forget your password ?</h4>
                </Link>
              </div>
              {errors.password && <p className='error'>{errors.password}</p>}
              <div className={style.buttons}>
                <div className={style.botonGoogle}>
                  <button onClick={handleClickGoogle}>
                    <img src={google} alt='google' />
                  </button>
                </div>
                <div className={style.botonGithub}>
                  <button onClick={handleClickGithub}>
                    <img src={gith} alt='github' />
                  </button>
                </div>
              </div>
            </form>
            <div className={style.registro}>
              <Link to='/register' className='a'>
                <h4>Register</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
