import { imgPrefix } from "./config";
export const Main = (props) => {
  return (
    <div className="restaurants">
      {props.data.map((item) => (
        <div key={item.name} className="cards">
          <div className="image-container">
            <img
              src={imgPrefix + item.cloudinaryImageId}
              alt={item.name}
              className="image"
            />
            <div className="text-overlay">
              {item.aggregatedDiscountInfoV3.header +
                " " +
                item.aggregatedDiscountInfoV3.subHeader}
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
      ))}
    </div>
  );
};
