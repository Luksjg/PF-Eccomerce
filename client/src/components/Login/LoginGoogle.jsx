import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

export default function LoginGoogle() {
  
  const history = useHistory();
  

  const handleSuccess = (response) => {
    console.log(response);
    history.push("/");
    alert("Login Success");
  }

  const handleFailure = (response) => {
    console.log(response);
    alert("Login Failed");
  }

  return (
    <div>
      <GoogleLogin
        clientId="929685646976-f5hais4cdd5q6r1r3ffmo4hrq125e8fu.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        redirectUri={window.location.origin}
      />
    </div>
  );
}
