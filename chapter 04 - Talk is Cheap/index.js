import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const fs = require('fs');
import './style.css'; // Make sure the path is correct
import logo from "./img/logo.png"
// Read the JSON file
const rawData = fs.readFileSync('data.json');
const importedData = JSON.parse(rawData);
// header
const Header = () => {
    const [val, setVal] = useState("")
    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        margin: "20px"
    }
    const navBarStyle = {
        display: "flex",
        width: "50%",
        justifyContent: "space-around",
        alignItems: "center"
    }
    return (
        <div className="header" style={headerStyle}>
            <img src={logo} alt="Logo" style={{ height: "51px", width: "76px" }} />
            <div className="nav-bar" style={navBarStyle}>
                <div className="search-container">
                    <input type="text" className="searchBar" placeholder="Type here ...." onChange={(e) => setVal(e.target.value)} value={val} />
                    <i className="bi bi-search"></i>
                </div>
                <a href="#" style={{ textDecoration: "none" }}><i className="bi bi-house"></i>Home</a>
                <a href="#" style={{ textDecoration: "none" }}><i className="bi bi-file-person"></i>Sign in</a>
                <a href="#" style={{ textDecoration: "none" }}><i className="bi bi-bag-check"></i>Cart</a>
            </div>
        </div>
    );
}
const Body = () => {
    return (
        <div className="restaurants" style={{
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "center"
        }}>
            {importedData.map((temp, index) => (
                <div key={index} style={{ width: "230", height: "260px", display: "flex", flexDirection: "column", wordWrap: "break-word", padding: "8px" }} className="cards">
                    <div className="image-container">
                        <img style={{ width: "250px", height: "170px", borderRadius: "16px" }} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + temp.info.cloudinaryImageId} alt={temp.info.name} className="image" />
                        <div className="text-overlay">{temp.info.aggregatedDiscountInfoV3.header + " " + temp.info.aggregatedDiscountInfoV3.subHeader}</div>
                    </div>
                    <div className="info" style={{ padding: "6px", margin: "0px" }}>
                        <h5 style={{ margin: "0px" }}>{(temp.info.name).length <= 26 ? temp.info.name : (temp.info.name).slice(0, 23) + '...'}</h5>
                        <div style={{ margin: "0px" }}>
                            <p style={{ margin: "0px" }}><i class="bi bi-star-fill" style={{ color: "gold", background: "light-green", borderRadius: "3px" }}></i>{temp.info.avgRatingString + " . " + temp.info.sla.deliveryTime + " mins"}</p>
                        </div>
                        <h6 style={{ margin: "0px" }}>{temp.info.cuisines.join(",") <= 31 ? temp.info.cuisines.join(",") : (temp.info.cuisines.join(",")).slice(0, 28) + "..."}</h6>
                        <h6 style={{ margin: "0px" }}>{temp.info.areaName}</h6>
                    </div>
                </div>
            ))}
        </div>
    );
};



const Footer = () => {
    return (
        <React.Fragment>
            <h1>Footer</h1>
        </React.Fragment>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        {<Header />}
        {<Body />}
        {<Footer />}
    </>
);
