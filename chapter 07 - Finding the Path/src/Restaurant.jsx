import React from "react";
import { useParams } from "react-router-dom";
function Restaurant() {
  const prams = useParams();
  console.log(prams);
  return (
    <div>
      <h1>Restaurant</h1>
    </div>
  );
}

export default Restaurant;
