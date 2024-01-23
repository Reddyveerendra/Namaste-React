import { imgPrefix } from "./config";
import { Error } from "./Error";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
export const Main = (props) => {
  return (
    <div className="restaurants">
      {props.data.map((item) => (
        <Link to={"/restaurant/" + item.id}>
          {
            <div key={item.name} className="cards">
              <div className="image-container">
                <img
                  className="background-image"
                  src={imgPrefix + item.cloudinaryImageId}
                  alt={item.name}
                />
                <div className="text-overlay">
                  <div className="text-background">
                    <h2>{item.aggregatedDiscountInfoV3.header}</h2>
                    <p>{item.aggregatedDiscountInfoV3.subHeader}</p>
                  </div>
                </div>
              </div>
              <div className="info">
                <h5>
                  {item.name.length <= 20
                    ? item.name
                    : item.name.slice(0, 17) + "..."}
                </h5>
                <div>
                  <p>
                    <i className="bi bi-star-fill star"></i>
                    {" " +
                      item.avgRatingString +
                      " . " +
                      item.sla.deliveryTime +
                      " mins"}
                  </p>
                </div>
                <h6>
                  {item.cuisines.join(",") <= 25
                    ? item.cuisines.join(",")
                    : item.cuisines.join(",").slice(0, 22) + "..."}
                </h6>
                <h6>{item.areaName}</h6>
              </div>
            </div>
          }
        </Link>
      ))}
    </div>
  );
};
