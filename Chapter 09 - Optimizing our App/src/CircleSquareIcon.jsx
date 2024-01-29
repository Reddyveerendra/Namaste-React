import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CircleSquareIconRed = () => {
  const circleContainerStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "red",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const squareContainerStyle = {
    width: "20px",
    height: "20px",
    border: "2px solid Red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div style={squareContainerStyle}>
            <div style={circleContainerStyle}>
              <i className="bi bi"></i>{" "}
              {/* Replace with the desired Bootstrap icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleSquareIconRed;
const CircleSquareIconGreen = () => {
  const circleContainerStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "green",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const squareContainerStyle = {
    width: "20px",
    height: "20px",
    border: "2px solid green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div style={squareContainerStyle}>
            <div style={circleContainerStyle}>
              <i className="bi bi"></i>{" "}
              {/* Replace with the desired Bootstrap icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CircleSquareIconGreen };
