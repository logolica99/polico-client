import React from "react";
import axios from "axios";

export default function DemoUpload() {
  const uploadFile = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "qeq0wotq");
    axios
      .post("https://api.cloudinary.com/v1_1/dtjhgjvzk/image/upload", formData)
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          uploadFile(event.target.files);
          
        }}
      />
    </div>
  );
}
