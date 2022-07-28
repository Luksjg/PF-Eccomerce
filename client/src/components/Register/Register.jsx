import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";

import style from "./Register.module.css";

function Register() {
  // form validation rules
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("⚠ Password is required")
      .min(6, "⚠ Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("⚠ Confirm Password is required")
      .oneOf([Yup.ref("password")], "⚠ Passwords must match"),
    username: Yup.string()
      .required("⚠ Name is required")
      .min(3, "⚠ Name must be at least 3 characters")
      .max(15, "⚠ Name must be less than 20 characters"),
    email: Yup.string()
      .required("⚠ Email is required")
      .email("⚠ Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (e) => {
    // alert when form is submitted successfully and redirect to login page
    if (Object.keys(errors).length === 0) {
      await axios.post("https://green--shop.herokuapp.com/user/register", e);
      alert("Form Submitted Successfully");
      history.push("/login");
      register(e);
    } else {
      alert("Form is invalid");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.flex}>
        <div className={style.subcontainer}>
          <div className={style.form}>
            <section>
              <div className={style.title}>
                <h1>Registrate</h1>
              </div>
              <h2>Registrate y accede a todos los servicios</h2>

              <form
                id='form'
                className='flex flex-col'
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={style.inputs}>
                  <input
                    type='text'
                    {...register("username", {
                      required: true,
                      maxLength: 10,
                    })}
                    placeholder='Usuario'
                  />
                  <p>{errors.username?.message}</p>

                  <input
                    type='text'
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    placeholder='email'
                  />
                  <p>{errors.email?.message}</p>

                  <input
                    placeholder='Contraseña'
                    name='password'
                    type='password'
                    {...register("password")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <div className='invalid-feedback'>
                    <p>{errors.password?.message}</p>
                  </div>

                  <input
                    placeholder='Confirmar Contraseña'
                    name='confirmPassword'
                    type='password'
                    {...register("confirmPassword")}
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                  />
                  <div className='invalid-feedback'>
                    <p>{errors.confirmPassword?.message}</p>
                  </div>
                </div>
                <div className={style.boton}>
                  <button className='btn'>Registrar</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
