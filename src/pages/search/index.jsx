import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ListingCard from "../../components/ListingCard";
import Slider from "@mui/material/Slider";
import {
  Checkbox,
  MenuItem,
  Pagination,
  Select,
  Dialog,
  Slide,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="search margin-x">
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {" "}
        <AppBar sx={{ position: "relative", background: "#34A5C9" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <h3 style={{ flex: 1, color: "white", marginLeft: "20px" }}>
              Search Filters
            </h3>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              style={{ fontFamily: "montserrat", fontWeight: "bold" }}
            >
              Apply
            </Button>
          </Toolbar>
        </AppBar>
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
                sx={{ color: "#34a5c9" }}
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
      </Dialog>
      <div className="search-filter hide-for-mobile">
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
              sx={{ color: "#34a5c9" }}
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
          <button onClick={handleClickOpen}>Advanced Search</button>
        </div>
        <div className="search-content-cards">
          {productData.map((data) => (
            <Link
              key={data.id}
              to={"/product/" + data.id}
              style={{ textDecoration: "none" }}
            >
              <ListingCard
                imgSrc={data.imgSrc}
                title={data.title}
                university={data.university}
                division={data.division}
                price={data.price}
              />
            </Link>
          ))}
        </div>
        <div className="search-content-pagination">
          <Pagination count={100} />
        </div>
      </div>
    </div>
  );
}
