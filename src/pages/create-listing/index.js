import React, { useState, useRef } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Gallery from "../../assets/icons/gallery.svg";
import DemoUpload from "../../components/DemoUpload";

const initialValues = {
  division: "",
  university: "",
  title: "",
  description: "",
  price: "",
};

const userSchema = yup.object().shape({
  division: yup.string().required("Division is required"),
  university: yup.string().required("University is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required"),
});

export default function CreateListing() {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const image4Ref = useRef();

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="create-listing">
      <div className="create-listing-wrapper">
        <div className="create-listing-wrapper-heading">
          <h2>Create a listing</h2>
        </div>
        <div className="create-listing-wrapper-form">
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
              <form
                onSubmit={handleSubmit}
                value={values.division}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <select id="division">
                  <option value="" selected disabled hidden>
                    Select a city of division
                  </option>
                  <option value="Barishal">Barishal Division</option>
                  <option value="Chattogram">Chattogram Division</option>
                  <option value="Dhaka">Dhaka Division</option>
                  <option value="Khulna">Khulna Division</option>
                  <option value="Mymensingh">Mymensingh Division</option>
                  <option value="Rajshahi">Rajshahi Division</option>
                  <option value="Rangpur">Rangpur Division</option>
                  <option value="Sylhet">Sylhet Division</option>
                </select>
                <div className="create-listing-wrapper-form-error">
                  {errors.division && touched.division ? (
                    <p>{errors.division}</p>
                  ) : null}
                </div>
                <select
                  id="university"
                  onSubmit={handleSubmit}
                  value={values.university}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" defaultValue disabled hidden>
                    Select a university
                  </option>
                  <option value=""></option>
                </select>
                <div className="create-listing-wrapper-form-error">
                  {errors.university && touched.university ? (
                    <p>{errors.university}</p>
                  ) : null}
                </div>
                <p>Product title</p>
                <input
                  type="text"
                  onSubmit={handleSubmit}
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="title"
                />
                <div className="create-listing-wrapper-form-error">
                  {errors.title && touched.title ? <p>{errors.title}</p> : null}
                </div>
                <p>Description</p>
                <textarea
                  style={{ resize: "vertical" }}
                  onSubmit={handleSubmit}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="description"
                ></textarea>
                <div className="create-listing-wrapper-form-error">
                  {errors.description && touched.description ? (
                    <p>{errors.description}</p>
                  ) : null}
                </div>

                <p
                  onSubmit={handleSubmit}
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="price"
                >
                  Product Price(Tk)
                </p>
                <input type="number" name="price" />
                <div className="create-listing-wrapper-form-error">
                  {errors.price && touched.price ? <p>{errors.price}</p> : null}
                </div>

                <div className="create-listing-wrapper-form-image_uploads">
                  <h2>Add up to 4 photos</h2>
                  <input
                    type="file"
                    id="image1"
                    accept="image/png,image/jpeg"
                    ref={image1Ref}
                    onChange={(e) => {
                      setImage1(e.target.files[0]);
                    }}
                    hidden
                  />
                  <input
                    type="file"
                    id="image2"
                    accept="image/png,image/jpeg"
                    onChange={(e) => {
                      setImage2(e.target.files[0]);
                    }}
                    ref={image2Ref}
                    hidden
                  />
                  <input
                    type="file"
                    id="image3"
                    accept="image/png,image/jpeg"
                    onChange={(e) => {
                      setImage3(e.target.files[0]);
                    }}
                    ref={image3Ref}
                    hidden
                  />
                  <input
                    type="file"
                    id="image4"
                    accept="image/png,image/jpeg"
                    onChange={(e) => {
                      setImage4(e.target.files[0]);
                    }}
                    ref={image4Ref}
                    hidden
                  />

                  <div
                    className="create-listing-wrapper-form-image_uploads-item"
                    style={{ cursor: "pointer" }}
                  >
                    {image1 ? (
                      <img
                        src={URL.createObjectURL(image1)}
                        alt=""
                        className="create-listing-wrapper-form-image_uploads-item-thumb"
                      ></img>
                    ) : (
                      <img
                        src={Gallery}
                        alt=""
                        className="create-listing-wrapper-form-image_uploads-item-gallery"
                        onClick={() => {
                          image1Ref.current.click();
                        }}
                      />
                    )}
                  </div>
                  <div
                    className="create-listing-wrapper-form-image_uploads-item"
                    style={{
                      opacity: image1 ? 1 : 0.6,
                      cursor: image1 ? "pointer" : "default",
                    }}
                  >
                    {image2 ? (
                      <img
                        src={URL.createObjectURL(image2)}
                        className="create-listing-wrapper-form-image_uploads-item-thumb"
                        alt=""
                      ></img>
                    ) : (
                      <img
                        src={Gallery}
                        alt=""
                        className="create-listing-wrapper-form-image_uploads-item-gallery"
                        onClick={() => {
                          image2Ref.current.click();
                        }}
                      />
                    )}
                  </div>
                  <div
                    className="create-listing-wrapper-form-image_uploads-item"
                    style={{
                      opacity: image2 ? 1 : 0.6,
                      cursor: image2 ? "pointer" : "default",
                    }}
                  >
                    {image3 ? (
                      <img
                        src={URL.createObjectURL(image3)}
                        className="create-listing-wrapper-form-image_uploads-item-thumb"
                        alt=""
                      ></img>
                    ) : (
                      <img
                        src={Gallery}
                        alt=""
                        className="create-listing-wrapper-form-image_uploads-item-gallery"
                        onClick={() => {
                          image3Ref.current.click();
                        }}
                      />
                    )}
                  </div>
                  <div
                    className="create-listing-wrapper-form-image_uploads-item"
                    style={{
                      opacity: image3 ? 1 : 0.6,
                      cursor: image3 ? "pointer" : "default",
                    }}
                  >
                    {image4 ? (
                      <img
                        src={URL.createObjectURL(image4)}
                        className="create-listing-wrapper-form-image_uploads-item-thumb"
                        alt=""
                      ></img>
                    ) : (
                      <img
                        src={Gallery}
                        alt=""
                        className="create-listing-wrapper-form-image_uploads-item-gallery"
                        onClick={() => {
                          image4Ref.current.click();
                        }}
                      />
                    )}
                  </div>
                  {image1 ? "" : <p>You must upload at least one photo</p>}
                </div>

                <button type="submit">Post Ad</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
