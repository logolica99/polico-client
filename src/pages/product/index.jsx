import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Heart from "react-heart";
import phoneIcon from "../../assets/icons/phone.svg";

const images = [
  {
    original: "https://picsum.photos/id/1018/1920/1080/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const product = {
  title: "Apple iPhone 13 256GB",
  created_at: new Date(),
  university: "BUET",
  division: "Dhaka",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  price: 500,
  owner: "John Doe",
  phone: "015214323",
};

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

export default function Product() {
  const { product_id } = useParams();
  const [addWishlist, setAddWishlist] = useState(false);
  return (
    <div className="product margin-x">
      <div className="product-details">
        <div className="product-details-heading">
          <div className="product-details-heading-text">
            <h2>{product.title}</h2>
            <p>
              Posted on {product.created_at.getDate()}{" "}
              {product.created_at.toLocaleString("default", { month: "short" })}{" "}
              {formatAMPM(product.created_at)}, {product.university},{" "}
              {product.division} Division
            </p>
          </div>
          <div
            className="product-details-heading-button"
            style={{ width: "36px" }}
          >
            <Heart
              isActive={addWishlist}
              onClick={() => setAddWishlist(!addWishlist)}
              animationScale={1.2}
              animationTrigger="both"
              animationDuration={0.2}
              className={`customHeart${addWishlist ? " active" : ""}`}
            />
          </div>
        </div>
        <div className="product-details-gallery">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showBullets={true}
          />
        </div>
        <div className="product-details-description">
          <h2>Tk {product.price}</h2>
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="product-owner">
        <div className="product-owner-wrapper">
          <div className="product-owner-wrapper-top">
            <h4>
              For Sale by <span>{product.owner}</span>
            </h4>
          </div>
          <div className="product-owner-wrapper-bottom">
            <a href={"tel:+88" + product.phone}>
              <img src={phoneIcon} alt="" />
            </a>
            <p>Call Seller</p>
            {/* <div></div> */}
            <a href={"tel:+88" + product.phone}>{product.phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
