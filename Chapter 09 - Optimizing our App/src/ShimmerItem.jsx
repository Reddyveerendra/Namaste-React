import React from "react";

const ShimmerItem = (props) => (
  <div
    style={{
      display: "flex",
      margin: "3% 0%",
      borderBottom: "1px solid #ccc",
      justifyContent: "space-between",
      padding: "5%",
    }}
    className={`item${props.i}`}
  >
    <div style={{ textWrap: "pretty" }}>
      <div
        style={{
          height: "20px",
          width: "100px",
          background:
            "linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
          marginTop: "10px",
        }}
      ></div>
      <div
        style={{
          height: "20px",
          width: "100px",
          background:
            "linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
          marginTop: "10px",
        }}
      ></div>
      <div
        style={{
          height: "20px",
          width: "100px",
          background:
            "linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
          marginTop: "10px",
        }}
      ></div>
    </div>
    <div style={{ marginLeft: "10%" }}>
      <div
        style={{
          height: "100px",
          width: "120px",
          background:
            "linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            height: "20px",
            width: "20px",
            background:
              "linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
          }}
        ></div>
        <div> </div>
        <div
          style={{
            height: "20px",
            width: "20px",
            background:
              "linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
          }}
        ></div>
      </div>
    </div>
  </div>
);

export default ShimmerItem;
