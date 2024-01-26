import React from "react";
import { useParams } from "react-router-dom";
const Restaurant = () => {
  const p = useParams();
  return <div>{p.location + p.id}</div>;
};

export default Restaurant;
