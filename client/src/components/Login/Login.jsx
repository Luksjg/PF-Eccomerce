import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/index.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import LoginGoogle from "./LoginGoogle";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function onChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmitLogin(e) {
    e.preventDefault();
    if (
      Object.keys(data).length === 2 &&
      data.email !== "" &&
      data.password !== ""
    ) {
      let response = null;
      try {
        response = await fetch(`http://localhost:3001/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result) {
          if (result.msg === "Login success") {
            dispatch(login(result.data));
            setData({
              email: "",
              password: "",
            });
            alert("Login success");
            history.push("/", { replace: true });
          } else {
            alert("Login failed");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmitLogin} autoComplete="off">
            <div className="col bg-white p-5 col-lg-7 col-xl-6 rounded-end">
              <h2 className="fw-bold text-center pt-5 mb-5">Welcome</h2>
              {/* Formulario de login */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="email"
                  name="email"
                  value={data.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  
                  onClick={handleSubmitLogin}
                >
                  {" "}
                  Sign In{" "}
                </button>
              </div>
              <div className="container w-100 my-5">
                <div className="row my-3 text-center">
                  <div >
                  <a href={'http://localhost:3000/auth/google'}>
                            <img src='https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png' width="60" alt="google" className='linkGithub' />
                        </a>
                        <a href={'http://localhost:3000/auth/github'}>
                            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width="60" alt="github" className='linkGithub' />
                        </a>
                  </div>
                  <div>
                    <LoginGoogle/>
                  </div>
                </div>
              </div>
              <div className="row my-3 text-center">
                <span>
                  {" "}
                  You don't have an account? Go to...
                  <strong>
                    <Link to={"/register"}>Create your account</Link>
                  </strong>
                </span>
                <strong>
                  <Link to={`/forgotPass`}>
                    <span>Forgot your password?</span>
                  </Link>
                </strong>
              </div>
            </div>
          
        
      </form>
    </div>
  );
};

export default Login;
