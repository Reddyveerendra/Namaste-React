import React, { useState } from "react";
import { imgPrefix } from "./Config";
import { useState } from "react";
import CircleSquareIconRed from "./CircleSquareIcon";
import { CircleSquareIconGreen } from "./CircleSquareIcon";
import { addItem, removeItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
const FoodItems = (props) => {
  const [count, SetCount] = useState(0);
  const item = props.item;
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="item" key={item.id}>
      <div
        className="flex items-center justify-between"
        style={{
          margin: "0% 0%",
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
              className="h-[71px] w-[84px]"
            />
          ) : (
            ""
          )}
          <div className="counter flex justify-center gap-[22px] mt-[10px]">
            <button
              type="button"
              onClick={() => {
                count > 0
                  ? (SetCount((val) => {
                      return val === 0 ? 0 : val - 1;
                    }),
                    handleRemove(item))
                  : "";
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
                }),
                  handleAdd(item);
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
