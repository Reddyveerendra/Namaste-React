import React, { useState } from "react";
import { locationFetcher, apiKey, menuType } from "./Config";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { imgPrefix } from "./Config";
import ShimmerItem from "./ShimmerItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FoodItems from "./foodItems";
import Error from "./Error";
const Restaurant = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menuItemsData, setMenuItemsData] = useState([]);
  async function locationFetch(value = "mumbai") {
    try {
      const res = await fetch(
        locationFetcher[0] + value + locationFetcher[1] + apiKey
      );
      const json = await res.json();
      await restaurantDataFetch(json[0].lon, json[0].lat);
    } catch {
      console.log("error in locationFetch");
    }
  }
  async function restaurantDataFetch(lon, lat) {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${params.id}`
      );
      const json = await res.json();
      setRestaurant(json?.data?.cards[0].card?.card?.info);
      setMenuItemsData(
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == menuType)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || []
      );
    } catch {
      console.log("error in list");
    }
  }
  useEffect(() => {
    locationFetch(params.location);
  }, []);
  return (
    <>
      {JSON.stringify({}) === JSON.stringify(restaurant) ? (
        <div style={{ margin: "5% 20%" }}>
          {Array(5)
            .fill("")
            .map(() => {
              return <ShimmerItem />;
            })}
        </div>
      ) : (
        <div style={{ margin: "5% 20%" }}>
          <div
            className="intro"
            style={{
              padding: "7px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="left">
              <div
                className="hotelName"
                style={{ fontSize: "large", fontWeight: "700" }}
              >
                {restaurant.name}
              </div>
              <div
                className="cuisines"
                style={{ fontSize: "smaller", color: "#7a7575" }}
              >
                {restaurant?.cuisines?.slice(0, 2).join(", ")}
              </div>
              <div
                className="place"
                style={{ fontSize: "smaller", color: "#7a7575" }}
              >
                {restaurant?.areaName + ", 3.4 km"}
              </div>
            </div>
            <div
              className="right"
              style={{
                padding: "2px",
                borderRadius: "16px",
                border: "1px solid #cbcbcb",
              }}
            >
              <div className="star" style={{ color: "#3D9B6D" }}>
                <i className="bi bi-star-fill"></i>{" "}
                {restaurant?.avgRatingString}
              </div>
              <div className="rating" style={{ fontSize: "x-small" }}>
                {restaurant?.totalRatingsString}
              </div>
            </div>
          </div>
          <div className="distanceAndTime">
            <i className="bi bi-bicycle"></i> {restaurant?.feeDetails?.message}
          </div>
          <hr style={{ border: "none", borderTop: "4px dotted black" }} />
          <div className="foodItems">
            {menuItemsData.map((item) => (
              <FoodItems item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Restaurant;
