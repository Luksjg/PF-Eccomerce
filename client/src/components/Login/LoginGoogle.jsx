import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/index.js";

export default function LoginGoogle() {
  const history = useHistory();
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    // if on success, dispatch login action with response.profileObj
    if (response.tokenId) {
      dispatch(login(response.profileObj));
      history.push("/");
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
