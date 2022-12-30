import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ListingCard from "../../components/ListingCard";
import Slider from "@mui/material/Slider";
import { Checkbox, MenuItem, Pagination, Select } from "@mui/material";

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
    id: "02",
  },
  {
    imgSrc:
      "https://www.reuters.com/resizer/vxF-VbtXdFPEh3R3fymSTyoGZFU=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MWG2II5FBJOWZJMS2ZJRD3QFCI.jpg",
    title: "Apple iPhone 13 256GB",
    university: "BUET",
    division: "Dhaka",
    price: 145000,
    id: "03",
  },
];

export default function Search() {
  const maxPrice = 10000000;
  const [priceRange, setPriceRange] = useState([0, maxPrice]);
  const [priceFilter, setPriceFilter] = useState("ASC");
  const [locations, setLocations] = useState([
    "Barishal",
    "Dhaka",
    "Chattogram",
    "Khulna",
    "Mymensingh",
    "Rajshahi",
    "Rangpur",
    "Sylhet",
  ]);
  const { query } = useParams();

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <div className="search margin-x">
      <div className="search-filter">
        <div className="search-filter-price">
          <h3 className="search-filter-price-heading">Price Range</h3>
          <div className="search-filter-price-slider">
            <Slider
              getAriaLabel={() => "Price range"}
              value={priceRange}
              max={maxPrice}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="auto"
              disableSwap
            />
          </div>
          <div className="search-filter-price-range">
            <div className="search-filter-price-range-box">
              <p>{new Intl.NumberFormat("en-IN").format(priceRange[0])} </p>
            </div>
            <div className="search-filter-price-range-box">
              <p>{new Intl.NumberFormat("en-IN").format(priceRange[1])} </p>
            </div>
          </div>
        </div>
        <div className="search-filter-location">
          <h3 className="search-filter-location-heading">Location</h3>
          <div className="search-filter-location-locations">
            {locations.map((location) => (
              <div className="search-filter-location-locations-item">
                <Checkbox />
                <p>{location} Division</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="search-content">
        <div className="search-content-heading">
          <h2>{query}</h2>
          <div className="search-content-heading-sort">
            <p>Sort By:</p>
            <Select
              sx={{
                width: { xs: "140px", md: "200px" },
                fontSize: { xs: "12px", md: "16px" },
                fontFamily: "Montserrat",
                fontWeight: "500",
                color: "#646464",
              }}
              size="small"
              value={priceFilter}
              onChange={(e) => {
                setPriceFilter(e.target.value);
              }}
            >
              <MenuItem
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  color: "#646464",
                  fontSize: { xs: "12px", md: "16px" },
                }}
                value="ASC"
              >
                Price: Low to High
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  color: "#646464",
                  fontSize: { xs: "12px", md: "16px" },
                }}
                value="DSC"
              >
                Price: High to Low
              </MenuItem>
            </Select>
          </div>
        </div>

        <div className="search-content-advancedSearch ">
          <div></div>
          <button>Advanced Search</button>
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
        <div className="search-content-pagination">
          <Pagination count={100} />
        </div>
      </div>
    </div>
  );
}
