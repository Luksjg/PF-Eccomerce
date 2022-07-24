import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
    if(Object.keys(errors).length === 0) {
      await axios.post("https://green--shop.herokuapp.com/user/register", e);
      alert("Form Submitted Successfully");
      history.push("/login");
      register(e);
    } else {
      alert("Form is invalid");
    }
  }

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign in</h2>
          <p>register and enjoy to servises</p>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username", { required: true, maxLength: 10 })}
              placeholder="username"
            />
            <p>{errors.name?.message}</p>

            <input
              type="text"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="email"
            />
            <p>{errors.email?.message}</p>

            <input
              placeholder="password"
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">
              <p>{errors.password?.message}</p>
            </div>

            <input
              placeholder="confirm password"
              name="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              <p>{errors.confirmPassword?.message}</p>
            </div>  
            <button className="btn">Sig in</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;