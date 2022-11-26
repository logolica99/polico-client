import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const phoneRegExp = /^(?:(?:\+|00)88|01)?\d{11}$/;

const initialValues = {
  phone: "",
  password: "",
};

const userSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  password: yup.string().required("Password is required"),
});

export default function index() {
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="register margin-x">
      <div className="register-heading">
        <h2>Welcome Back to Polico!</h2>
      </div>
      <div className="register-form">
        <div className="register-form-wrapper">
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <p>Phone Number:</p>
                <input
                  type="text"
                  placeholder="Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="phone"
                  value={values.phone}
                />
                <p className="register-form-wrapper-error">
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}
                </p>
                <p>Password:</p>
                <input
                  type="password"
                  placeholder="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="password"
                  value={values.password}
                />
                <p className="register-form-wrapper-error">
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </p>

                <div className="register-form-wrapper-redirect">
                  <p>New User? </p>
                  <Link to="/register">Sign Up</Link>
                </div>
                <div className="register-form-wrapper-submit">
                  <button
                    type="submit"
                    className="register-form-wrapper-submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
