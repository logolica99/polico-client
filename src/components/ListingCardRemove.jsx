import React from "react";

export default function ListingCardRemove({
  imgSrc,
  title,
  university,
  division,
  price,
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  });
  return (
    <div className="listingCard">
      <img src={imgSrc} alt="" />
      <div className="listingCard-info">
        <div className="listingCard-info-wrapper">
          <h3 className="listingCard-info-wrapper-heading">{title}</h3>
          <p className="listingCard-info-wrapper-location">
            {university}, {division} Division
          </p>
          <p className="listingCard-info-wrapper-price">
            {formatter.format(price)}
          </p>
        </div>
      </div>
      <div className="listingCard-button">
        <button>REMOVE</button>
      </div>
    </div>
  );
}
