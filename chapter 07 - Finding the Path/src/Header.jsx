import React from "react";
import logo from "../image/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SearchSuggestion } from "./Search";
export const Header = (props) => {
  return (
    <>
      <div className="header">
        <div className="location-logo">
          <div className="logo">
            <img src={logo} alt="Logo.png" />
            <h2>Parcel</h2>
          </div>
          <div className="location">
            <input
              type="text"
              value={props.place}
              onChange={props.placeChange}
            />
            <button
              type="button"
              onClick={() => {
                props.geoFinder();
              }}
              className="place"
            >
              <i className="bi bi-geo-alt-fill"></i>
            </button>
          </div>
        </div>

        <div className="left-header">
          <div className="search dropdown">
            {
              <input
                type="text"
                value={props.searchText}
                onChange={props.searchTextManger}
                placeholder="Search here..."
              />
            }
            <button
              type="button"
              onClick={() => {
                props.typing_function();
              }}
            >
              <i className="bi bi-search search"></i>
            </button>
            {props.typing ? (
              <SearchSuggestion
                searchSuggestion={props.searchSuggestion}
                selectResult={props.selectResult}
              />
            ) : (
              ""
            )}
          </div>
          <button
            className="sign-in"
            onClick={() => {
              props.signClick();
            }}
            type="submit"
          >
            <i className="bi bi-person-fill button"></i>{" "}
            {props.signTest ? "Sign out" : "Sign in"}
          </button>
          <button className="contact">
            <i className="bi bi-info-circle-fill"></i> Contact
          </button>
          <button className="cart">
            <i className="bi bi-cart"></i> Cart
          </button>
        </div>
      </div>
    </>
  );
};
