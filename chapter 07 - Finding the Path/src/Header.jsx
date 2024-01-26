import React, { useEffect, useState } from "react";
import logo from "../image/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useParams } from "react-router-dom";
import { SearchSuggestion } from "./SearchSuggestion";
const Header = () => {
  const location = useParams().location;
  const [locationText, setLocationText] = useState("Mumbai");
  const [restaurant, setRestaurant] = useState("");
  const [locationBar, setLocationBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  async function locationBarPop() {
    setLocationBar((val) => {
      return !val;
    });
  }
  return (
    <div className="Header" style={style.header}>
      <Link to="/mumbai">
        <div className="leftHeader" style={style.leftHeader}>
          <img src={logo} alt="Logo" style={style.logo} />
          <h2 className="appName" style={style.appName}>
            Parcel
          </h2>
        </div>
      </Link>
      <div className="rightHeader" style={style.rightHeader}>
        <div className="searchBarLocation">
          {locationBar ? (
            <>
              <input
                type="text"
                name="locationSearch"
                id="locationSearch"
                value={locationText}
                className="locationSearch"
                placeholder="Mumbai..."
                onChange={(e) => {
                  setLocationText(e.target.value);
                }}
              />
              <Link to={`/${locationText}`}>
                <button
                  type="button"
                  onClick={() => {
                    locationBarPop();
                  }}
                  style={style.searchLocationButton}
                >
                  <i className="bi bi-geo-alt-fill"></i>
                </button>
              </Link>
            </>
          ) : (
            <h4
              onClick={() => {
                locationBarPop();
              }}
              style={style.h4}
            >
              {locationText.split(" ")[0].slice(0, 7)}
              {"..."}
              <i className="bi bi-geo-alt-fill"></i>
            </h4>
          )}
        </div>
        <div className="nav" style={style.nav}>
          <div className="search dropdown" style={style.dropdown}>
            <input
              type="text"
              value={restaurant}
              onChange={(e) => {
                setRestaurant(e.target.value);
              }}
              placeholder="Search here..."
            />
            <button
              type="button"
              onClick={() => {
                setDropDown((val) => {
                  return !val;
                });
              }}
              style={style.searchRestaurantButton}
            >
              <i className="bi bi-search search"></i>
            </button>
            {dropDown ? <SearchSuggestion text={restaurant} /> : ""}
          </div>
          <Link to="/login">
            <div className="login">
              <button type="button" style={style.loginButton}>
                <i className="bi bi-person-fill button"></i> login
              </button>
            </div>
          </Link>
          <Link to="/contact">
            <div className="contact">
              <button type="button" style={style.contactButton}>
                <i className="bi bi-info-circle-fill"></i> Contact
              </button>
            </div>
          </Link>
          <Link to="/cart">
            <div className="cart">
              <button type="button" style={style.cartButton}>
                <i className="bi bi-cart"></i> Cart
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
const style = {
  header: {
    height: "80px",
    width: "100vw",
    boarder: "1px solid black",
    backgroundColor: "#24252a",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  leftHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "50px",
  },
  appName: {
    color: "#0387A1",
    paddingTop: "11px",
  },
  h4: {
    color: "white",
    marginRight: "5vw",
  },
  rightHeader: {
    display: "flex",
    alignItems: "center",
    columnGap: "21vw",
    paddingTop: "10px",
  },
  nav: {
    display: "flex",
    columnGap: "4vw",
  },
  searchLocationButton: {
    color: "#24252A",
    backgroundColor: "#0387A1",
  },
  searchRestaurantButton: {
    color: "#24252A",
    backgroundColor: "#0387A1",
  },
  loginButton: {
    backgroundColor: "#24252A",
    color: "#0387A1",
    border: "0px solid",
  },
  contactButton: {
    backgroundColor: "#24252A",
    color: "#0387A1",
    border: "0px solid",
  },
  cartButton: {
    backgroundColor: "#24252A",
    color: "#0387A1",
    border: "0px solid",
  },
  dropdown: {
    position: "relative",
    display: "inline-block",
  },
};
export default Header;
