import React from "react";
import { useHistory } from "react-router-dom";
import { resetPassword } from "../../actions";

import style from "./reset.module.css";

function ResetPassword() {
  const history = useHistory();
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [setError] = React.useState("");

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      resetPassword(password);
      history.push("/login");
      alert("Password changed");
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.flex}>
        <div className={style.subcontainer}>
          <div className={style.form}>
            <div className={style.title}>
              <h1>Cambiar contraseña</h1>
            </div>
            <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
              <div className={style.inputs}>
                <input
                  placeholder='Password'
                  name='password'
                  type='password'
                  onChange={onChangePassword}
                />
                <div className='invalid-feedback'></div>

                <input
                  placeholder='Confirm password'
                  name='confirmPassword'
                  type='password'
                  onChange={onChangePasswordConfirm}
                />
                <div className='invalid-feedback'></div>
              </div>
            </form>
            <div className={style.buttons}>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={handleSubmit}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
