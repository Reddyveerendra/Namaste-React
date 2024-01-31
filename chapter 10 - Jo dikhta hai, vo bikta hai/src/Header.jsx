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
    <div className="w-[1257px] flex  p-4 bg-[#24252A] align-middle">
      <Link to="/mumbai">
        <div className=" flex  center w-[160px]">
          <img src={logo} alt="Logo" className="h-[50px]" />
          <h2 className="color-[#0387A1]">Parcel</h2>
        </div>
      </Link>
      <div className="flex justify-between">
        <div className="algin-center w-[250px] items-center flex">
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
                >
                  <i className="bi bi-geo-alt-fill"></i>
                </button>
              </Link>
            </>
          ) : (
            <h4
              className="text-[aliceblue]"
              onClick={() => {
                locationBarPop();
              }}
            >
              {locationText.split(" ")[0].slice(0, 7)}
              {"..."}
              <i className="bi bi-geo-alt-fill"></i>
            </h4>
          )}
        </div>
        <div className="flex justify-evenly w-[800px] items-center">
          <div className="relative inline-block">
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
            >
              <i className="bi bi-search search bg-[#0387A1] p-[2px]"></i>
            </button>
            {dropDown ? <SearchSuggestion text={restaurant} /> : ""}
          </div>
          <Link to="/login">
            <div className="login">
              <button type="button">
                <i className="bi bi-person-fill button"></i> login
              </button>
            </div>
          </Link>
          <Link to="/contact">
            <div className="contact">
              <button type="button">
                <i className="bi bi-info-circle-fill"></i> Contact
              </button>
            </div>
          </Link>
          <Link to="/mumbai/instamart">
            <div className="cart">
              <button type="button">
                <i className="bi bi-cart"></i> Cart
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
