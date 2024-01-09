import ReactDOM from "react-dom/client";
import React from "react";
import { BiBank } from 'react-icons/bi';
import { useState } from "react";
const title = () => {
    return (
        <div className="title">
            <h1>H1 TAG</h1>
            <h2>H2 TAG</h2>
            <h3>H3 TAG</h3>
        </div>
    );
};
const Header = () => {
    const [i, setI] = useState("")
    const handleChange = (e) => {
        setI(e.target.value)
    }
    return (
        <div className="Header" style={{ background: "red", height: "30px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bank" viewBox="0 0 16 16">
                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
            </svg>
            <div>
                <input value={i} type="text" placeholder="Search" onChange={handleChange}></input>
                <button type="search" className="btn btn-outline-primary">search</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><div>{title()}{<Header />}</div></React.StrictMode>);
