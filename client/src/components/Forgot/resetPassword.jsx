import React from "react";
import { useHistory } from "react-router-dom";
import { resetPassword } from "../../actions";

function ResetPassword() {
  const history = useHistory();
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [ setError] = React.useState("");

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      resetPassword(password);
      history.push("/login");
      alert("Password changed");
    } else {
      setError("Passwords do not match");
    }
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <form id="form" className="flex flex-col" onSubmit={handleSubmit} >
        <label>
          Password:
          <input 
            placeholder="password" 
            name="password" 
            type="password" 
            onChange={onChangePassword}
            />
          <div className="invalid-feedback"></div>
        </label>
        <label>
          Confirm Password:
          <input
            placeholder="confirm password"
            name="confirmPassword"
            type="password"
            onChange={onChangePasswordConfirm}
          />
          <div className="invalid-feedback"></div>
        </label>
      </form>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Reset Password
      </button>
    </div>
  );
}

export default ResetPassword;