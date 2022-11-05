import React from "react";
import User from "../../assets/icons/account.svg";
import Add from "../../assets/icons/add-white.svg";
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
    <div className="my-account margin-x">
      <div className="my-account-heading">
        <div className="my-account-heading-info">
          <img src={User} alt="" />
          <div className="my-account-heading-info-greet">
            <p>Hello,</p>
            <h4>John Doe</h4>
          </div>
        </div>
        <div className="my-account-heading-redirects">
          <Link
            className="my-account-heading-redirects-add"
            to="/create-listing"
          >
            <img src={Add} alt="" />
            Upload a new listing
          </Link>
          <Link to="/listings">My Listings</Link>
        </div>
      </div>
      <div className="my-account-form">
        <div className="my-account-form-heading">
          <h2>Change Account Details</h2>
        </div>
        <div className="my-account-form-wrapper">
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
                  <p className="my-account-form-wrapper-error">
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
                <p className="my-account-form-wrapper-error">
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
                <p className="my-account-form-wrapper-error">
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
                <p className="my-account-form-wrapper-error">
                  {errors.passwordConfirmation &&
                  touched.passwordConfirmation ? (
                    <div>{errors.passwordConfirmation}</div>
                  ) : null}
                </p>

                <div className="my-account-form-wrapper-submit">
                  <button type="submit">Change</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
