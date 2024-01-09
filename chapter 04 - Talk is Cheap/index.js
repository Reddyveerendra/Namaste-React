import React from "react";
import { createRoot } from "react-dom/client";

const TestComponent = () => {
    return (
        <React.Fragment>
            <h1>Hi am i working</h1>
            <h2>this is for testing</h2>
        </React.Fragment>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<TestComponent />);
