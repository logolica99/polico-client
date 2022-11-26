import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const phoneRegExp = /^(?:(?:\+|00)88|01)?\d{11}$/;

const initialValues = {
  fullName: "",
  phone: "",
  password: "",
  passwordConfirmation: "",
};

const userSchema = yup.object().shape({
  fullName: yup.string().required("Name is required"),

  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default function index() {
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="register margin-x">
      <div className="register-heading">
        <h2>Create your polico account</h2>
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
                <p>Full Name:</p>
                <input
                  type="text"
                  placeholder="Full Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="fullName"
                  value={values.fullName}
                />

                {errors.fullName && touched.fullName ? (
                  <p className="register-form-wrapper-error">
                    {errors.fullName}
                  </p>
                ) : null}

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
                <p>Re-enter your password:</p>
                <input
                  type="password"
                  placeholder="Password Confirmation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="passwordConfirmation"
                  value={values.passwordConfirmation}
                />
                <p className="register-form-wrapper-error">
                  {errors.passwordConfirmation &&
                  touched.passwordConfirmation ? (
                    <div>{errors.passwordConfirmation}</div>
                  ) : null}
                </p>
                <div className="register-form-wrapper-redirect">
                  <p>Existing User? </p>
                  <Link to="/login">Login</Link>
                </div>
                <div className="register-form-wrapper-submit">
                  <button
                    type="submit"
                    className="register-form-wrapper-submit"
                  >
                    Sign Up
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
