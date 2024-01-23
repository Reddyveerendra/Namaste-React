import React from "react";

export const Error = (props) => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h2>Sorry, some error has occurred!</h2>
    <p>We have no network to serve you in the location: {props.place}</p>
  </div>
);
