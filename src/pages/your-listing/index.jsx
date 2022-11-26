import React, { useState } from "react";
import ListingCard from "../../components/ListingCard.jsx";
import Pagination from "@mui/material/Pagination";

export default function YourListing() {
  const [productData, setProductData] = useState([
    {
      imgSrc:
        "https://www.digitaltrends.com/wp-content/uploads/2022/07/Nothing-Phone-1-Screen-Hand-Wallpaper-2.jpg",
      title: "Apple iPhone 13 256GB",
      university: "BUET",
      division: "Dhaka",
      price: 145000,
      id: "01",
    },
    {
      imgSrc:
        "https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/10/Google-Pixel-7-Pro-6-Watermarked.jpg",
      title: "Apple iPhone 13 256GB",
      university: "BUET",
      division: "Dhaka",
      price: 145000,
      id: "01",
    },
    {
      imgSrc:
        "https://www.reuters.com/resizer/vxF-VbtXdFPEh3R3fymSTyoGZFU=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MWG2II5FBJOWZJMS2ZJRD3QFCI.jpg",
      title: "Apple iPhone 13 256GB",
      university: "BUET",
      division: "Dhaka",
      price: 145000,
      id: "01",
    },
  ]);
  return (
    <div className="listings margin-x">
      <div className="listings-heading">
        <h2>Your Listings</h2>
      </div>
      <div className="listings-cards">
        {productData.map((data) => (
          <ListingCard
            key={data.id}
            imgSrc={data.imgSrc}
            title={data.title}
            university={data.university}
            division={data.division}
            price={data.price}
          />
        ))}
      </div>
      <div className="listings-pagination">
        <Pagination count={10} />
      </div>
    </div>
  );
}
