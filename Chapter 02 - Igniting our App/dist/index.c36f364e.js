const container = document.createElement("div");
const h21 = React.createElement("h2", {
    className: "good"
}, "hi from js file");
const h22 = React.createElement("h2", {
    className: "good"
}, "this is to check react with parcel app");
const root = React.createRoot(document.getElementById("root"));
container.appendChild(h21);
container.appendChild(h22);
root.render(container);

//# sourceMappingURL=index.c36f364e.js.map
