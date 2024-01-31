import React, { useState } from "react";
import { imgPrefix } from "./Config";
import { useState } from "react";
import CircleSquareIconRed from "./CircleSquareIcon";
import { CircleSquareIconGreen } from "./CircleSquareIcon";
const FoodItems = (props) => {
  const [count, SetCount] = useState(0);
  const item = props.item;
  return (
    <div className="item" key={item.id}>
      <div
        className="flex items-center justify-between"
        style={{
          margin: "3% 0%",
          borderBottom: "1px solid #ccc",
          padding: "5%",
        }}
      >
        <div className="left_item" style={{ whiteSpace: "pre-wrap" }}>
          {item.itemAttribute?.vegClassifier === "VEG" ? (
            <CircleSquareIconGreen />
          ) : (
            <CircleSquareIconRed />
          )}
          <div className="itemName">{item.name}</div>
          <div className="price">₹ {item.price / 100}</div>
          <div
            className="description"
            style={{ fontSize: "small", fontWeight: "100" }}
          >
            {item.description}
          </div>
        </div>
        <div className="rightItem" style={{ marginLeft: "10%" }}>
          {item.imageId ? (
            <img
              src={imgPrefix + item?.imageId}
              alt={item?.imageId}
              className="h-100 w-120"
            />
          ) : (
            ""
          )}
          <div className="counter flex justify-center gap-10 mt-10">
            <button
              type="button"
              onClick={() => {
                SetCount((val) => {
                  return val === 0 ? 0 : val - 1;
                });
              }}
            >
              -
            </button>
            {count}
            <button
              type="button"
              onClick={() => {
                SetCount((val) => {
                  return val + 1;
                });
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
