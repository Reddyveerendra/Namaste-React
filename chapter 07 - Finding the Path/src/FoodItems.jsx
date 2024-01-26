import React, { useState } from "react";
import { imgPrefix } from "./Config";
import { useState } from "react";
const FoodItems = (props) => {
  const [count, SetCount] = useState(0);
  const item = props.item;
  return (
    <div
      className="item"
      key={item.id}
      style={{
        display: "flex",
        margin: "3% 0%",
        borderBottom: "1px solid #ccc",
        justifyContent: "space-between",
        padding: "5%",
      }}
    >
      <div className="left_item" style={{ textWrap: "pretty" }}>
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
        <img
          src={imgPrefix + item.imageId}
          alt={item.imageId}
          style={{ height: "100px", width: "120px" }}
        />
        <div
          className="counter"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <button
            type="button"
            onClick={() => {
              SetCount((val) => {
                return val == 0 ? 0 : val - 1;
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
  );
};

export default FoodItems;
