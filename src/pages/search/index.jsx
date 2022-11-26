import React from "react";
import { useParams } from "react-router-dom";
import ListingCard from "../../components/ListingCard";

const productData = [
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
];

export default function Search() {
  const { query } = useParams();

  return (
    <div className="search margin-x">
      <div className="search-filter">
        
      </div>
      <div className="search-content">
        <div className="search-content-heading">
          <h2>{query}</h2>
          <div className="search-content-heading-sort">
            <p>Sort By:</p>
            <select name="" id="">
              <option value="ASC" defaultChecked>
                Price: Low to High
              </option>
              <option value="DSC">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="search-content-cards">
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
      </div>
    </div>
  );
}
