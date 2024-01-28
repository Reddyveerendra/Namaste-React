import React from "react";
import { imgPrefix } from "./Config";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Card = (props) => {
  const location = useParams();
  const {
    id,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    sla,
    avgRating,
    cuisines,
    areaName,
  } = { ...props.info };
  return (
    <Link
      to={`/${location.location}/${id}`}
      key={id} // Added key prop here
    >
      <div className="card" style={style.card} key={id}>
        <div className="restaurantImage">
          <img
            src={imgPrefix + cloudinaryImageId}
            alt={name}
            style={style.restaurantImage}
          />
          <h4
            style={{
              textAlign: "center",
              position: "absolute",
              bottom: "0px",
              color: "aliceblue",
              width: "250px",
              bottom: "40%",
              textTransform: "uppercase",
              right: "2px",
              left: "8px",
              background:
                "linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 50%)",
            }}
          >
            {aggregatedDiscountInfoV3 == undefined
              ? ""
              : aggregatedDiscountInfoV3.header +
                " " +
                aggregatedDiscountInfoV3.subHeader}
          </h4>
        </div>
        <div className="bottom" style={{ paddingLeft: "5px" }}>
          <h3>{name.length > 15 ? name.slice(0, 12) + "..." : name}</h3>
          <h6>{"" + avgRating + sla.deliveryTime}</h6>
          <h6>{cuisines[0] + " ," + cuisines[1]}</h6>
          <h6>{areaName}</h6>
        </div>
      </div>
    </Link>
  );
};

export default Card;
const style = {
  card: {
    wordWrap: "breakWord",
    flexDirection: "column",
    width: "max-content",
    height: "max-content",
    margin: "28px",
    padding: "8px",
    display: "flex",
  },
  restaurantImage: {
    borderRadius: "16px",
    width: "250px",
    height: "170px",
    position: "relative",
    display: "inline-block",
    borderRadius: "18px",
  },
};
