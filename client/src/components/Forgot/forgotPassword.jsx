import React, { useState } from "react";
import axios from "axios";
import style from "./Forgot.module.css";
function forgotPassword() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    // si hay un email valido, se envia una peticion al servidor
    if (email.length > 0) {
      e.preventDefault();
      const res = await axios.post(
        "https://green--shop.herokuapp.com/user/forgotPassword",
        { email }
      );
      if (res.data.success) {
        alert(
          "Se ha enviado un correo con las instrucciones para restablecer la contraseña"
        );
      } else {
        alert("El correo no existe");
      }
    }
  };

  return (
    <div className={style.container}>
      <div className={style.flex}>
        <div className={style.subcontainer}>
          <div className={style.form}>
            <div className={style.title}>
              <h1>Forgot Password</h1>
            </div>
            <form onSubmit={onSubmit}>
              {/*       <label>Email</label> */}
              <div className={style.inputs}>
                <input
                  type='email'
                  className='emailInput'
                  placeholder='Email'
                  id='email'
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className={style.buttons}>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forgotPassword;
