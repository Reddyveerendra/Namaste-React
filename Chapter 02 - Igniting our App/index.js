import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById("root");

const h21 = React.createElement("h2", { className: "good" }, "hi from js file");
const h22 = React.createElement("h2", { className: "good" }, "this is to check React with Parcel app");

ReactDOM.render(
    React.createElement("div", null, h21, h22),
    container
);
